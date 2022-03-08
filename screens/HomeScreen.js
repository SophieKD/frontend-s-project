import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  // Image,
  TouchableOpacity,
} from "react-native";
import { Card, Image } from "react-native-elements";
import HomeSlider from "../components/Products/HomeSlider";

function HomeScreen(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#136979", height: 50 }} />
      <HomeSlider />

      <View
        style={{
          flex: 1,
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "5%",
          marginLeft: "5%",
        }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Menu")}
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <Image
            containerStyle={{
              width: "90%",
            }}
            source={require("../assets/home-platdujour.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("Menu")}
          style={{ flex: 1, flexDirection: "row" }}
        >
          <Image
            containerStyle={{
              width: "90%",
              height: 190,
            }}
            source={require("../assets/home-bowls2.png")}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "5%",
          marginLeft: "5%",
        }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Menu")}
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <Image
            containerStyle={{
              width: "90%",
            }}
            source={require("../assets/home-sandwich.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("Menu")}
          style={{ flex: 1, flexDirection: "row" }}
        >
          <Image
            containerStyle={{
              width: "90%",
              height: 190,
            }}
            source={require("../assets/home-desserts.png")}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "5%",
          marginLeft: "5%",
        }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Menu")}
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <Image
            containerStyle={{
              width: "90%",
            }}
            source={require("../assets/home-boissons.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("Menu")}
          style={{ flex: 1, flexDirection: "row" }}
        >
          <Image
            containerStyle={{
              width: "90%",
              height: 190,
            }}
            source={require("../assets/home-ptitdej.png")}
          />
        </TouchableOpacity>
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
