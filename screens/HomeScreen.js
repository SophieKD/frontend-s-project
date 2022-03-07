import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-elements";
import HomeSlider from "../components/Products/HomeSlider";

function HomeScreen(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#136979", height: 50 }} />
      <HomeSlider />

      {/* Sophie à Finaliser:Image : ajouter les OnPress ou Card enlever marges et contour */}
      <View
        style={{
          flex: 1,
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            margin: "3%",
            height: 190,
            width: "44%",
          }}
          source={require("../assets/home-platdujour.png")}
        />

        <Image
          style={{
            margin: "3%",
            width: "44%",
            height: 190,
          }}
          source={require("../assets/home-platdujour.png")}
        />
      </View>

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
});

export default HomeScreen;
