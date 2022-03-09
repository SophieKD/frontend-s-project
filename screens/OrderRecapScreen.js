import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import OrderValidationButton from "../components/Orders/OrderValidationButton";
import ProductCard from "../components/Orders/ProductCard";
import TimePicker from "../components/Orders/TimePicker";
import { connect } from "react-redux";

// Reste à faire: Bouton en bas

function OrderRecapScreen(props) {
  console.log("props.productExtraDetails", props.productExtraDetails);
  // var countProducts = 0;
  var totalOrderAmount = 0;

  var productOrderRecap = props.productsAdded.map((product, i) => {
    console.log("product productOrderRecap", product);

    totalOrderAmount += product.price;

    return (
      <View>
        <View
          key={i}
          style={{
            flex: 1,
            backgroundColor: "white",
            flexDirection: "row",
            width: "90%",
            margin: "5%",
            flexWrap: "wrap",
            marginBottom: "0%",
            marginTop: "0%",
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
            {/* {(countProducts += 1)} */}1
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
      </View>
    );
  });

  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <View style={{ backgroundColor: "#136979", height: 50 }} />
        <Text style={styles.title}>Ma commande</Text>

        {productOrderRecap}

        {props.productExtraDetails.map((extra, j) => {
          totalOrderAmount += extra.price;
          return (
            <View
              key={j}
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
                {/* {(countProducts += 1)} */}1
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
                {extra.title}
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
                {extra.price}€
              </Text>
            </View>
          );
        })}

        <Divider style={{ marginTop: "5%" }} />

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: "#136979",
            margin: "5%",
            marginBottom: "0%",
          }}
        >
          Un petit extra ?
        </Text>

        <ProductCard />

        <Divider />

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: "#136979",
            margin: "5%",
            marginBottom: "0%",
          }}
        >
          Heure de retrait
        </Text>

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
            {totalOrderAmount.toFixed(2)}€
          </Text>
        </View>
      </View>

      {/* BOUTON validation commande */}
      <View
        style={{
          flex: 1,
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
  },
});

function mapStateToProps(state) {
  console.log("state OrderRecapScreen", state);
  return {
    productsAdded: state.productsAdded,
    productExtraDetails: state.productExtraDetails,
  };
}

export default connect(mapStateToProps, null)(OrderRecapScreen);
