import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Card } from "react-native-elements";
import HomeSlider from "../components/Products/HomeSlider";

function HomeScreen(props) {
  const onPressImg = () => {
    console.log("coucou");
  };

  const onPressImg2 = () => {
    console.log("coucou2");
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#136979", height: 50 }} />
      <HomeSlider />

      {/* Sophie à Finaliser:Image : ajouter les OnPress ou Card enlever marges et contour */}
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => onPressImg()} style={{ width: "48%" }}>
          <Image style={{}} source={require("../assets/home-platdujour.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressImg2()}
          style={{ width: "48%" }}
        >
          <Image style={{}} source={require("../assets/home-platdujour.png")} />
        </TouchableOpacity>
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
