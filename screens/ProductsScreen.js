import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card, Image } from "react-native-elements";
import NavCategories from "../components/Products/NavCategories";
import ViewCartButton from "../components/Products/ViewCartButton";
import { connect } from "react-redux";

function Products(props, navigation) {
  const [productsCategory, setProductsCategory] = useState([]);
  console.log("productsCategory", productsCategory);

  const [products, setProducts] = useState([]);
  console.log("products", products);

  console.log("-props", props);

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

  let marginBottomScrollView = { flex: 1, paddingBottom: "2%" };
  if (props.productsAdded.length > 0) {
    marginBottomScrollView = { flex: 1, paddingBottom: 70 };
    console.log("---marginBottomScrollView", marginBottomScrollView);
  }

  var productsMap = productsCategory.map((product, i) => {
    // console.log("product productsMap", product);
    return (
      <View key={i}>
        <View
          style={{
            backgroundColor: "#136979",
            justifyContent: "center",
            height: 40,
            marginBottom: 5,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              marginLeft: 20,
              fontWeight: "bold",
              color: "white",
              fontSize: 17,
            }}
          >
            {product.category}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexWrap: "wrap",
            flexDirection: "row",
            marginTop: "2%",
            marginBottom: "2%",
            justifyContent: "center",
          }}
        >
          {product.products.map((producto, j) => {
            return (
              <View
                key={j}
                style={{
                  width: "46%",
                  margin: "2%",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Produit");
                    props.onImagePress(producto);
                  }}
                  style={{
                    flex: 1,
                    flexDirection: "row",
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Image
                      style={{ height: 200, width: "100%" }}
                      source={{ uri: producto.img }}
                    />

                    <View
                      style={{
                        padding: 10,
                        backgroundColor: "white",
                        width: "100%",
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "#136979",
                          fontSize: 17,
                        }}
                      >
                        {producto.title}
                      </Text>
                      <Text style={{ paddingTop: 5, fontSize: 15 }}>
                        {producto.description.slice(0, 55) + "..."}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          paddingTop: 10,
                          fontSize: 17,
                          color: "#136979",
                        }}
                      >
                        {producto.price}€
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    );
  });

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#136979", height: 50 }} />

        <NavCategories />

        {productsMap}
        <View style={marginBottomScrollView}></View>
      </ScrollView>
      <ViewCartButton
        navigation={props.navigation}
        productsAdded={props.productsAdded}
      />
    </View>
  );
}
function mapStateToProps(state) {
  console.log("state OrderRecapScreen", state);
  return { productsAdded: state.productsAdded };
}

function mapDispatchToProps(dispatch) {
  return {
    onImagePress: function (productData) {
      console.log("productData Products", productData);
      dispatch({ type: "sendProductDetails", productData });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
