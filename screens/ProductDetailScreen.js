import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Card, Image } from "react-native-elements";
import NavCategories from "../components/Products/NavCategories";
import AddButton from "../components/Products/AddButton";
import { connect } from "react-redux";

function ProductDetailScreen(props) {
  var productDetailsSelected = props.productDetails.map((product, i) => {
    console.log("product productDetailsSelected", product);
    return (
      <View key={i} style={{ flex: 1, backgroundColor: "white" }}>
        <Image source={{ uri: product.img }} containerStyle={styles.item} />

        <View style={styles.container}>
          <Text style={styles.title}>{product.title}</Text>

          <Text style={styles.price}>{product.price}€</Text>

          <Text style={styles.details}>{product.description}</Text>
        </View>
      </View>
    );
  });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ backgroundColor: "#136979", height: 50 }} />

      <NavCategories />

      {productDetailsSelected}

      <AddButton navigation={props.navigation} />
      <View style={{ backgroundColor: "#white", height: 100 }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "80%",
    margin: "10%",
  },
  title: {
    marginBottom: 15,
    fontWeight: "bold",
    fontSize: 20,
    color: "#136979",
  },
  price: {
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 15,
  },
  details: {
    marginBottom: 10,
    fontSize: 14,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  item: {
    aspectRatio: 1,
    width: "100%",
    flex: 1,
  },
});

function mapStateToProps(state) {
  console.log("state ProductDetailScreen", state);
  return { productDetails: state.productDetails };
}

export default connect(mapStateToProps, null)(ProductDetailScreen);
