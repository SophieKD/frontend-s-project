import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import {
  Ionicons,
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";

import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ProgressBar from "../components/Loyalty/ProgressBar";

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
        } else {
          setSpoints(0);
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
  }, [props.isUserLoggedIn]);

  let countToDisplay = "50S";
  let delta = 50 - spoints;
  let productGranted = "cookie";
  let productReward = "cookie";
  let sReward;
  if (spoints >= 50) {
    countToDisplay = "250 S";
    delta = 250 - spoints;
    productGranted = "cookie";
    productReward = "plat du jour";
    sReward = (
      <Text style={styles.sReward}>
        <MaterialCommunityIcons name="party-popper" size={24} color="#136979" />
        1 {productGranted} offert
        <MaterialCommunityIcons name="party-popper" size={24} color="#136979" />
      </Text>
    );
  }

  let spointsBeforeReward = (
    <Text style={styles.text}>
      Plus que {delta} S pour 1 {productReward} offert !
    </Text>
  );

  if (spoints >= 250) {
    spointsBeforeReward = undefined;
    productGranted = "cookie ou 1 plat du jour";
    sReward = (
      <Text style={styles.sReward}>
        <MaterialCommunityIcons name="party-popper" size={24} color="#136979" />
        1 {productGranted} offert !
        <MaterialCommunityIcons name="party-popper" size={24} color="#136979" />
      </Text>
    );
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#136979", height: 50 }}></View>
      <View>
        <Text style={styles.title}>Mes avantages fidélité</Text>
      </View>
      <View style={{ marginBottom: "3%" }}>
        <Image source={require("../assets/s-titre1.png")} />
      </View>

      <View>
        <ProgressBar spointsToChild={spoints} />
      </View>
      <View>
        <Text style={styles.details}>
          {spoints}/{countToDisplay}
        </Text>
        {sReward}
      </View>
      <View>{spointsBeforeReward}</View>

      <View style={{ marginBottom: "3%", marginTop: "5%" }}>
        <Image source={require("../assets/recompenses.png")} />
      </View>
      <View>
        <Text style={styles.titreRecomp}>Collectez des S.</Text>
        <Text style={styles.soustitreRecomp}>
          Pour vous remercier de votre fidélité, nous vous offrons des cookies
          et des menus du jour.
        </Text>
      </View>

      {/* Collectez des S */}
      <View style={styles.view}>
        <Entypo
          name="smashing"
          size={30}
          color="#136979"
          style={{
            width: "12%",
            margin: "3%",
          }}
        />
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            color: "#ff4d6d",
          }}
        >
          1€ dépensé = 1 S
        </Text>
      </View>

      {/* 1 boisson offerte */}
      <View style={styles.view}>
        <Fontisto
          name="coffeescript"
          size={30}
          color="#136979"
          style={{
            width: "12%",
            margin: "3%",
          }}
        />
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            color: "#ff4d6d",
          }}
        >
          1 boisson offerte dès votre 1ère commande !
        </Text>
      </View>

      {/* 50S*/}
      <View style={styles.view}>
        <FontAwesome5
          name="cookie-bite"
          size={30}
          color="#136979"
          style={{
            width: "12%",
            margin: "3%",
          }}
        />
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            color: "#ff4d6d",
          }}
        >
          50 S = 1 cookie offert !
        </Text>
      </View>
      {/* 520S */}
      <View style={styles.view}>
        <MaterialCommunityIcons
          name="gift"
          size={30}
          color="#136979"
          style={{
            width: "12%",
            margin: "3%",
          }}
        />
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            color: "#ff4d6d",
          }}
        >
          250 S = 1 Menu du Jour offert !
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#136979",
    marginLeft: "5%",
    marginTop: "5%",
    marginBottom: "5%",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: "5%",
    marginTop: "5%",
    marginBottom: "5%",
  },
  view: {
    flex: 1,
    backgroundColor: "white",
    width: "90%",
    margin: "5%",
    height: 50,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "0%",
  },
  details: {
    fontSize: 17,
    color: "#136979",
    marginLeft: "5%",
    marginTop: "1%",
    marginRight: "6%",
    marginBottom: "3%",
    flex: 1,
    textAlign: "right",
  },
  sReward: {
    fontSize: 17,
    color: "#136979",
    fontWeight: "bold",
    marginLeft: "5%",
    marginTop: "1%",
    marginRight: "6%",
    marginBottom: "3%",
    flex: 1,
    textAlign: "center",
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#ff4d6d",
    margin: "5%",
    marginTop: "0%",
    flex: 1,
    textAlign: "center",
  },
  titreRecomp: {
    fontWeight: "bold",
    fontSize: 17,
    margin: "5%",
    marginTop: "0%",
    marginBottom: "2%",
    flex: 1,
  },
  soustitreRecomp: {
    fontSize: 17,
    margin: "5%",
    marginTop: "0%",
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
