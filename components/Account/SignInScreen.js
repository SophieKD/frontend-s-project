import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { Button, Input } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

function SignInScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const onPressSignIn = (email, password) => {
    props.onPressSignInParent(email, password);
  };

  const goToSignUp = () => {
    props.goToSignUpParent();
  };
  const onChangeEmail = (val) => {
    let emailToLowerCase = val.toLowerCase();
    setEmail(emailToLowerCase);
  };

  const changeSecureTextEntry = () => {
    setHidePassword(!hidePassword);
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
          marginTop: "15%",
        }}
      >
        <Image source={require("../../assets/logo-s-2.png")} />
      </View>

      <View style={styles.container}>
        <Text
          style={{
            fontWeight: "bold",
            color: "#136979",
            fontSize: 20,
            marginTop: "5%",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          Connectez-vous
        </Text>
        <Text
          style={{
            fontSize: 17,
            marginTop: "5%",
            marginBottom: "12%",
          }}
        >
          Connectez-vous et retrouvez tous vos avantages !
        </Text>
        <Input
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
          label={"Password"}
          labelStyle={{ color: "#136979", fontSize: 15 }}
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
          errorMessage={props.error.password}
        />
        <Button
          buttonStyle={{
            marginTop: 10,
            backgroundColor: "#136979",
            borderRadius: 30,
          }}
          title="S'identifier"
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
          onPress={() => onPressSignIn(email, password)}
        />
        <Text
          //Pour la suite, mécanique de récupération de password: onPress={() => goToPasswordForbidden()}
          style={{
            marginTop: 5,
            marginBottom: 15,
            textDecorationLine: "underline",
          }}
        >
          Mot de passe oublié
        </Text>
        <Text
          style={{
            marginTop: "15%",
            fontWeight: "bold",
            color: "#136979",
            fontSize: 17,
          }}
        >
          Pas de compte ?
        </Text>
        <Text
          onPress={() => goToSignUp()}
          style={{
            fontWeight: "bold",
            marginTop: 10,
            textDecorationLine: "underline",
            fontSize: 17,
          }}
        >
          Créez-en un !
        </Text>
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

export default SignInScreen;
