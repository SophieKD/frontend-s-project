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
        <Text style={styles.title}>Finaliser la commande</Text>
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>
          Retrait prévu :{" "}
        </Text>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            width: "90%",
            margin: "5%",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: "136979",
            }}
          >
            Vendredi 4 Mars à 12h15
          </Text>
        </View>
      </View>
      <PaymentButton navigation={props.navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "80%",
    margin: "10%",
  },
  title: {
    marginBottom: 15,
    fontWeight: "bold",
    fontSize: 20,
    color: "#136979",
  },
});

export default OrderFinalScreen;
