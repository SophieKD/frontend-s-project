import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
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
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 12 }}>
        Connectes Toi
      </Text>
      <Input
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
        errorMessage={props.error.password}
      />
      <Button
        buttonStyle={{ marginTop: 5, marginBottom: 5 }}
        title="S'identifier"
        type="solid"
        onPress={() => onPressSignIn(email, password)}
      />
      <Text
        //Pour la suite, mécanique de récupération de password: onPress={() => goToPasswordForbidden()}
        style={{ marginTop: 15, marginBottom: 15 }}
      >
        You don't remember your password? Press here!
      </Text>
      <Text
        onPress={() => goToSignUp()}
        style={{ fontWeight: "bold", marginTop: 15, marginBottom: 15 }}
      >
        No account yet? Press here to Sign-Up!
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
    width: "100%",
  },
});

export default SignInScreen;
