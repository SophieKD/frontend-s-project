import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { Button, ButtonGroup, withTheme, Text } from "react-native-elements";

function LeS(props) {
  return (
    <View>
      <Text>LeS</Text>
      <Button
        title="Basic Button"
        buttonStyle={{
          backgroundColor: "rgba(78, 116, 289, 1)",
          borderRadius: 3,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => {
          props.navigation.navigate("BottomNavigator", {
            screen: "ProductsScreen",
          });
        }}
      />
    </View>
  );
}

export default LeS;
