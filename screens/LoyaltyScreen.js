import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import {
  Ionicons,
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { Divider } from "react-native-elements";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
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
    <ScrollView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#136979", height: 50 }}></View>
      <View>
        <Text style={styles.title}>Mes avantages fidélité</Text>
      </View>
      {/* <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          marginLeft: "5%",
          marginBottom: "5%",
          color: "#136979",
        }}
      >
        Mon cumul de S
      </Text> */}
      <View style={{ marginBottom: "3%" }}>
        <Image source={require("../assets/s-titre1.png")} />
      </View>

      <View>
        <ProgressBar />
      </View>
      <View>
        <Text style={styles.details}>{spoints}/250S</Text>
      </View>
      <View>
        <Text style={styles.text}>Plus que 90S pour un cookie offert !</Text>
      </View>

      <Divider style={{ marginTop: "5%" }} />

      {/* <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          marginLeft: "5%",
          marginBottom: "5%",
          color: "#136979",
          marginTop: "5%",
        }}
      >
        Mes récompenses
      </Text> */}
      <View style={{ marginBottom: "3%", marginTop: "5%" }}>
        <Image source={require("../assets/recompenses.png")} />
      </View>
      <View>
        <Text style={styles.titreRecomp}>Collectez des S</Text>
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
            width: "10%",
            margin: "3%",
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#ff4d6d",
          }}
        >
          1€ dépensé = 1S
        </Text>
      </View>

      {/* 1 boisson offerte */}
      <View style={styles.view}>
        <Fontisto
          name="coffeescript"
          size={30}
          color="#136979"
          style={{
            width: "10%",
            margin: "3%",
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#ff4d6d",
          }}
        >
          1ère commande = 1 boisson offerte
        </Text>
      </View>

      {/* 50S*/}
      <View style={styles.view}>
        <FontAwesome5
          name="cookie-bite"
          size={30}
          color="#136979"
          style={{
            width: "10%",
            margin: "3%",
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#ff4d6d",
          }}
        >
          50S = 1 cookie offert !
        </Text>
      </View>
      {/* 520S*/}
      <View style={styles.view}>
        <MaterialCommunityIcons
          name="gift"
          size={30}
          color="#136979"
          style={{
            width: "10%",
            margin: "3%",
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#ff4d6d",
          }}
        >
          250S = 1 Menu du Jour offert !
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
