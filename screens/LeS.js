import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

function LeS(props) {
  return (
    <ImageBackground
      source={require("../assets/LeS-Screen.png")}
      style={styles.container}
    >
      <Button
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
      />
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
