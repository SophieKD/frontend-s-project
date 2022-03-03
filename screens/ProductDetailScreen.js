import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Card, Image } from "react-native-elements";
import NavCategories from "../components/Products/NavCategories";
import AddButton from "../components/Products/AddButton";
import ViewCartButton from "../components/Products/ViewCartButton";

function ProductDetailScreen(props) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ backgroundColor: "#136979", height: 50 }} />

      <NavCategories />

      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Image
          source={require("../assets/lasagnes-jour.png")}
          containerStyle={styles.item}
        />

        <View style={styles.container}>
          <Text style={styles.title}>Lasagnes Maison</Text>

          <Text style={styles.price}>9,90€</Text>

          <Text style={styles.details}>
            Les meilleures lasagnes du monde! A base du fameux ragù à la
            bolognese, d'un mélange de viandes sélectionnées avec amour, d'une
            béchamel qui apporte douceur et crémeux, et de parmesan, nos
            lasagnes cuisent doucement pour en dégager toute la saveur.
          </Text>
        </View>
      </View>
      <AddButton />
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
    fontSize: 17,
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

export default ProductDetailScreen;
