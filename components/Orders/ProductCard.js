import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card, Image, Divider } from "react-native-elements";
import { connect } from "react-redux";

// Sophie optimize style : prix à mettre en bas aligné à la photo
function ProductCard(props) {
  const [productsCategory, setProductsCategory] = useState([]);
  console.log("productsCategory ProductCard", productsCategory);

  useEffect(() => {
    async function loadProductsCategory() {
      var rawResponse = await fetch(
        "https://ls-project-capsule.herokuapp.com/products-find-by-category"
      );
      console.log("rawResponse ProductCard", rawResponse);

      var response = await rawResponse.json();
      console.log("response ProductCard", response);

      setProductsCategory(response.data);
    }
    loadProductsCategory();
  }, []);

  var productExtra = productsCategory.map((product, i) => {
    console.log("product productExtra", product);
    return (
      <View key={i} style={styles.container}>
        {product.products.map((producto, j) => {
          if (producto.title === "Cookie") {
            return (
              <View key={j} style={styles.menuItemStyle}>
                {/* <View> */}
                <Image
                  source={require("../../assets/cookie.png")}
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 8,
                  }}
                />
                {/* </View> */}
                <View style={{ width: 240 }}>
                  <Text style={styles.titleStyle}>{producto.title}</Text>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        textAlignVertical: "bottom",
                        fontSize: 15,
                        color: "#136979",
                        padding: 10,
                      }}
                    >
                      {producto.price}€
                    </Text>

                    <TouchableOpacity
                      style={{
                        backgroundColor: "#136979",
                        alignItems: "center",
                        padding: 13,
                        borderRadius: 30,
                        marginLeft: 110,
                      }}
                      onPress={() => props.onAddExtraPress(producto)}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 15,
                          fontWeight: "bold",
                        }}
                      >
                        + Ajouter
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }
        })}
      </View>
    );
  });

  return <ScrollView style={{ flex: 1 }}>{productExtra}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "90%",
    marginLeft: "5%",
    marginBottom: "2%",
    marginTop: "0%",
  },
  menuItemStyle: {
    flexDirection: "row",
    // justifyContent: "space-between",
    padding: 10,
  },
  titleStyle: {
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 15,
    marginLeft: 10,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    onAddExtraPress: function (productExtra) {
      console.log("productExtra ProductCard", productExtra);
      dispatch({ type: "sendProductExtra", productExtra });
    },
  };
}

export default connect(null, mapDispatchToProps)(ProductCard);
