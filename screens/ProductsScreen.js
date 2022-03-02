import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import NavCategories from "../components/Products/NavCategories";

// import ProductCard from "../components/Products/ProductCard";

function Products(props) {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#136979", height: 50 }} />

      <NavCategories />

      <View
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          height: 40,
        }}
      >
        <Text
          style={{
            marginBottom: 20,
            marginLeft: 30,
            fontWeight: "bold",
          }}
        >
          PLAT ET DESSERT DU JOUR
        </Text>
      </View>

      <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>
        <Card containerStyle={{ width: "46%", margin: "2%" }}>
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/lasagnes-jour.png")}
            onPress={() => props.navigation.navigate("Produit")}
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
            source={require("../assets/moelleux.png")}
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
                fontWeight: "bold",
                textAlignVertical: "bottom",
              }}
            >
              3,90€
            </Text>
          </View>
        </Card>
      </View>

      {/* <ProductCard /> */}

      <View style={{ height: 20 }} />

      <View
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          height: 40,
        }}
      >
        <Text
          style={{
            marginBottom: 20,
            marginLeft: 30,
            fontWeight: "bold",
          }}
        >
          SANDWICHS
        </Text>
      </View>

      <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>
        <Card containerStyle={{ width: "46%", margin: "2%" }}>
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/sandwich1.png")}
            onPress={() => props.navigation.navigate("Produit")}
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                marginBottom: 15,
                fontWeight: "bold",
              }}
            >
              Sandwich
            </Text>
            <Text>Le traditionnel club sandwich, revisité à l'avocat...</Text>
            <Text
              style={{
                fontWeight: "bold",
                textAlignVertical: "bottom",
              }}
            >
              5,90€
            </Text>
          </View>
        </Card>

        <Card containerStyle={{ width: "46%", margin: "2%" }}>
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/Sandwich2.png")}
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                marginBottom: 15,
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              Sandwich Poulet
            </Text>
            <Text>Avec un pain maison et au poulet mariné...</Text>
            <Text
              style={{
                fontWeight: "bold",
                textAlignVertical: "bottom",
              }}
            >
              6,90€
            </Text>
          </View>
        </Card>
      </View>

      {/* <ProductCard /> */}
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default Products;
