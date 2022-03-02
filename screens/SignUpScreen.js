import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Input, Overlay } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { connect } from "react-redux";

function SignUpScreen(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const [isUserRegistered, setIsUserRegistered] = useState("SignUp");
  console.log("isUserRegistered =>", isUserRegistered);
  const [error, setError] = useState([]);
  console.log("---error =>", error);

  useEffect(() => {
    AsyncStorage.getItem(
      "userLocalStorage",
      function (error, userInLocalStorage) {
        if (userInLocalStorage) {
          let userInLocalStorageParsed = JSON.parse(userInLocalStorage);
          let pseudoOfUserInLocalStorage = userInLocalStorageParsed.pseudo;
          setPseudo(pseudoOfUserInLocalStorage);
          setIsUserRegistered("inLocalStorage");
        }
      }
    );
  }, []);

  let loginJSX;
  if (isUserRegistered === "SignUp") {
    loginJSX = (
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 12 }}>
          Créer un compte
        </Text>
        <Input
          inputContainerStyle={{ height: 35 }}
          label={"Prénom"}
          labelStyle={{ color: "black", fontSize: 18 }}
          containerStyle={{
            marginBottom: 0,
            width: "70%",
          }}
          inputStyle={{
            marginLeft: 10,
          }}
          placeholder="prénom"
          onChangeText={(val) => setFirstname(val)}
          value={firstname}
          errorMessage={error.firstname}
        />
        <Input
          inputContainerStyle={{ height: 35 }}
          label={"Nom"}
          labelStyle={{ color: "black", fontSize: 15 }}
          containerStyle={{ marginBottom: 0, width: "70%" }}
          inputStyle={{ marginLeft: 10 }}
          placeholder="nom"
          onChangeText={(val) => setLastname(val)}
          value={lastname}
          errorMessage={error.lastname}
        />
        <Input
          inputContainerStyle={{ height: 35 }}
          label={"Pseudo"}
          labelStyle={{ color: "black", fontSize: 15 }}
          containerStyle={{ marginBottom: 0, width: "70%" }}
          inputStyle={{ marginLeft: 10 }}
          placeholder="pseudo"
          onChangeText={(val) => setPseudo(val)}
          value={pseudo}
          errorMessage={error.pseudo}
        />
        <Input
          inputContainerStyle={{ height: 35 }}
          label={"Mobile"}
          labelStyle={{ color: "black", fontSize: 15 }}
          containerStyle={{ marginBottom: 0, width: "70%" }}
          inputStyle={{ marginLeft: 10 }}
          placeholder="mobile"
          onChangeText={(val) => setMobile(val)}
          value={mobile}
          errorMessage={error.mobile}
        />
        <Input
          inputContainerStyle={{ height: 35 }}
          label={"Email"}
          labelStyle={{ color: "black", fontSize: 15 }}
          containerStyle={{ marginBottom: 0, width: "70%" }}
          inputStyle={{ marginLeft: 10 }}
          placeholder="email"
          onChangeText={(val) => onChangeEmail(val)}
          value={email}
          errorMessage={error.email}
        />
        <Input
          inputContainerStyle={{ height: 35 }}
          label={"Password"}
          labelStyle={{ color: "black", fontSize: 15 }}
          containerStyle={{ marginBottom: 0, width: "70%" }}
          inputStyle={{ marginLeft: 10 }}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(val) => setPassword(val)}
          value={password}
          errorMessage={error.password}
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
          onPress={() => setIsUserRegistered("SignIn")}
          style={{ fontWeight: "bold", marginTop: 15, marginBottom: 15 }}
        >
          Already have an account? Press here to Sign-In!
        </Text>
      </View>
    );
  }

  if (isUserRegistered === "inLocalStorage") {
    loginJSX = (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ marginBottom: 25 }}>
          <MaterialCommunityIcons name="party-popper" size={24} color="black" />{" "}
          Welcome to The "S" App{" "}
          <Text style={{ fontWeight: "bold" }}>{pseudo}</Text>!{" "}
          <MaterialCommunityIcons name="party-popper" size={24} color="black" />
        </Text>
        <View style={{ marginBottom: 25 }}>
          <Text
            style={{ fontWeight: "bold", marginBottom: 10 }}
            onPress={() => goToAccountPage()}
          >
            Press here to View Your Account !
          </Text>
          <FontAwesome5
            name="hand-peace"
            size={24}
            color="black"
            style={{ alignSelf: "center" }}
            onPress={() => goToAccountPage()}
          />
        </View>
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

  if (isUserRegistered === "SignIn") {
    loginJSX = (
      <View style={styles.container}>
        <Input
          label={"Email"}
          labelStyle={{ color: "black", fontSize: 15 }}
          containerStyle={{ marginBottom: 0, width: "70%" }}
          inputStyle={{ marginLeft: 10 }}
          placeholder="email"
          onChangeText={(val) => onChangeEmail(val)}
          value={email}
          errorMessage={error.email}
        />
        <Input
          label={"Password"}
          labelStyle={{ color: "black", fontSize: 15 }}
          containerStyle={{ marginBottom: 0, width: "70%" }}
          inputStyle={{ marginLeft: 10 }}
          placeholder="password"
          secureTextEntry={hidePassword}
          onChangeText={(val) => setPassword(val)}
          value={password}
          rightIcon={
            <FontAwesome
              name="eye"
              size={24}
              color="grey"
              onPress={() => changeSecureTextEntry()}
            />
          }
          errorMessage={error.password}
        />
        <Button
          buttonStyle={{ marginTop: 5, marginBottom: 5 }}
          title="S'identifier"
          type="solid"
          onPress={() => onPressSignIn(email, password)}
        />
        <Text
          // onPress={() => goToPasswordForbidden()}
          style={{ marginTop: 15, marginBottom: 15 }}
        >
          You don't remember your password? Press here!
        </Text>
        <Text
          onPress={() => setIsUserRegistered("SignUp")}
          style={{ fontWeight: "bold", marginTop: 15, marginBottom: 15 }}
        >
          No account yet? Press here to Sign-Up!
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
      setIsUserRegistered("inLocalStorage");
      setPseudo(response.userLoggedIn.pseudo);
    } else {
      setError(response.error);
    }

    //Par la suite cette fonction enverra un lien vers:
    //  Si commande en cours = page relative à la commande
    //  Si pas de commande en cours = page du profil
  };

  const onPressSignIn = async (email, password) => {
    const data = await fetch("http://192.168.1.58:3000/users/actions/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `email=${email}&password=${password}`,
    });

    const response = await data.json();
    console.log("---response", response);

    if (response.result === true) {
      props.onUserSignIn(response.userLoggedIn);
      AsyncStorage.setItem(
        "userLocalStorage",
        JSON.stringify(response.userLoggedIn)
      );
      setIsUserRegistered("inLocalStorage");
      setPseudo(response.userLoggedIn.pseudo);
    } else {
      setError(response.error);
    }
  };

  const goToSignIn = () => {
    AsyncStorage.removeItem("userLocalStorage");
    props.logOutReducer();
    setPseudo("");
    setIsUserRegistered("SignIn");
  };

  const goToSignUp = () => {
    AsyncStorage.removeItem("userLocalStorage");
    props.logOutReducer();
    setPseudo("");
    setIsUserRegistered("SignUp");
  };

  const goToAccountPage = () => {
    console.log("--- press on goToAccountPage détected");
  };

  const onChangeEmail = (val) => {
    let emailToLowerCase = val.toLowerCase();
    setEmail(emailToLowerCase);
  };

  const changeSecureTextEntry = () => {
    setHidePassword(!hidePassword);
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
    onUserSignIn: function (userSignedIn) {
      dispatch({ type: "SignIn", userSignedIn });
    },
    logOutReducer: function () {
      dispatch({ type: "logOut" });
    },
  };
}

export default connect(null, mapDispatchToProps)(SignUpScreen);
