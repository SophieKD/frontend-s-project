import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
} from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

// Sophie à finaliser : Position button en bas ou écran switch Accueil au bout de 3s
function LeS(props) {
  return (
    <ImageBackground
      source={require("../assets/LeS-Screen.png")}
      style={styles.container}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          position: "absolute",
          bottom: 80,
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
              marginTop: 80,
              backgroundColor: "white",
              alignItems: "center",
              padding: 13,
              borderRadius: 30,
              // width: "30%",
              position: "relative",
            }}
            onPress={() => {
              props.navigation.navigate("BottomNavigator", {
                screen: "ProductsScreen",
              });
            }}
          >
            <Text
              style={{
                color: "#136979",
                fontSize: 20,
                // fontWeight: "bold",
              }}
            >
              Click et Chill
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Button
        buttonStyle={{
          backgroundColor: "white",
          borderRadius: 30,
          marginRight: 5,
          marginLeft: 10,
          marginVertical: 5,
        }}
        titleStyle={{ color: "#136979", marginHorizontal: 20 }}
        icon={<Icon name="arrow-right" size={20} color="#136979" />}
        title="Go to S"
        type="solid"
        onPress={() => {
          props.navigation.navigate("BottomNavigator", {
            screen: "ProductsScreen",
          });
        }}
      /> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

export default LeS;
