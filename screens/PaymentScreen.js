import React from "react";
import { View, Button } from "react-native";
import {
  CardField,
  useConfirmPayment,
  useStripe,
} from "@stripe/stripe-react-native";
import PaymentButton from "../components/Orders/PaymentButton";

function PaymentScreen(props) {
  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(
      `http://localhost:3000/create-payment-intent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currency: "usd",
        }),
      }
    );
    const { clientSecret } = await response.json();

    return clientSecret;
  };
  const { confirmPayment, loading } = useConfirmPayment();

  const handlePayPress = async () => {
    // Gather the customer's billing information (for example, email)
    const billingDetails: BillingDetails = {
      email: "jenny.rosen@example.com",
    };

    // Fetch the intent client secret from the backend
    const clientSecret = await fetchPaymentIntentClientSecret();

    // Confirm the payment with the card details
    const { paymentIntent, error } = await confirmPayment(clientSecret, {
      type: "Card",
      billingDetails,
    });

    if (error) {
      console.log("Payment confirmation error", error);
    } else if (paymentIntent) {
      console.log("Success from promise", paymentIntent);
      props.navigation.navigate("Commande Confirmation");
    }
  };
  return (
    <View style={{ marginTop: 0 }}>
      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={{
          backgroundColor: "#FFFFFF",
          textColor: "#000000",
        }}
        style={{
          width: "100%",
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={(cardDetails) => {
          console.log("cardDetails", cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log("focusField", focusedField);
        }}
      />
      <PaymentButton
        handlePayPressParent={handlePayPress}
        title="Pay"
        disabled={loading}
      />
    </View>
  );
}

export default PaymentScreen;
