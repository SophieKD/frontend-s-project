import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import OrderValidationButton from "../components/Orders/OrderValidationButton";

// EN COURS - PAS DE LIEN POUR ACCEDER
function ProductDetailScreen() {
  return (
    <ScrollView>
      <View>
        <View style={{ backgroundColor: "#136979", height: 50 }} />

        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Ma commande</Text>
            <View>
              <View></View>
            </View>
          </View>
        </View>

        <View>
          <Text>un petit extra?</Text>
        </View>

        <View>
          <Text>heure de retrait</Text>
        </View>

        <View>
          <Text>Total</Text>
        </View>

        <OrderValidationButton />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "90%",
    margin: "5%",
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
  productName: {
    marginBottom: 10,
    fontSize: 14,
  },
  item: {
    aspectRatio: 1,
    width: "100%",
    flex: 1,
  },
});

export default ProductDetailScreen;
