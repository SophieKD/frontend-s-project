import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import NavCategories from "../components/Products/NavCategories";
import ViewCartButton from "../components/Products/ViewCartButton";

function Products(props, navigation) {
  const [productsCategory, setProductsCategory] = useState([]);
  console.log("productsCategory", productsCategory);

  const [products, setProducts] = useState([]);
  console.log("productsCategory", productsCategory);

  useEffect(() => {
    async function loadProductsCategory() {
      var rawResponse = await fetch(
        "https://ls-project-capsule.herokuapp.com/products-find-by-category"
      );
      console.log("rawResponse", rawResponse);

      var response = await rawResponse.json();
      console.log("response", response);

      setProductsCategory(response.data);
    }
    loadProductsCategory();
  }, []);

  var productsMap = productsCategory.map((product, i) => {
    return (
      <View>
        <View
          key={i}
          style={{
            backgroundColor: "#acdcdc",
            justifyContent: "center",
            height: 30,
          }}
        >
          <Text
            style={{
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            {product.category}
          </Text>
        </View>
        <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>
          {product.products.map((producto, j) => {
            return (
              <Card key={j} containerStyle={{ width: "46%", margin: "2%" }}>
                <Card.Image
                  style={{ padding: 0, height: 100, width: 150 }}
                  source={{ uri: producto.img }}
                  onPress={() => props.navigation.navigate("Produit")}
                />
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      marginBottom: 15,
                      fontWeight: "bold",
                    }}
                  >
                    {producto.title}
                  </Text>
                  <Text>{producto.description.slice(0, 59) + "..."}</Text>
                  <Text
                    style={{
                      fontWeight: "bold",
                      textAlignVertical: "bottom",
                    }}
                  >
                    {producto.price}€
                  </Text>
                </View>
              </Card>
            );
          })}
        </View>
      </View>
    );
  });

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#136979", height: 50 }} />

      <NavCategories />

      {productsMap}

      <ViewCartButton navigation={props.navigation} />
    </ScrollView>
  );
}

export default Products;
