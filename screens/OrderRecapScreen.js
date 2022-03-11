import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import OrderValidationButton from "../components/Orders/OrderValidationButton";
import ProductCard from "../components/Orders/ProductCard";
import TimePicker from "../components/Orders/TimePicker";
import { connect } from "react-redux";

function OrderRecapScreen(props) {
  // console.log("props.productExtraDetails", props.productExtraDetails);

  var totalOrderAmount = 0;

  var productOrderRecap = props.productsAdded.map((product, i) => {
    // console.log("product productOrderRecap", product);

    totalOrderAmount += product.price * product.qty;

    return (
      <View key={i}>
        <View
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
              width: "6%",
              margin: "5%",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            {product.qty}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: "black",
              width: "45%",
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
              width: "15%",
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
          totalOrderAmount += extra.price * extra.qty;
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
                {extra.qty}
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
              width: "50%",
              margin: "5%",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            Total
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: "bold",
              fontSize: 20,
              color: "black",
              // width: "25%",
              margin: "5%",
              alignItems: "flex-end",
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
        <View style={{ height: 50 }}></View>
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
  // console.log("state OrderRecapScreen", state);
  return {
    productsAdded: state.productsAdded,
    productExtraDetails: state.productExtraDetails,
  };
}

export default connect(mapStateToProps, null)(OrderRecapScreen);
