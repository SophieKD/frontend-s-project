import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import NavCategories from "../components/Products/NavCategories";

// import ProductCard from "../components/Products/ProductCard";

function Products(props) {
  const [productsCategory, setProductsCategory] = useState([]);
  console.log("productsCategory", productsCategory);

  useEffect(() => {
    async function loadProductsCategory() {
      var rawResponse = await fetch(
        "https://ls-project-capsule.herokuapp.com/products-find-by-category"
      );
      console.log("rawResponse", rawResponse);

      var response = await rawResponse.json();
      console.log("response", response);

      setProductsCategory(response.productFind);
    }
    loadProductsCategory();
  }, []);

  var platEtDessertDuJour;
  var sandwichs;

  var productsCategoryMap = productsCategory.map((product, i) => {
    for (let j = 0; j < productsCategory.length; j++) {
      if (product.category[j].name === "PLAT ET DESSERT DU JOUR") {
        return (platEtDessertDuJour = (
          <Card key={i} containerStyle={{ width: "46%", margin: "2%" }}>
            <Card.Image
              style={{ padding: 0, height: 100, width: 150 }}
              source={{ uri: product.img }}
              onPress={() => props.navigation.navigate("Produit")}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  marginBottom: 15,
                  fontWeight: "bold",
                }}
              >
                {product.title}
              </Text>
              <Text>{product.description}</Text>
              <Text
                style={{
                  fontWeight: "bold",
                  textAlignVertical: "bottom",
                }}
              >
                {product.price}€
              </Text>
            </View>
          </Card>
        ));
      } else if (product.category[j].name === "SANDWICHS") {
        return (sandwichs = (
          <Card key={i} containerStyle={{ width: "46%", margin: "2%" }}>
            <Card.Image
              style={{ padding: 0, height: 100, width: 150 }}
              source={{ uri: product.img }}
              onPress={() => props.navigation.navigate("Produit")}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  marginBottom: 15,
                  fontWeight: "bold",
                }}
              >
                {product.title}
              </Text>
              <Text>{product.description}</Text>
              <Text
                style={{
                  fontWeight: "bold",
                  textAlignVertical: "bottom",
                }}
              >
                {product.price}€
              </Text>
            </View>
          </Card>
        ));
      }
    }
  });

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
        {platEtDessertDuJour}
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
        {sandwichs}
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
