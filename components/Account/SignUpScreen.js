import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Input } from "react-native-elements";

function SignUpScreen(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPressSignUp = (
    firstname,
    lastname,
    pseudo,
    mobile,
    email,
    password
  ) => {
    props.onPressSignUpParent(
      firstname,
      lastname,
      pseudo,
      mobile,
      email,
      password
    );
  };

  const goToSignIn = () => {
    props.goToSignInParent();
  };

  const onChangeEmail = (val) => {
    let emailToLowerCase = val.toLowerCase();
    setEmail(emailToLowerCase);
  };

  return (
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
        errorMessage={props.error.firstname}
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
        errorMessage={props.error.lastname}
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
        errorMessage={props.error.pseudo}
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
        errorMessage={props.error.mobile}
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
        errorMessage={props.error.email}
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
        errorMessage={props.error.password}
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
