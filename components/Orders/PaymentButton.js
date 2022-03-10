import React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Button, ButtonGroup, withTheme, Text } from "react-native-elements";
import { connect } from "react-redux";

//SOPHIE: Bouton à faire apparaitre en bas
function PaymentButton(props) {
  var onPaymentButtonPress = async () => {
    var token = props.userLoggedIn.token;

    var products = [];

    var finalProductsOrder = props.productsAdded.map((product, i) => {
      products.push({ productID: product._id, qty: product.qty });
    });

    var finalExtraOrder = props.productExtraDetails.map((extra, i) => {
      products.push({ productID: extra._id, qty: extra.qty });
    });

    console.log("----products", products);
    var date_insert = new Date();
    var status_payment = false;
    var date_payment = "";
    var time_picker = "2022-03-04T23:00:00.000+00:00";
    var status_delivery = false;
    var status_preparation = false;

    const dataPayment = await fetch(
      "https://ls-project-capsule.herokuapp.com/orders",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
          products: products,
          date_insert: date_insert,
          status_payment: status_payment,
          date_payment: date_payment,
          time_picker: time_picker,
          status_delivery: status_delivery,
          status_preparation: status_preparation,
        }),
      }
    );
  };

  return (
    // <ScrollView style={{ flex: 1 }}>
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        // position: "center", ne fonctionne pas sur android
        bottom: 10,
        zIndex: 999,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 10,
            backgroundColor: "#136979",
            alignItems: "center",
            padding: 13,
            borderRadius: 30,
            width: "90%",
            position: "relative",
          }}
          onPress={() => {
            onPaymentButtonPress();
            props.navigation.navigate("Commande Confirmation");
          }}
          // onPress={() => {
          //   addOrderToMongoDB();
          //   setModalVisible(false);
          // }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "right",
            }}
          >
            Payer
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

function mapStateToProps(state) {
  console.log("state PaymentButton", state);
  return {
    productsAdded: state.productsAdded,
    productExtraDetails: state.productExtraDetails,
    userLoggedIn: state.userLoggedIn,
  };
}

export default connect(mapStateToProps, null)(PaymentButton);
