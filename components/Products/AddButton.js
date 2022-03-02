import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Button, ButtonGroup, withTheme, Text } from "react-native-elements";

// Sophie : optimizer Border radius Button +- / composant global à mettre en fixe en bottom avec scroll du contenu de la page ProductDetailScreen en dessous

function AddButton() {
  const buttons = ["-", "1", "+"];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      {/* Border radius ? et encadrement */}
      <View style={styles.container}>
        <ButtonGroup
          innerBorderStyle={{ color: "#F7F7FB" }}
          buttons={buttons}
          containerStyle={{ height: 40 }}
          buttonContainerStyle={{
            backgroundColor: "#F7F7FB",
            borderColor: "#F7F7FB",
          }}
          textStyle={{ color: "black" }}
        />
      </View>
      {/* TEST1 */}
      {/* <Button
        title="Ajouter"
        buttonStyle={{
          backgroundColor: "#F7F7FB",
          borderRadius: 30,
        }}
        containerStyle={{
          width: "32%",
          margin: "2%",
        }}
        titleStyle={{ fontWeight: "bold", color: "black" }}
      /> */}
      {/*  Button "AJOUTER" */}
      <Button
        title="Ajouter   11,90€"
        buttonStyle={{
          backgroundColor: "#FFFACD",
          borderRadius: 30,
        }}
        containerStyle={{
          width: "60%",
          margin: "2%",
        }}
        titleStyle={{ fontWeight: "bold", color: "black" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    margin: 8,
  },
});

export default AddButton;
