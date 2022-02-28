import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Input } from "react-native-elements";

import AsyncStorage from "@react-native-async-storage/async-storage";

function SignUpScreen() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isUserRegistered, setIsUserRegistered] = useState(false);

  useEffect(() => {
    console.log("#1- useEffect");
    AsyncStorage.getItem("userLocalStorage", function (error, dataUser) {
      console.log("---userLocalStorageInGetItem =>", JSON.parse(dataUser));
      let dataUserParsed = JSON.parse(dataUser);
      if (dataUserParsed) {
        setPseudo(dataUserParsed.pseudo);
        setIsUserRegistered(true);
      }
    });
  }, [isUserRegistered]);

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
      />
      <Text>Nom</Text>
      <Input
        containerStyle={{ marginBottom: 0, width: "70%" }}
        inputStyle={{ marginLeft: 10 }}
        placeholder="Nom"
        onChangeText={(val) => setLastname(val)}
      />
      <Text>Pseudo</Text>
      <Input
        containerStyle={{ marginBottom: 0, width: "70%" }}
        inputStyle={{ marginLeft: 10 }}
        placeholder="Pseudo"
        onChangeText={(val) => setPseudo(val)}
      />
      <Text>Mobile</Text>
      <Input
        containerStyle={{ marginBottom: 0, width: "70%" }}
        inputStyle={{ marginLeft: 10 }}
        placeholder="Mobile"
        onChangeText={(val) => setMobile(val)}
      />
      <Text>Email</Text>
      <Input
        containerStyle={{ marginBottom: 0, width: "70%" }}
        inputStyle={{ marginLeft: 10 }}
        placeholder="Email"
        inputStyle="email"
        onChangeText={(val) => setEmail(val)}
      />
      <Text>Password</Text>
      <Input
        containerStyle={{ marginBottom: 0, width: "70%" }}
        inputStyle={{ marginLeft: 10 }}
        placeholder="Password"
        inputStyle="password"
        secureTextEntry={true}
        onChangeText={(val) => setPassword(val)}
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

  const onPressSignUp = (
    firstname,
    lastname,
    pseudo,
    mobile,
    email,
    password
  ) => {
    AsyncStorage.setItem(
      "userLocalStorage",
      JSON.stringify({ firstname, lastname, pseudo, mobile, email, password })
    );

    //Par la suite cette fonction enverra un lien vers:
    //  Si commande en cours = page relative à la commande
    //  Si pas de commande en cours = page du profil
  };

  const goToSignIn = () => {
    console.log("---click détecté goToSignIn");
    AsyncStorage.removeItem("userLocalStorage");
    setPseudo("");

    //Par la suite cette fonction enverra un lien vers la Page de sign-in pas encore créée
  };

  const goToSignUp = () => {
    console.log("---click détecté goToSignUp");
    AsyncStorage.removeItem("userLocalStorage");
    setPseudo("");
    setIsUserRegistered(false);
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

export default SignUpScreen;
