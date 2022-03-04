import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Card, Image } from "react-native-elements";
import NavCategories from "../components/Products/NavCategories";
import AddButton from "../components/Products/AddButton";
import ViewCartButton from "../components/Products/ViewCartButton";

// SOPHIE : A FAIRE + creation Button
function OrderConfirmationScreen(props) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <Text> Merci pour votre commande !</Text>
      {/* <PaymentButton navigation={props.navigation} /> */}
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

export default OrderConfirmationScreen;
