import React from "react";
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import LoyaltyButton from "../components/Orders/LoyaltyButton";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Divider } from "react-native-elements";
import LoyaltyWinSButton from "../components/Orders/LoyaltyWinSButton";
import { connect } from "react-redux";
import ConfettiCannon from "react-native-confetti-cannon";

function OrderConfirmationScreen(props) {
  const resetOrder = () => {
    props.onValidationPress();
  };

  var finalConfirmationAmount = 0;

  var finalConfirmation = props.productsAdded.map((product, i) => {
    finalConfirmationAmount += product.price * product.qty;
    return (
      <View
        key={i}
        style={{
          flex: 1,
          width: "90%",
          margin: "5%",
          height: 50,
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "center",
          // justifyContent: "space-between",
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
        <Text
          style={{
            fontSize: 17,
            color: "black",
            flex: 1,
            textAlign: "right",
            // marginLeft: "30%",
          }}
        >
          {product.price}€
        </Text>
      </View>
    );
  });

  var finalConfirmationExtra = props.productsExtraDetails.map((extra, i) => {
    finalConfirmationAmount += extra.price * extra.qty;
    return (
      <View
        key={i}
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
          {extra.qty}
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: "black",
            marginLeft: "5%",
          }}
        >
          {extra.title}
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: "black",
            flex: 1,
            textAlign: "right",
          }}
        >
          {extra.price}€
        </Text>
      </View>
    );
  });

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingBottom: 165 }}>
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
            Vendredi 11 Mars à 12h15
          </Text>
        </View>

        <Divider />

        <Text style={styles.subtitle}>Rappel de votre commande</Text>
        {finalConfirmation}
        {finalConfirmationExtra}

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
              // marginLeft: "12%",
              fontWeight: "bold",
              flex: 1,
              textAlign: "right",
            }}
          >
            {finalConfirmationAmount.toFixed(2)}€
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
            424242XXXXXX4242
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: "#136979",
              marginLeft: "10%",
            }}
          >
            {finalConfirmationAmount.toFixed(2)}€
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
            Vous avez obtenu {Math.round(finalConfirmationAmount)}S
          </Text>
        </View>
        <LoyaltyWinSButton
          navigation={props.navigation}
          resetOrderParent={resetOrder}
        />
      </View>

      <ConfettiCannon
        count={200}
        origin={{ x: -10, y: -100 }}
        // autoStart={false}
        fadeOut={true}
        fallSpeed={5000}
      />
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
  // console.log("state OrderConfirmationScreen", state);
  console.log("------------productsAdded=>", state.productsAdded);
  console.log("------------productsExtraDetails=>", state.productExtraDetails);
  return {
    productsAdded: state.productsAdded,
    productsExtraDetails: state.productExtraDetails,
    userLoggedIn: state.userLoggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onValidationPress: function (orderData) {
      console.log("orderData OrderRecapScreen", orderData);
      dispatch({ type: "confirmOrder", orderData });
      dispatch({ type: "reset" });
      dispatch({ type: "resetExtra" });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderConfirmationScreen);
