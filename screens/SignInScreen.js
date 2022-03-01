import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Input, Overlay } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { connect } from "react-redux";

function SignInScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const changeSecureTextEntry = () => {
    setHidePassword(!hidePassword);
  };

  const onPressSignIn = (email, password) => {
    console.log(
      "---onPressSignIn détecté, email, password =>",
      email,
      password
    );
  };

  const goToSignUp = () => {
    console.log("---click détecté sur goToSignUp");
    props.navigation.navigate("BottomNavigator", { screen: "SignUp" });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>Email</Text>
      <Input
        containerStyle={{ marginBottom: 0, width: "70%" }}
        inputStyle={{ marginLeft: 10 }}
        placeholder="Email"
        onChangeText={(val) => setEmail(val)}
        value={email}
      />
      <Text style={{ fontWeight: "bold" }}>Password</Text>
      <Input
        containerStyle={{ marginBottom: 0, width: "70%" }}
        inputStyle={{ marginLeft: 10 }}
        placeholder="Password"
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
      />
      <Button
        buttonStyle={{ marginTop: 0 }}
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
  },
});

function mapDispatchToProps(dispatch) {
  return {
    onUserSignIn: function (userSignedIn) {
      dispatch({ type: "SignUp", userSignedIn });
    },
    //   logOutReducer: function () {
    //     dispatch({ type: "logOut" });
    //   },
  };
}

export default connect(null, mapDispatchToProps)(SignInScreen);
