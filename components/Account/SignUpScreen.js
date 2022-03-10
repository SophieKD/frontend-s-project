import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
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
    <ScrollView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#136979", height: 50 }} />
      <View
        style={{
          flex: 1,
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <Image source={require("../../assets/logo-s-2.png")} />
      </View>

      <View style={styles.container}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: "#136979",
          }}
        >
          Créez un compte
        </Text>
        <Text
          style={{
            fontSize: 17,
            marginTop: "5%",
            marginBottom: "5%",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          Créez votre compte et profitez de vos avantages !
        </Text>
        <Input
          inputContainerStyle={{ height: 35 }}
          label={"Prénom"}
          labelStyle={{ color: "#136979", fontSize: 15 }}
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
          labelStyle={{ color: "#136979", fontSize: 15 }}
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
          labelStyle={{ color: "#136979", fontSize: 15 }}
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
          labelStyle={{ color: "#136979", fontSize: 15 }}
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
          labelStyle={{ color: "#136979", fontSize: 15 }}
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
          labelStyle={{ color: "#136979", fontSize: 15 }}
          containerStyle={{ marginBottom: 0, width: "70%" }}
          inputStyle={{ marginLeft: 10 }}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(val) => setPassword(val)}
          value={password}
          errorMessage={props.error.password}
        />
        <Button
          buttonStyle={{
            marginTop: 0,
            backgroundColor: "#136979",
            borderRadius: 30,
          }}
          title="Créer son compte"
          type="solid"
          containerStyle={{
            width: "60%",
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
          }}
          onPress={() =>
            onPressSignUp(firstname, lastname, pseudo, mobile, email, password)
          }
        />
        <Text
          style={{
            marginTop: "8%",
            fontWeight: "bold",
            color: "#136979",
            fontSize: 17,
          }}
        >
          Vous avez déjà un compte ?
        </Text>
        <Text
          onPress={() => goToSignIn()}
          style={{
            fontWeight: "bold",
            marginTop: 10,
            textDecorationLine: "underline",
            fontSize: 17,
          }}
        >
          Cliquez ici pour vous connecter !
        </Text>
        <View style={{ height: 50 }}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    width: "100%",
  },
});

export default SignUpScreen;
