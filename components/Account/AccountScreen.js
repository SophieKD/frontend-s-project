import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

function AccountScreen(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log("---useEffect AccountScreen");
    AsyncStorage.getItem(
      "userLocalStorage",
      function (error, userInLocalStorage) {
        if (userInLocalStorage) {
          let user = JSON.parse(userInLocalStorage);
          console.log("---userParsed =>", user);
          setFirstname(user.firstname);
          setLastname(user.lastname);
          setPseudo(user.pseudo);
          setMobile(user.mobile);
          setEmail(user.email);
          setToken(user.token);
        }
      }
    );
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/spaceMonkey.png")}
        style={{ height: 160, width: 160, margin: 15 }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>{pseudo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 25,
  },
});

export default AccountScreen;
