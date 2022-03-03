import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card, Image, Divider } from "react-native-elements";

// Sophie optimize style : prix à mettre en bas aligné à la photo
function ProductCard(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.menuItemStyle}>
          <View>
            <Image
              source={require("../../assets/cookie.png")}
              style={{
                width: 75,
                height: 75,
                borderRadius: 8,
              }}
            />
          </View>
          <View style={{ width: 240 }}>
            <Text style={styles.titleStyle}>Cookie Noisettes</Text>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  textAlignVertical: "bottom",
                  fontSize: 15,
                  color: "#136979",
                }}
              >
                2,90€
              </Text>

              <TouchableOpacity
                style={{
                  backgroundColor: "#136979",
                  alignItems: "center",
                  padding: 13,
                  borderRadius: 30,
                  marginLeft: 100,
                }}
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
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 15,
  },
});

export default ProductCard;
