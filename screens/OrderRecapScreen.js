import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import OrderValidationButton from "../components/Orders/OrderValidationButton";
import ProductCard from "../components/Orders/ProductCard";
import TimePicker from "../components/Orders/TimePicker";
import { connect } from "react-redux";

// Reste à faire: Bouton en bas

function OrderRecapScreen(props) {
  var productOrderRecap = props.productsAdded.map((product, i) => {
    console.log("product productOrderRecap", product);
    return (
      <View
        key={i}
        style={{
          flex: 1,
          backgroundColor: "white",
          flexDirection: "row",
          width: "90%",
          margin: "5%",
          flexWrap: "wrap",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            color: "black",
            width: "10%",
            margin: "5%",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          1
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            color: "black",
            width: "40%",
            margin: "5%",
          }}
        >
          {product.title}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            color: "black",
            width: "20%",
            margin: "5%",
          }}
        >
          {product.price}€
        </Text>
      </View>
    );
  });

  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <View style={{ backgroundColor: "#136979", height: 50 }} />
        <Text style={styles.title}>Ma commande</Text>
        {/* Recap commande */}

        {productOrderRecap}

        {/* Divider */}
        <Divider />

        <Text style={styles.title}>Un petit extra ?</Text>

        <ProductCard />

        {/* Divider */}
        <Divider />

        <Text style={styles.title}>Heure de retrait</Text>

        <TimePicker />

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            width: "90%",
            margin: "5%",
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "black",
              width: "60%",
              margin: "5%",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            Total
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "black",
              width: "20%",
              margin: "5%",
            }}
          >
            9,90€
          </Text>
        </View>
      </View>

      {/* BOUTON validation commande */}
      <View
        style={{
          flex: 1,
          //   backgroundColor: "white",
        }}
      >
        <OrderValidationButton navigation={props.navigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#136979",
    margin: "5%",
    marginBottom: 0,
  },
  //   horizontalText: {
  //     textAlign: "center",
  //     fontSize: 16,
  //     marginVertical: 10,
  //   },
});

function mapStateToProps(state) {
  console.log("state OrderRecapScreen", state);
  return { productsAdded: state.productDetails };
}

export default connect(mapStateToProps, null)(OrderRecapScreen);
