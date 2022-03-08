import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { Divider, ListItem, Button, Overlay } from "react-native-elements";
import CameraScreen from "./CameraScreen";

import {
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";

import { DataTable } from "react-native-paper";

import AsyncStorage from "@react-native-async-storage/async-storage";

function AccountScreen(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [uri, setUri] = useState(
    "https://res.cloudinary.com/ds8shlqh0/image/upload/v1646644747/blankpp_vaslek.jpg"
  );
  const [orders, setOrders] = useState([]);
  console.log("---orders =>", orders);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log("---useEffect AccountScreen");
    AsyncStorage.getItem(
      "userLocalStorage",
      function (error, userInLocalStorage) {
        if (userInLocalStorage) {
          let user = JSON.parse(userInLocalStorage);
          console.log("---userParsed =>", user);
          setFirstname(user.firstname);
          setLastname(user.lastname);
          setPseudo(user.pseudo);
          setMobile(user.mobile);
          setEmail(user.email);
          setToken(user.token);
          setUri(user.uri);
          getOrders(user.token);
        }
      }
    );

    const getOrders = async (token) => {
      const url = `https://ls-project-capsule.herokuapp.com/orders/user/${token}`;
      let rawOrders = await fetch(url);
      console.log("---rawOrders", rawOrders);
      let ordersResponse = await rawOrders.json();
      console.log("---ordersResponse =>", ordersResponse);
      if (ordersResponse.orders.length > 0) {
        setOrders(ordersResponse.orders);
      }
    };
  }, []);

  const onPressSnap = () => {
    setVisible(!visible);
  };

  const disableOverlay = () => {
    setVisible(false);
  };

  const goToSignIn = () => {
    props.goToSignInParent();
  };

  const setUriFunction = (newUri) => {
    setUri(newUri);
  };

  let cameraDisplay;
  if (visible) {
    cameraDisplay = (
      <CameraScreen
        disableOverlayParent={disableOverlay}
        setUriParent={setUriFunction}
      />
    );
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#136979", height: 50 }} />
      <View>
        <Overlay isVisible={visible} fullScreen={true}>
          {cameraDisplay}
        </Overlay>
        <View style={styles.container}>
          <Image
            source={{ uri: uri }}
            style={{
              height: 160,
              width: 160,
              margin: 5,
            }}
          />
          <Button
            buttonStyle={{
              marginBottom: 15,
              backgroundColor: "#136979",
              borderRadius: 30,
            }}
            title="Snappe-Toi!"
            type="solid"
            containerStyle={{
              width: "40%",
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{
              color: "white",
              fontSize: 20,
            }}
            onPress={() => onPressSnap()}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              marginBottom: 10,
              color: "#136979",
            }}
          >
            {pseudo}
          </Text>
        </View>
        <Collapse style={{ marginTop: 15 }}>
          <CollapseHeader>
            <View style={styles.view}>
              <MaterialCommunityIcons
                name="account"
                size={27}
                color="#136979"
                style={{
                  width: "11%",
                  margin: "3%",
                }}
              />
              <Text
                style={{
                  marginLeft: 0,
                  marginBottom: 5,
                  fontSize: 18,
                }}
              >
                Mon profil
              </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <ListItem>
              <ListItem.Content>
                <ListItem.Title
                  style={{ marginLeft: 15, fontSize: 15, marginBottom: 3 }}
                >
                  Prénom: {firstname}
                </ListItem.Title>
                <ListItem.Title
                  style={{ marginLeft: 15, fontSize: 15, marginBottom: 3 }}
                >
                  Nom: {lastname}
                </ListItem.Title>
                <ListItem.Title
                  style={{ marginLeft: 15, fontSize: 15, marginBottom: 3 }}
                >
                  Mobile: {mobile}
                </ListItem.Title>
                <ListItem.Title
                  style={{ marginLeft: 15, fontSize: 15, marginBottom: 3 }}
                >
                  Email: {email}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </CollapseBody>
        </Collapse>

        <Collapse style={{ marginTop: 15 }}>
          <CollapseHeader>
            <View style={styles.view}>
              <FontAwesome5
                name="list-alt"
                size={27}
                color="#136979"
                style={{
                  width: "11%",
                  margin: "3%",
                }}
              />
              <Text
                style={{
                  marginLeft: 0,
                  fontSize: 18,
                  marginBottom: 5,
                }}
              >
                Mes commandes
              </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            {orders.map((order, i) => {
              let statusPayment = (
                <Ionicons name="checkmark-done-sharp" size={20} color="green" />
              );
              if (order.status_payment === false) {
                statusPayment = (
                  <Entypo name="circle-with-cross" size={20} color="red" />
                );
              }
              let statusDelivery = (
                <Ionicons name="checkmark-done-sharp" size={20} color="green" />
              );
              if (order.status_delivery === false) {
                statusDelivery = (
                  <Entypo name="circle-with-cross" size={20} color="red" />
                );
              }
              let statusPrep = (
                <Ionicons name="checkmark-done-sharp" size={20} color="green" />
              );
              if (order.status_preparation === false) {
                statusPrep = (
                  <Entypo name="circle-with-cross" size={20} color="red" />
                );
              }

              let totalOrder = 0;
              for (let k = 0; k < order.products.length; k++) {
                console.log(
                  "---order.products[k].productID",
                  order.products[k]
                );
                totalOrder =
                  order.products[k].productID.price * order.products[k].qty +
                  totalOrder;
              }

              return (
                <ListItem key={i}>
                  <ListItem.Content>
                    <ListItem.Title
                      style={{
                        marginLeft: 15,
                        fontSize: 15,
                        marginBottom: 3,
                        color: "#136979",
                        fontWeight: "bold",
                      }}
                    >
                      Date de Commande: {order.date_insert}
                    </ListItem.Title>
                    <ListItem.Title
                      style={{ marginLeft: 15, fontSize: 15, marginBottom: 3 }}
                    >
                      Paiement effectué: {statusPayment}
                    </ListItem.Title>
                    <ListItem.Title
                      style={{ marginLeft: 15, fontSize: 15, marginBottom: 3 }}
                    >
                      Commande préparée: {statusPrep}
                    </ListItem.Title>
                    <ListItem.Title
                      style={{ marginLeft: 15, fontSize: 15, marginBottom: 3 }}
                    >
                      Commande récupérée: {statusDelivery}
                    </ListItem.Title>

                    <DataTable>
                      <DataTable.Header>
                        <DataTable.Title>Produit(s)</DataTable.Title>
                        <DataTable.Title numeric>Quantité</DataTable.Title>
                        <DataTable.Title numeric>Prix</DataTable.Title>
                      </DataTable.Header>

                      {order.products.map((product, j) => {
                        // console.log("---product", product);
                        // console.log("---product.productID", product.productID);
                        // console.log(
                        //   "---product.productID.title",
                        //   product.productID.title
                        // );
                        // console.log(
                        //   "---product.productID.price",
                        //   product.productID.price
                        // );
                        // console.log("---product.qty", product.qty);
                        // console.log("---totalOrder", totalOrder);
                        return (
                          <DataTable.Row key={j}>
                            <DataTable.Cell>
                              {product.productID.title}
                            </DataTable.Cell>
                            <DataTable.Cell numeric>
                              {product.qty}
                            </DataTable.Cell>

                            <DataTable.Cell numeric>
                              {product.productID.price}€
                            </DataTable.Cell>
                          </DataTable.Row>
                        );
                      })}
                      <DataTable.Row>
                        <DataTable.Cell>Total:</DataTable.Cell>

                        <DataTable.Cell numeric>{totalOrder}€</DataTable.Cell>
                      </DataTable.Row>
                    </DataTable>
                  </ListItem.Content>
                </ListItem>
              );
            })}
          </CollapseBody>
        </Collapse>

        <Collapse style={{ marginTop: 15, marginBottom: 5 }}>
          <CollapseHeader>
            <View style={styles.view}>
              <FontAwesome5
                name="piggy-bank"
                size={27}
                color="#136979"
                style={{
                  width: "11%",
                  margin: "3%",
                }}
              />
              <Text
                style={{
                  marginLeft: 0,
                  fontSize: 18,
                  marginBottom: 5,
                }}
              >
                Ma cagnotte
              </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={{ marginLeft: 30, marginTop: 5 }}>Ta daa!</Text>
          </CollapseBody>
        </Collapse>

        <Collapse style={{ marginTop: 15, marginBottom: 5 }}>
          <CollapseHeader>
            <View style={styles.view}>
              <FontAwesome
                name="group"
                size={27}
                color="#136979"
                style={{
                  width: "11%",
                  margin: "3%",
                }}
              />
              <Text
                style={{
                  marginLeft: 0,
                  fontSize: 18,
                  marginBottom: 5,
                }}
              >
                Mes S
              </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={{ marginLeft: 30, marginTop: 5 }}>Ta daa!</Text>
          </CollapseBody>
        </Collapse>

        <Collapse style={{ marginTop: 15, marginBottom: 5 }}>
          <CollapseHeader>
            <View style={styles.view}>
              <FontAwesome
                name="bell"
                size={27}
                color="#136979"
                style={{
                  width: "11%",
                  margin: "3%",
                }}
              />
              <Text
                style={{
                  marginLeft: 0,
                  fontSize: 18,
                  marginBottom: 5,
                }}
              >
                Mes notifications
              </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={{ marginLeft: 30, marginTop: 5 }}>Ta daa!</Text>
          </CollapseBody>
        </Collapse>

        <Button
          buttonStyle={{
            marginTop: 30,
            backgroundColor: "#136979",
            borderRadius: 30,
          }}
          title="Déconnexion"
          type="solid"
          containerStyle={{
            width: "60%",
            alignSelf: "center",
          }}
          titleStyle={{
            color: "white",
            fontSize: 20,
          }}
          onPress={() => goToSignIn()}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 25,
  },
  view: {
    flex: 1,
    backgroundColor: "white",
    width: "90%",
    margin: "5%",
    height: 50,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "0%",
    marginBottom: "0%",
  },
});

export default AccountScreen;
