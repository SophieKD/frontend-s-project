import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Account() {
  return (
    <View style={styles.container}>
      <Text>Mon Compte screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Account;
