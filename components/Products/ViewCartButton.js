import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button, ButtonGroup, withTheme, Text } from "react-native-elements";

// Sophie : a afficher uniquement si des produits dans le panier

function ViewCartButton() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        position: "absolute",
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
            marginTop: 20,
            backgroundColor: "#FFFACD",
            alignItems: "center",
            padding: 13,
            borderRadius: 30,
            width: "90%",
            position: "relative",
          }}
          // onPress={() => {
          //   addOrderToMongoDB();
          //   setModalVisible(false);
          // }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "right",
            }}
          >
            Voir la commande: 9,90€
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ViewCartButton;
