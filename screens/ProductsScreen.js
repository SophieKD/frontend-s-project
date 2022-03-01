import React from "react";
import { View, Text, ScrollView } from "react-native";
import NavCategories from "../components/Products/NavCategories";
import ProductCard from "../components/Products/ProductCard";

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

      <ProductCard />

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

      <ProductCard />
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
