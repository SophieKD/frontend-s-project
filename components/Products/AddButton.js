import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Button, ButtonGroup, withTheme, Text } from "react-native-elements";
import { connect } from "react-redux";

// Sophie : optimizer Border radius Button +- / composant global à mettre en fixe en bottom avec scroll du contenu de la page ProductDetailScreen en dessous
// Ajouter à la commande avec retour sur page d'accueil

function AddButton(props) {
  const buttons = ["-", "1", "+"];

  var productDetailsSelectedPrice = props.productDetails.map((product, i) => {
    console.log("product productDetailsSelectedPrice", product);
    return (
      <Button
        key={i}
        title={`Ajouter   ${product.price}€`}
        buttonStyle={{
          backgroundColor: "#136979",
          borderRadius: 30,
        }}
        containerStyle={{
          width: "60%",
          marginLeft: "20%",
        }}
        titleStyle={{ fontWeight: "bold", color: "white" }}
        onPress={() => {
          props.navigation.navigate("Menu");
          props.onButtonAddPress(product);
        }}
      />
    );
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      {productDetailsSelectedPrice}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    margin: 8,
  },
});

function mapStateToProps(state) {
  console.log("state AddButton", state);
  return { productDetails: state.productDetails };
}

function mapDispatchToProps(dispatch) {
  return {
    onButtonAddPress: function (productAddData) {
      console.log("productAddData AddButton", productAddData);
      dispatch({ type: "addProductToBasket", productAddData });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);
