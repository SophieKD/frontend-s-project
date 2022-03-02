import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Card, Image } from "react-native-elements";

// Sophie à Finaliser:Image 1 size + Card enlever marges et contour
function HomeScreen(props) {
  return (
    <ScrollView style={{ marginTop: 10 }}>
      <Image
        source={require("../assets/Home-bagels.png")}
        containerStyle={styles.item}
        onPress={() => props.navigation.navigate("Menu")}
      />

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
});

export default HomeScreen;
