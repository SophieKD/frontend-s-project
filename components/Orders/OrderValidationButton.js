import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Button, ButtonGroup, withTheme, Text } from "react-native-elements";
import { connect } from "react-redux";

//SOPHIE: Bouton à faire apparaitre en bas
function OrderValidationButton(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("isLoggedIn OrderValidationButton", isLoggedIn);

  var onValidationPress = () => {
    if (props.userLoggedIn.token !== undefined) {
      setIsLoggedIn(true);
    }
  };

  if (isLoggedIn === true) {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
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
              onPress={() => props.navigation.navigate("Commande Finale")}
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
                Valider ma commande
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  } else {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
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
                props.navigation.navigate("Log");
                onValidationPress();
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
                Valider ma commande
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

function mapStateToProps(state) {
  console.log("state OrderValidationButton", state);
  return {
    userLoggedIn: state.userLoggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onValidationPress: function (orderData) {
      console.log("orderData OrderRecapScreen", orderData);
      dispatch({ type: "confirmOrder", orderData });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderValidationButton);
