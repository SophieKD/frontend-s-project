import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Divider, ListItem } from "react-native-elements";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

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
        }
      }
    );
  }, []);

  let test = [
    {
      date_insert: "2022-03-04T23:00:00.000+00:00",
      status_payment: true,
      date_payment: "2022-03-04T23:00:00.000+00:00",
      status_delivery: false,
      product: [
        { title: "title test", price: 10 },
        { title: "title test2", price: 11 },
        { title: "title test11", price: 16 },
        { title: "title test23", price: 19.9 },
      ],
    },
    {
      date_insert: "2022-03-04T23:00:00.000+00:00",
      status_payment: false,
      date_payment: "2022-03-04T23:00:00.000+00:00",
      status_delivery: true,
      product: [
        { title: "title test3", price: 13 },
        { title: "title test4", price: 14 },
      ],
    },
  ];

  return (
    <View>
      <View style={styles.container}>
        <Image
          source={require("../../assets/spaceMonkey.png")}
          style={{
            height: 160,
            width: 160,
            margin: 15,
          }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 25, marginBottom: 10 }}>
          {pseudo}
        </Text>
      </View>
      <Collapse style={{ marginTop: 15 }}>
        <CollapseHeader>
          <Text
            style={{
              marginLeft: 20,
              marginBottom: 5,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Mon profil
          </Text>
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
      <Divider />
      <Collapse style={{ marginTop: 15 }}>
        <CollapseHeader>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 5,
            }}
          >
            Mes commandes
          </Text>
        </CollapseHeader>
        <CollapseBody>
          {test.map((order, i) => {
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

            let totalOrder = 0;
            for (let k = 0; k < order.product.length; k++) {
              totalOrder = order.product[k].price + totalOrder;
            }

            return (
              <>
                <ListItem key={i}>
                  <ListItem.Content>
                    <ListItem.Title
                      style={{ marginLeft: 15, fontSize: 15, marginBottom: 3 }}
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
                      Commande récupérée: {statusDelivery}
                    </ListItem.Title>

                    <DataTable>
                      <DataTable.Header>
                        <DataTable.Title>Produit(s)</DataTable.Title>

                        <DataTable.Title numeric>Prix</DataTable.Title>
                      </DataTable.Header>

                      {order.product.map((product, j) => {
                        return (
                          <>
                            <DataTable.Row key={j}>
                              <DataTable.Cell>{product.title}</DataTable.Cell>

                              <DataTable.Cell numeric>
                                {product.price}€
                              </DataTable.Cell>
                            </DataTable.Row>
                          </>
                        );
                      })}
                      <DataTable.Row>
                        <DataTable.Cell>Total:</DataTable.Cell>

                        <DataTable.Cell numeric>{totalOrder}€</DataTable.Cell>
                      </DataTable.Row>
                    </DataTable>
                  </ListItem.Content>
                </ListItem>
              </>
            );
          })}
        </CollapseBody>
      </Collapse>
      <Divider />
      <Collapse style={{ marginTop: 15, marginBottom: 5 }}>
        <CollapseHeader>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 5,
            }}
          >
            Ma cagnotte
          </Text>
        </CollapseHeader>
        <CollapseBody>
          <Text style={{ marginLeft: 30, marginTop: 5 }}>Ta daa!</Text>
        </CollapseBody>
      </Collapse>
      <Divider />
      <Collapse style={{ marginTop: 15, marginBottom: 5 }}>
        <CollapseHeader>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 5,
            }}
          >
            Mes S
          </Text>
        </CollapseHeader>
        <CollapseBody>
          <Text style={{ marginLeft: 30, marginTop: 5 }}>Ta daa!</Text>
        </CollapseBody>
      </Collapse>
      <Divider />
      <Collapse style={{ marginTop: 15, marginBottom: 5 }}>
        <CollapseHeader>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 5,
            }}
          >
            Mes notifications
          </Text>
        </CollapseHeader>
        <CollapseBody>
          <Text style={{ marginLeft: 30, marginTop: 5 }}>Ta daa!</Text>
        </CollapseBody>
      </Collapse>
      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 25,
  },
});

export default AccountScreen;
