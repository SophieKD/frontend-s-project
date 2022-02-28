import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { Card, Badge } from "react-native-elements";

function Home(props) {
  var images = [
    require("../assets/homescreen1.jpeg"),
    require("../assets/plat-jour.jpeg"),
    require("../assets/desserts.jpeg"),
    require("../assets/boissons.jpeg"),
  ];

  return (
    <ScrollView style={{ marginTop: 25 }}>
      <Card>
        <Card.Image
          style={{ width: "100%", height: 170, marginBottom: 10 }}
          source={images[0]}
          onPress={() =>
            props.navigation.navigate("BottomNavigator", { screen: "Products" })
          }
        />
      </Card>

      <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>
        <Card>
          <Card.Image
            style={{ padding: 0 }}
            source={images[1]}
            onPress={() =>
              props.navigation.navigate("BottomNavigator", {
                screen: "Products",
              })
            }
          />
          <Text style={{ marginBottom: 10, justifyContent: "center" }}>
            Formules du Jour
          </Text>
        </Card>

        <Card>
          <Card.Image
            style={{ padding: 0 }}
            source={images[1]}
            onPress={() =>
              props.navigation.navigate("BottomNavigator", {
                screen: "Products",
              })
            }
          />
          <Text style={{ marginBottom: 10, justifyContent: "center" }}>
            Formules du Jour
          </Text>
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
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f7f7fb",
//   },
//   viewstyle: {
//     backgroundColor: "#FFFFFF",
//     padding: 15,
//   },
//   cardstyle: {
//     alignItems: "center",
//     width: 150,
//     height: 150,
//     marginRight: 10,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//   },
// });

export default Home;
