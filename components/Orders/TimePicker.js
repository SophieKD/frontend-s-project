import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Platform } from "react-native";
import { Button, ButtonGroup, withTheme, Text } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";

// Sophie : à Faire

function TimePicker() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("time");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  //   const showDatepicker = () => {
  //     showMode("date");
  //   };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View>
      {/* <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View> */}
      <View>
        <Button
          buttonStyle={{
            backgroundColor: "white",
            borderRadius: 30,
          }}
          containerStyle={{
            width: "90%",
            marginLeft: "5%",
            marginTop: "3%",
          }}
          titleStyle={{ color: "black" }}
          onPress={showTimepicker}
          title="On vous prépare tout çà pour quelle heure ?"
        />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          display="spinner"
          textColor="#136979"
          locale="fr-FR"
          minuteInterval={15}
        />
      )}
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

export default TimePicker;
