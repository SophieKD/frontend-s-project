import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";

function ProductCard(props) {
  //   const [isSelected, setSelection] = useState(false);

  return (
    <ScrollView style={{ marginTop: 10 }}>
      <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>
        <Card containerStyle={{ width: "46%", margin: "2%" }}>
          <Card.Image
            style={{ padding: 0 }}
            source={require("../../assets/plat-jour.jpeg")}
            // liens à vérifier
            // onPress={() =>
            //   props.navigation.navigate("BottomNavigator", {
            //     screen: "ProductDetailScreen",
            //   })
            // }
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                marginBottom: 15,
                justifyContent: "center",
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
            <BouncyCheckbox
              size={25}
              iconStyle={{ borderColor: "#acdcdc" }}
              fillColor="#acdcdc"
              text="Ajouter"
              style={{ alignSelf: "center" }}
              // onPress={(isSelected: boolean) => {}}
            />
          </View>
        </Card>

        <Card containerStyle={{ width: "46%", margin: "2%" }}>
          <Card.Image
            style={{ padding: 0 }}
            source={require("../../assets/desserts.jpeg")}
            // lien à vérifier
            // onPress={() =>
            //   props.navigation.navigate("BottomNavigator", {
            //     screen: "ProductDetailScreen",
            //   })
            // }
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
            <BouncyCheckbox
              size={25}
              iconStyle={{ borderColor: "#acdcdc" }}
              fillColor="#acdcdc"
              text="Ajouter"
              style={{ alignSelf: "center" }}
              // onPress={(isSelected) => {}}
            />
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default ProductCard;
