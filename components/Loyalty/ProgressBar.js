import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Button, ButtonGroup, withTheme, Text } from "react-native-elements";

function ProgressBar(props) {
  const [spoints, setSpoints] = useState(props.spointsToChild);

  // console.log("---props.spointToChild =>", props.spointsToChild);
  // console.log("---spoints =>", spoints);

  useEffect(() => {
    setSpoints(props.spointsToChild);
  }, [props.spointsToChild]);

  let countToDisplayforTheStatusBar = 50;
  if (spoints >= 50) {
    countToDisplayforTheStatusBar = 250;
  }
  let statusBar = `${(spoints * 100) / countToDisplayforTheStatusBar}%`;
  // console.log("---statusBar =>", statusBar);

  return (
    <View style={styles.containerStyles}>
      <View
        style={{
          flex: 1,
          height: "100%",
          width: statusBar,
          // `${completed}%`
          backgroundColor: "#ff4d6d",
          borderRadius: 30,
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.labelStyles}>{spoints} S</Text>
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
  labelStyles: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
  },
});

export default ProgressBar;
