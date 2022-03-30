import React, { useEffect, useState } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51KLetLBwJ7NBRGvOfsnn09xZuWZhBr6G8owTnNBd2KQmrdwncyE8abW3a3z2Lv87B8jOyStQrVfXXGLTLvxLbc9H00ce6AJG2e";

export const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:4000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="Ham Shop"
        image="data:image/png;base64,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"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            background: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};
