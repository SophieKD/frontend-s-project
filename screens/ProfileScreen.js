import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// EN COURS PROFILE
function ProfileScreen() {
  return (
    <ScrollView style={{ marginTop: 25 }}>
      <View>
        <Text> My profile</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7fb",
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default ProfileScreen;
