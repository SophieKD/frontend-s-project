import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";

// EN COURS A FINIR
function ProductCard(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>
        <Card containerStyle={{ width: "96%", margin: "2%" }}>
          <Card.Image
            style={{ padding: 0 }}
            source={require("../../assets/moelleux.png")}
            // onPress={() =>
            //   ajout au panier
            // }
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                marginBottom: 15,
                fontWeight: "bold",
              }}
            >
              Cookie Noisettes
            </Text>

            <Text
              style={{
                // textAlign: "right",
                fontWeight: "bold",
                textAlignVertical: "bottom",
              }}
            >
              2,90€
            </Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

export default ProductCard;
