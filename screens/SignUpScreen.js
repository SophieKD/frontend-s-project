import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Input, Overlay } from "react-native-elements";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { connect } from "react-redux";

function SignUpScreen(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState([]);

  let errorToDisplay = [];
  for (let i = 0; i < error.length; i++) {
    if (error.length > 0) {
      if (error[i].lastname) {
        errorToDisplay.push(error[i].lastname);
      } else if (error[i].firstname) {
        errorToDisplay.push(error[i].firstname);
      } else if (error[i].password) {
        errorToDisplay.push(error[i].password);
      } else if (error[i].pseudo) {
        errorToDisplay.push(error[i].pseudo);
      } else if (error[i].email) {
        errorToDisplay.push(error[i].email);
      } else if (error[i].mobile) {
        errorToDisplay.push(error[i].mobile);
      }
    }
  }
  console.log("---errorToDisplay =>", errorToDisplay);

  useEffect(() => {
    AsyncStorage.getItem(
      "userLocalStorage",
      function (error, userInLocalStorage) {
        if (userInLocalStorage) {
          let userInLocalStorageParsed = JSON.parse(userInLocalStorage);
          let pseudoOfUserInLocalStorage = userInLocalStorageParsed.pseudo;
          setPseudo(pseudoOfUserInLocalStorage);
          setIsUserRegistered(true);
        }
      }
    );
  }, []);

  let loginJSX = (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>Créer un compte</Text>
      <Text style={{ marginTop: 10 }}>Prénom</Text>
      <Input
        containerStyle={{
          marginBottom: 0,
          width: "70%",
        }}
        inputStyle={{
          marginLeft: 10,
        }}
        placeholder="Prénom"
        onChangeText={(val) => setFirstname(val)}
        value={firstname}
      />
      <Text>Nom</Text>
      <Input
        containerStyle={{ marginBottom: 0, width: "70%" }}
        inputStyle={{ marginLeft: 10 }}
        placeholder="Nom"
        onChangeText={(val) => setLastname(val)}
        value={lastname}
      />
      <Text>Pseudo</Text>
      <Input
        containerStyle={{ marginBottom: 0, width: "70%" }}
        inputStyle={{ marginLeft: 10 }}
        placeholder="Pseudo"
        onChangeText={(val) => setPseudo(val)}
        value={pseudo}
      />
      <Text>Mobile</Text>
      <Input
        containerStyle={{ marginBottom: 0, width: "70%" }}
        inputStyle={{ marginLeft: 10 }}
        placeholder="Mobile"
        onChangeText={(val) => setMobile(val)}
        value={mobile}
      />
      <Text>Email</Text>
      <Input
        containerStyle={{ marginBottom: 0, width: "70%" }}
        inputStyle={{ marginLeft: 10 }}
        placeholder="Email"
        onChangeText={(val) => setEmail(val)}
        value={email}
      />
      <Text>Password</Text>
      <Input
        containerStyle={{ marginBottom: 0, width: "70%" }}
        inputStyle={{ marginLeft: 10 }}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(val) => setPassword(val)}
        value={password}
      />
      <Button
        buttonStyle={{ marginTop: 0 }}
        title="Créer son compte"
        type="solid"
        onPress={() =>
          onPressSignUp(firstname, lastname, pseudo, mobile, email, password)
        }
      />
      <Text
        onPress={() => goToSignIn()}
        style={{ fontWeight: "bold", marginTop: 15, marginBottom: 15 }}
      >
        Already have an account? Press here to Sign-In!
      </Text>
      <Overlay isVisible={visible}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Error!
        </Text>
        {errorToDisplay.map((e, i) => (
          <Text key={i} style={{ marginTop: 3, fontSize: 15 }}>
            {e}
          </Text>
        ))}
        <Button
          title="Got it!"
          onPress={() => toggleOverlay()}
          style={{ marginTop: 15 }}
        />
      </Overlay>
    </View>
  );

  if (isUserRegistered) {
    loginJSX = (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ marginBottom: 25 }}>Welcome Back {pseudo}</Text>
        <Text>
          Not {pseudo}? Press
          <Text onPress={() => goToSignIn()} style={{ fontWeight: "bold" }}>
            {" "}
            here to Sign-In
          </Text>{" "}
          or
          <Text onPress={() => goToSignUp()} style={{ fontWeight: "bold" }}>
            {" "}
            here to Sign-Up!
          </Text>
        </Text>
      </View>
    );
  }

  const onPressSignUp = async (
    firstname,
    lastname,
    pseudo,
    mobile,
    email,
    password
  ) => {
    const data = await fetch("http://192.168.1.58:3000/users/actions/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `firstname=${firstname}&lastname=${lastname}&pseudo=${pseudo}&mobile=${mobile}&email=${email}&password=${password}`,
    });

    const response = await data.json();
    console.log("---response", response);

    if (response.result === true) {
      props.onUserSignUp(response.userLoggedIn);
      AsyncStorage.setItem(
        "userLocalStorage",
        JSON.stringify(response.userLoggedIn)
      );
    } else {
      setError(response.error);
      setVisible(true);
    }

    //Par la suite cette fonction enverra un lien vers:
    //  Si commande en cours = page relative à la commande
    //  Si pas de commande en cours = page du profil
  };

  const goToSignIn = () => {
    AsyncStorage.removeItem("userLocalStorage");
    props.logOutReducer();
    setPseudo("");
    setIsUserRegistered(false);

    //Par la suite cette fonction enverra un lien vers la Page de sign-in pas encore créée
  };

  const goToSignUp = () => {
    AsyncStorage.removeItem("userLocalStorage");
    props.logOutReducer();
    setPseudo("");
    setIsUserRegistered(false);
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return <View style={{ flex: 1 }}>{loginJSX}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    onUserSignUp: function (userSignedUp) {
      dispatch({ type: "SignUp", userSignedUp });
    },
    logOutReducer: function () {
      dispatch({ type: "logOut" });
    },
  };
}

export default connect(null, mapDispatchToProps)(SignUpScreen);
