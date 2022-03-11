import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import ProductsScreen from "./screens/ProductsScreen";
import LoyaltyScreen from "./screens/LoyaltyScreen";
// import AccountScreen from "./screens/AccountScreen";
import LogScreen from "./screens/LogScreen";
import LeS from "./screens/LeS";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import OrderRecapScreen from "./screens/OrderRecapScreen";
import OrderFinalScreen from "./screens/OrderFinalScreen";
import OrderConfirmationScreen from "./screens/OrderConfirmationScreen";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import userLoggedIn from "./reducers/user";
import productDetails from "./reducers/producDetailReduc";
import productsAdded from "./reducers/productAddReducer";
import productExtraDetails from "./reducers/addExtraReduc";

import { StripeProvider } from "@stripe/stripe-react-native";

const store = createStore(
  combineReducers({
    userLoggedIn,
    productDetails,
    productsAdded,
    productExtraDetails,
  })
);

import { Ionicons } from "@expo/vector-icons";
import PaymentScreen from "./screens/PaymentScreen";

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
      <Tab.Screen name="Mon compte" component={LogScreen} />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <StripeProvider
      publishableKey="pk_test_51KHmV0CkoFyczhrXkIlKCGhL5qAKmjuARTwe5ZqoXQfpnLckB5JmBHRIn053KHTQsRsPsH1GGYA0ZMMkr1LRDcrz00DD4OEYrw"
      // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      // merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LeS" component={LeS} />
            <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
            <Stack.Screen name="Produit" component={ProductDetailScreen} />
            <Stack.Screen name="Commande" component={OrderRecapScreen} />
            <Stack.Screen name="Commande Finale" component={OrderFinalScreen} />
            <Stack.Screen
              name="Commande Confirmation"
              component={OrderConfirmationScreen}
            />
            <Stack.Screen name="Log" component={LogScreen} />
            <Stack.Screen name="Stripe" component={PaymentScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </StripeProvider>
  );
}

export default App;
