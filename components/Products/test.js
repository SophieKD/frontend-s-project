import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";

///
function Test() {
  return (
    <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>
      <Card>
        <Card.Image
          style={{ padding: 0 }}
          source={require("../../assets/plat-jour.jpeg")}
        />
        <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
          Lasagnes Maison
        </Text>
        <Text>
          Les meilleures lasagnes du monde, au bon ragù à la bolognese..
        </Text>
        <Text>9,90€</Text>
      </Card>

      {/* <Card>
        <Card.Image
          style={{ padding: 0 }}
          source={require("../../assets/plat-jour.jpeg")}
          // onPress={() =>
          //   props.navigation.navigate("BottomNavigator", {
          //     screen: "ProductID",
          //   })
          // }
        />
        <Text
          style={{
            marginBottom: 10,
            fontWeight: "bold",
          }}
        >
          Lasagnes Maison
        </Text>

        <Text
          style={{
            marginBottom: 10,
          }}
        >
          9,90€
        </Text>
      </Card> */}
    </View>
  );
}

export default Test;
