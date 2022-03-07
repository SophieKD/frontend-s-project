import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button, ButtonGroup, withTheme, Text } from "react-native-elements";
import { connect } from "react-redux";

// Sophie : a afficher uniquement si des produits dans le panier

var orderAmount = 0;

function ViewCartButton(props) {
  var orderCheckButton = props.productsAdded.map((order, i) => {
    {
      orderAmount += order.price;
    }
  });
  console.log("orderCheckButton", orderCheckButton);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        flexDirection: "row",
        position: "absolute",
        bottom: 5,
        // zIndex: 999,
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
            Voir la commande: {orderAmount}€
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function mapStateToProps(state) {
  console.log("state OrderRecapScreen", state);
  return { productsAdded: state.productsAdded };
}

export default connect(mapStateToProps, null)(ViewCartButton);
