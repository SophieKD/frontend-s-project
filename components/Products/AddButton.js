import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Button } from "react-native";
import { Card } from "react-native-elements";

// en cours ADD BUTTON
function AddButton() {
  return (
    <>
      <ScrollView>
        <View style={styles.contentView}>
          <Text style={styles.subHeader}>Rounded Buttons</Text>
          <View style={styles.buttonsContainer}>
            <Button
              title="HOME"
              icon={{
                name: "home",
                type: "font-awesome",
                size: 15,
                color: "white",
              }}
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                backgroundColor: "rgba(90, 154, 230, 1)",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
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
