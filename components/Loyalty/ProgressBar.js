import React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Button, ButtonGroup, withTheme, Text } from "react-native-elements";

function ProgressBar(props) {
  return (
    <View style={styles.containerStyles}>
      <View style={styles.fillerStyles}>
        <Text style={styles.labelStyles}>60S</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerStyles: {
    height: 30,
    width: "90%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginLeft: "5%",
    marginRight: "5%",
  },
  fillerStyles: {
    flex: 1,
    height: "100%",
    width: "40%",
    // `${completed}%`
    backgroundColor: "#ff4d6d",
    borderRadius: 30,
    textAlign: "center",
    justifyContent: "center",
  },
  labelStyles: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
  },
});

export default ProgressBar;
