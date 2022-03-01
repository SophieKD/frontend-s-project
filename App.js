import React from "react";
import { View, Button, Text, SafeAreaView, ScrollView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import ProductsScreen from "./screens/ProductsScreen";
import LoyaltyScreen from "./screens/LoyaltyScreen";
import AccountScreen from "./screens/AccountScreen";
import SignUpScreen from "./screens/SignUpScreen";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import userLoggedIn from "./reducers/user";
const store = createStore(combineReducers({ userLoggedIn }));

import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name == "Accueil") {
            iconName = "home";
          } else if (route.name == "Menu") {
            iconName = "restaurant";
          } else if (route.name == "Fidélité") {
            iconName = "heart";
          } else if (route.name == "Mon compte") {
            iconName = "person-circle";
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#136979",
        inactiveTintColor: "#DFE2E5",
        style: {
          backgroundColor: "#FFFFFF",
        },
      }}
    >
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Menu" component={ProductsScreen} />
      <Tab.Screen name="Fidélité" component={LoyaltyScreen} />
      <Tab.Screen name="Mon compte" component={SignUpScreen} />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Accueil" component={HomeScreen} />
          <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
