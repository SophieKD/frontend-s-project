import React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

function HomeSlider(props) {
  this.state = {
    width: "",
    images: [
      require("../../assets/home-slider0.png"),
      require("../../assets/home-slider1.png"),
      require("../../assets/home-slider3.png"),
    ],
  };
  return (
    <View>
      <SliderBox images={this.state.images} sliderBoxHeight={300} />
    </View>
  );
}

export default HomeSlider;
