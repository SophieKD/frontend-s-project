import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Button, ButtonGroup, withTheme, Text } from "react-native-elements";
import { Card } from "react-native-elements";

// en cours ADD BUTTON
function AddButton() {
  return (
    //Ajouter Button
    <View>
      <Button
        title="LOG IN"
        buttonStyle={{
          backgroundColor: "black",
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ fontWeight: "bold" }}
      />
    </View>

    //+ -  BUTTON Ex mymoviz
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default AddButton;
