import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";

function LoyaltyScreen(props) {
  const [pseudo, setPseudo] = useState("");
  const [token, setToken] = useState("");
  const [spoints, setSpoints] = useState(0);
  console.log("---spoints =>", spoints);

  useEffect(() => {
    AsyncStorage.getItem(
      "userLocalStorage",
      function (error, userInLocalStorage) {
        if (userInLocalStorage) {
          let user = JSON.parse(userInLocalStorage);
          console.log("---user =>", user);
          setPseudo(user.pseudo);
          setToken(user.token);
          getSpoints(user.token);
        }
      }
    );

    const getSpoints = async (token) => {
      const url = `https://ls-project-capsule.herokuapp.com/user/my-s-points/${token}`;
      let rawSpoints = await fetch(url);
      console.log("---rawSpoints", rawSpoints);
      let spointsResponse = await rawSpoints.json();
      console.log("---ordersResponse =>", spointsResponse);
      setSpoints(spointsResponse.spoints);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>My S-Points : {spoints}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function mapStateToProps(state) {
  console.log("---state in loyaltyScreen", state.userLoggedIn);
  return {
    isUserLoggedIn: state.userLoggedIn,
  };
}

export default connect(mapStateToProps, null)(LoyaltyScreen);
