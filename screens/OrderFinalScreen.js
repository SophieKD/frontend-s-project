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
            Vendredi 4 Mars à 12h15
          </Text>
        </View>
        <Divider />
        <Text style={styles.subtitle}>Payer avec :</Text>
        <View style={styles.view}>
          <Ionicons
            name="chevron-forward-circle"
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
              color: "black",
            }}
          >
            Ajouter une carte bancaire
          </Text>
        </View>
        <View style={styles.view}>
          <Ionicons
            name="wallet"
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
              color: "black",
            }}
          >
            Utiliser ma cagnotte
          </Text>
          <Text style={styles.wallettext}> 7€</Text>
        </View>
        <Divider />
        <Text style={styles.subtitle}>Détail de la commande</Text>
        <View style={styles.view}>
          {/* SOPHIE : EN COURS A REGLER */}
          <Text
            style={{
              fontSize: 17,
              color: "black",
              //   width: "10%",
              margin: "5%",
            }}
          >
            1
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              color: "black",
              width: "40%",
              margin: "5%",
            }}
          >
            Lasagnes Maison
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: "black",
              width: "20%",
              margin: "5%",
            }}
          >
            9,90€
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

export default OrderFinalScreen;
