import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Card, Image } from "react-native-elements";
import { Divider } from "react-native-elements";
import PaymentButton from "../components/Orders/PaymentButton";
import { Ionicons } from "@expo/vector-icons";

// SOPHIE : A FAIRE + creation Button PAYER
function OrderFinalScreen(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <View style={{ backgroundColor: "#136979", height: 50 }} />
        <View>
          <Text style={styles.title}>Finaliser la commande</Text>
        </View>
        <Text style={styles.subtitle}>Retrait prévu : </Text>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            width: "90%",
            margin: "5%",
            height: 50,
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="time"
            size={20}
            color="#136979"
            style={{
              width: "7%",
              margin: "5%",
            }}
          />
          <Text
            style={{
              fontSize: 17,
              color: "#136979",
            }}
          >
            Vendredi 4 Mars à 12h15
          </Text>
        </View>
        <Divider />
        <Text style={styles.subtitle}>Payer avec :</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            width: "90%",
            margin: "5%",
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{
              fontSize: 17,
              color: "black",
              width: "60%",
              margin: "5%",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            Moyens de paiement
          </Text>
        </View>
      </View>
      <PaymentButton navigation={props.navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#136979",
    margin: "5%",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: "5%",
  },
});

export default OrderFinalScreen;
