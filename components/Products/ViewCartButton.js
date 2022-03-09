import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Button, ButtonGroup, withTheme } from "react-native-elements";
import { connect } from "react-redux";

// Sophie : a afficher uniquement si des produits dans le panier

function ViewCartButton(props) {
  var orderAmount = 0;
  var orderCheckButton = props.productsAdded.map((order, i) => {
    // console.log("order orderCheckButton", order);

    orderAmount += order.price;
  });
  // console.log("orderCheckButton", orderCheckButton);
  // console.log("---orderAmount =>", orderAmount);

  let displayButton;
  if (orderAmount > 0) {
    displayButton = (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "transparent",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 10,
            marginBottom: 10,
            backgroundColor: "#136979",
            alignItems: "center",
            padding: 13,
            borderRadius: 30,
            width: "90%",
            position: "relative",
          }}
          onPress={() => props.navigation.navigate("Commande")}
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
            Voir la commande: {orderAmount.toFixed(2)}€
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        // zIndex: 999,
      }}
    >
      {displayButton}
    </View>
  );
}

export default ViewCartButton;
