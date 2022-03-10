import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import LoyaltyButton from "../components/Orders/LoyaltyButton";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Divider } from "react-native-elements";
import LoyaltyWinSButton from "../components/Orders/LoyaltyWinSButton";

function OrderConfirmationScreen(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <View style={{ backgroundColor: "#136979", height: 50 }} />
        <View>
          <Text style={styles.title}>Merci pour votre commande</Text>
        </View>
        <Text style={styles.subtitle}>Elle sera prête: </Text>
        <View style={styles.view}>
          <Ionicons
            name="time"
            size={27}
            color="#136979"
            style={{
              width: "7%",
              margin: "3%",
            }}
          />
          <Text
            style={{
              fontSize: 17,
              color: "#136979",
            }}
          >
            Vendredi 11 Mars à 17h45
          </Text>
        </View>

        <Divider />

        <Text style={styles.subtitle}>Rappel de votre commande</Text>
        <View
          style={{
            flex: 1,
            width: "90%",
            margin: "5%",
            height: 50,
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "0%",
            marginBottom: "0%",
          }}
        >
          <Text
            style={{
              fontSize: 17,
              color: "black",
              marginLeft: "5%",
              marginTop: "6%",
            }}
          >
            1
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: "black",
              marginLeft: "5%",
            }}
          >
            Lasagnes Maison
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: "black",
              marginLeft: "30%",
            }}
          >
            9,90€
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            width: "90%",
            margin: "5%",
            height: 50,
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "0%",
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "#136979",
              marginLeft: "5%",
            }}
          >
            Montant de la commande
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: "#136979",
              marginLeft: "12%",
              fontWeight: "bold",
            }}
          >
            13,80€
          </Text>
        </View>

        <Divider />

        <Text style={styles.subtitle}>Payée avec: </Text>
        <View style={styles.view}>
          <FontAwesome5
            name="cc-visa"
            size={27}
            color="#136979"
            style={{
              width: "10%",
              margin: "3%",
            }}
          />
          <Text
            style={{
              fontSize: 17,
              color: "#136979",
              marginLeft: "5%",
            }}
          >
            497470XXXXXX7454
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: "#136979",
              marginLeft: "10%",
            }}
          >
            13,80€
          </Text>
        </View>

        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#ff4d6d",
              margin: "5%",
              marginTop: "0%",
            }}
          >
            Vous avez obtenu 14S
          </Text>
        </View>
      </View>
      <LoyaltyButton navigation={props.navigation} />
      <LoyaltyWinSButton navigation={props.navigation} />
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
  wallettext: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#136979",
    marginLeft: "30%",
  },
});

export default OrderConfirmationScreen;
