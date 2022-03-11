import React from "react";
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import { Divider } from "react-native-elements";
import PaymentButton from "../components/Orders/PaymentButton";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import PaymentScreen from "./PaymentScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

function OrderFinalScreen(props) {
  var finalTotalOrderAmount = 0;

  var finalOrderRecap = props.productsAdded.map((product, i) => {
    finalTotalOrderAmount += product.price * product.qty;

    return (
      <View key={i} style={styles.view}>
        <Text
          style={{
            fontSize: 17,
            color: "black",
            marginLeft: "5%",
            marginTop: "6%",
          }}
        >
          {product.qty}
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: "black",
            marginLeft: "5%",
          }}
        >
          {product.title}
        </Text>
      </View>
    );
  });

  var finalOrderRecapExtra = props.productExtraDetails.map(
    (productExtra, i) => {
      finalTotalOrderAmount += productExtra.price * productExtra.qty;

      return (
        <View key={i} style={styles.view}>
          <Text
            style={{
              fontSize: 17,
              color: "black",
              marginLeft: "5%",
              marginTop: "6%",
            }}
          >
            {productExtra.qty}
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: "black",
              marginLeft: "5%",
            }}
          >
            {productExtra.title}
          </Text>
        </View>
      );
    }
  );

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
            Vendredi 11 Mars à 18h00
          </Text>
        </View>
        {/* <View style={styles.view}> */}
        {/* <Ionicons
            name="chevron-forward-circle"
            size={27}
            color="#136979"
            style={{
              width: "7%",
              margin: "3%",
            }}
          /> */}

        {/* <Text
            style={{
              fontSize: 17,
              color: "black",
            }}
          >
            Ajouter une carte bancaire
          </Text> */}
        {/* </View> */}
        {/* <View style={styles.view}>
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
        </View> */}
        <Divider />

        <Text style={styles.subtitle}>Détail de la commande</Text>

        {finalOrderRecap}
        {finalOrderRecapExtra}

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
            Vous allez gagner {Math.round(finalTotalOrderAmount)} S
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

        {/* <View
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
            {finalTotalOrderAmount.toFixed(2)}€
          </Text>
        </View> */}
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
            {finalTotalOrderAmount.toFixed(2)}€
          </Text>
        </View>
      </View>
      <Divider />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 17,
          marginLeft: "5%",
          marginTop: "5%",
          // marginBottom: "5%",
        }}
      >
        Payer avec :
      </Text>
      <PaymentScreen navigation={props.navigation} />
      {/* <Button
        title={"clear"}
        onPress={() => {
          AsyncStorage.clear();
        }}
      /> */}
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

function mapStateToProps(state) {
  console.log("state OrderFinalScreen", state);
  return {
    productsAdded: state.productsAdded,
    productExtraDetails: state.productExtraDetails,
    userLoggedIn: state.userLoggedIn,
  };
}

export default connect(mapStateToProps, null)(OrderFinalScreen);
