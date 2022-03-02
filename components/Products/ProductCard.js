import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";

function ProductCard(props) {
  return (
    <ScrollView style={{ marginTop: 10 }}>
      <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>
        <Card containerStyle={{ width: "46%", margin: "2%" }}>
          <Card.Image
            style={{ padding: 0 }}
            source={require("../../assets/lasagnes-jour.png")}
            // Navigation cassee
            // onPress={() =>
            //   props.navigation.navigate("Produit2", { screen: "Produit" })
            // }
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                marginBottom: 15,
                fontWeight: "bold",
              }}
            >
              Lasagnes Maison
            </Text>
            <Text>
              Les meilleures lasagnes du monde, au bron ragù à la bolognese...
            </Text>
            <Text
              style={{
                textAlign: "right",
                fontWeight: "bold",
                textAlignVertical: "bottom",
              }}
            >
              9,90€
            </Text>
          </View>
        </Card>

        <Card containerStyle={{ width: "46%", margin: "2%" }}>
          <Card.Image
            style={{ padding: 0 }}
            source={require("../../assets/moelleux.png")}
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                marginBottom: 15,
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              Fondant au chocolat
            </Text>
            <Text>Au bon chocolat coulant à l'intérieur...</Text>
            <Text
              style={{
                textAlign: "right",
                fontWeight: "bold",
                textAlignVertical: "bottom",
              }}
            >
              3,90€
            </Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

export default ProductCard;
