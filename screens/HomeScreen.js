import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Card, Image } from "react-native-elements";

// Sophie à Finaliser:Image 1 size + Card enlever marges et contour
function HomeScreen(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#136979", height: 50 }} />
      <Image
        source={require("../assets/Home-bagels.png")}
        containerStyle={styles.item}
        onPress={() => props.navigation.navigate("Menu")}
      />

      {/* Test image sans Card ===> pas d'affichage */}
      {/* <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      > */}
      {/* <Image
        source={require("../assets/home-platdujour.png")}
        style={{ width: "46%", margin: "2%" }}
        onPress={() => props.navigation.navigate("Menu")}
      />
      <Image
        source={require("../assets/home-platdujour.png")}
        style={{ width: "46%", margin: "2%" }}
        onPress={() => props.navigation.navigate("Menu")}
      /> */}
      {/* </View> */}

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
            source={require("../assets/home-bowls.png")}
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
            source={require("../assets/home-desserts.png")}
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
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  item: {
    aspectRatio: 1,
    width: "100%",
    flex: 1,
  },
  img: {
    width: "46%",
    margin: "2%",
  },
});

export default HomeScreen;
