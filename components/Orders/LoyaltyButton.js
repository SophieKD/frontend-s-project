import React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Button, ButtonGroup, withTheme, Text } from "react-native-elements";

//SOPHIE: Bouton à faire apparaitre en bas
function LoyaltyButton(props) {
  return (
    // <ScrollView style={{ flex: 1 }}>
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        position: "center",
        bottom: 10,
        zIndex: 999,
        backgroundColor: "white",
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
            backgroundColor: "#ffb3c1",
            alignItems: "center",
            padding: 13,
            borderRadius: 30,
            width: "60%",
            position: "relative",
          }}
          onPress={() => props.navigation.navigate("Fidélité")}
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
            30 S cumulés
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

export default LoyaltyButton;
