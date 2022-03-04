import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Card, Image } from "react-native-elements";
import NavCategories from "../components/Products/NavCategories";
import AddButton from "../components/Products/AddButton";
import ViewCartButton from "../components/Products/ViewCartButton";
import LoyaltyButton from "../components/Orders/LoyaltyButton";

// SOPHIE : A FAIRE + creation Button "gagnez des S"
function OrderConfirmationScreen(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <View style={{ backgroundColor: "#136979", height: 50 }} />
        <Text style={styles.title}>
          Merci pour votre commande. Elle sera prête vendredi 4 Mars à 16h30
        </Text>
        <LoyaltyButton navigation={props.navigation} />
      </View>
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
