import React from "react";
import { View, Text, ScrollView } from "react-native";

// Sophie: souligner le lien en navigation active

const items = [
  {
    text: "Formules",
  },
  {
    text: "Sandwichs",
  },
  {
    text: "Paninis",
  },
  {
    text: "Desserts",
  },
  {
    text: "Boissons",
  },
  {
    text: "Petits-déjeuners",
  },
];

function NavCategories(props) {
  return (
    <View
      style={{
        marginTop: 5,
        paddingVertical: 15,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Text style={{ fontSize: 14, fontWeight: "normal" }}>
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default NavCategories;
