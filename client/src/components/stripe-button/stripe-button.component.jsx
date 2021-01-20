import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I18zgIyBjj7YO2BT542Pt5dtQcxFEU8xTLwo2eNjf6hlYBDnTHTTwkKdQCPbJbNPpCY1yfk84W9ZGdFGW54ZRTz00Jl0c92Xx";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        // console.log("Payment error: ", JSON.parse(error));
        console.log("Payment error: ", error);
        alert(
          // "There was an issue with your payment. Please make sure that you use the provided credit card."
          "There is a server issue with stipe payment in India, please try again."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-Hopcoms"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
