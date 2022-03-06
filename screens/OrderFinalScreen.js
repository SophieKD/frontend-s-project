import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import PaymentButton from "../components/Orders/PaymentButton";
import { Ionicons } from "@expo/vector-icons";

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
              marginBottom: "0%",
            }}
          >
            Vous allez gagner 14S
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#ff4d6d",
              margin: "5%",
              marginTop: "0%",
            }}
          >
            en validant cette commande
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
              color: "black",
              marginLeft: "5%",
              marginTop: "5%",
            }}
          >
            Montant de la commande
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: "black",
              marginLeft: "10%",
              fontWeight: "bold",
            }}
          >
            13,80€
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
              fontSize: 20,
              fontWeight: "bold",
              color: "black",
              marginLeft: "5%",
            }}
          >
            Total à régler
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "black",
              marginLeft: "30%",
              fontWeight: "bold",
            }}
          >
            13,80€
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
