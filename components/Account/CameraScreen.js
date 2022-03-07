import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button, Overlay } from "react-native-elements";
import { Camera } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconIonic from "react-native-vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

function CameraScreen(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [visible, setVisible] = useState(false);
  const [token, setToken] = useState("");

  var camera = useRef(null);

  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    AsyncStorage.getItem(
      "userLocalStorage",
      function (error, userInLocalStorage) {
        if (userInLocalStorage) {
          console.log("---useEffect", userInLocalStorage);
          let userInLocalStorageParsed = JSON.parse(userInLocalStorage);
          let tokenOfUserInLocalStorage = userInLocalStorageParsed.token;
          setToken(tokenOfUserInLocalStorage);
        }
      }
    );
  }, []);

  const disableOverlay = () => {
    props.disableOverlayParent();
  };

  const setUriFunction = (newUri) => {
    props.setUriParent(newUri);
  };

  let cameraDisplay;
  if (hasPermission && isFocused) {
    cameraDisplay = (
      <Camera
        style={{ flex: 1 }}
        type={type}
        flashMode={flash}
        ref={(ref) => (camera = ref)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.front
                  ? Camera.Constants.Type.back
                  : Camera.Constants.Type.front
              );
            }}
          >
            <IconIonic name="camera-reverse" size={20} color="#ffffff" />
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={() => {
              setFlash(
                flash === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.torch
                  : Camera.Constants.FlashMode.off
              );
            }}
          >
            <IconFontAwesome name="flash" size={20} color="#ffffff" />
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flash{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Overlay isVisible={visible} width="auto" height="auto">
        <Text>Your PP is loading ;)</Text>
      </Overlay>

      {cameraDisplay}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#009788",
        }}
      >
        <Button
          onPress={async () => {
            setVisible(true);
            if (camera) {
              let photo = await camera.takePictureAsync({
                quality: 0.3,
                pictureSize: "160x160",
              });
              var data = new FormData();
              data.append("avatar", {
                uri: photo.uri,
                type: "image/jpeg",
                name: "avatar.jpg",
              });
              data.append("token", token);

              var rawResponse = await fetch(
                "https://ls-project-capsule.herokuapp.com/users/uploadpp",
                {
                  method: "POST",
                  body: data,
                }
              );
              var response = await rawResponse.json();
              console.log("---response", response);

              if (response.result === true) {
                AsyncStorage.setItem(
                  "userLocalStorage",
                  JSON.stringify(response.userUpdated)
                );
              }

              setUriFunction(response.userUpdated.uri);
              setVisible(false);
            }
            disableOverlay();
          }}
          icon={<IconFontAwesome name="save" size={20} color="#ffffff" />}
          title="Snap"
          buttonStyle={{ backgroundColor: "#009788" }}
          type="solid"
          // style={{ }}
        />
        <Button
          icon={<AntDesign name="back" size={24} color="white" />}
          buttonStyle={{ backgroundColor: "#009788" }}
          onPress={() => {
            disableOverlay();
          }}
        />
      </View>
    </View>
  );
}

export default CameraScreen;
