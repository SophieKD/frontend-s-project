import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Card, Image } from "react-native-elements";
import HomeSlider from "../components/Products/HomeSlider";

// Sophie à Finaliser:Card enlever marges et contour
function HomeScreen(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#136979", height: 50 }} />
      <HomeSlider />
      {/* TEST sans Card : mais ne s'affiche pas */}
      {/* <View
        style={{
          flex: 1,
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center",
            alignContent: "space-between",
            marginLeft: "2%",
            marginRight: "1%",
            width: "46%",
          }}
        >
          <Image source={require("../assets/home-platdujour.png")} />
        </View>
        <View
          style={{
            flex: 1,
            alignContent: "space-around",
            alignItems: "center",
            alignSelf: "flex-start",
            marginLeft: "1%",
            marginRight: "2%",
            width: "46%",
          }}
        >
          <Image source={require("../assets/home-platdujour.png")} />
        </View>
      </View> */}
      <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>
        <Card containerStyle={{ width: "46%", margin: "2%" }}>
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/home-platdujour.png")}
            onPress={() => props.navigation.navigate("Menu")}
          />
        </Card>
        <Card containerStyle={{ width: "46%", margin: "2%" }}>
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/home-bowls2.png")}
            onPress={() => props.navigation.navigate("Menu")}
          />
        </Card>
        <Card containerStyle={{ width: "46%", margin: "2%" }}>
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/home-sandwich.png")}
            onPress={() => props.navigation.navigate("Menu")}
          />
        </Card>
        <Card containerStyle={{ width: "46%", margin: "2%" }}>
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/home-desserts.png")}
            onPress={() => props.navigation.navigate("Menu")}
          />
        </Card>
        <Card containerStyle={{ width: "46%", margin: "2%" }}>
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/home-boissons.png")}
            onPress={() => props.navigation.navigate("Menu")}
          />
        </Card>
        <Card containerStyle={{ width: "46%", margin: "2%" }}>
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/home-ptitdej.png")}
            onPress={() => props.navigation.navigate("Menu")}
          />
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7fb",
  },
  item: {
    aspectRatio: 1,
    width: "100%",
    flex: 1,
  },
});

export default HomeScreen;
