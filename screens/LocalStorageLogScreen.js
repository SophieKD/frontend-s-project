import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { connect } from "react-redux";

function LocaleStorageLogScreen(props) {
  const [pseudo, setPseudo] = useState("");

  useEffect(() => {
    AsyncStorage.getItem(
      "userLocalStorage",
      function (error, userInLocalStorage) {
        if (userInLocalStorage) {
          let userInLocalStorageParsed = JSON.parse(userInLocalStorage);
          let pseudoOfUserInLocalStorage = userInLocalStorageParsed.pseudo;
          setPseudo(pseudoOfUserInLocalStorage);
          //   setIsUserRegistered("inLocalStorage");
        }
      }
    );
  }, []);

  const goToSignIn = () => {
    AsyncStorage.removeItem("userLocalStorage");
    props.logOutReducer();
    props.stateOfUserLogReducer("signIn");
    // props.navigation.navigate("BottomNavigator", { screen: "Mon compte" });
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

  return (
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

function mapDispatchToProps(dispatch) {
  return {
    logOutReducer: function () {
      dispatch({ type: "logOut" });
    },
    stateOfUserLogReducer: function () {
      dispatch({ type: "signIn" });
    },
  };
}

export default connect(null, mapDispatchToProps)(LocaleStorageLogScreen);
