import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutPage = ({ cartItems }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      // Process the payment and handle the response
      // ...

      setPaymentSuccess("Payment successful!");
      setPaymentError(null);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-10 px-4">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-lg font-semibold mb-4">Your Cart Items</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="mb-2">
              {item.title} - Price: ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input fields for personal information */}
          {/* CardElement */}
          <CardElement className="border p-2" />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Pay Now
          </button>
        </form>
        {paymentError && (
          <div className="text-red-500 mt-4">{paymentError}</div>
        )}
        {paymentSuccess && (
          <div className="text-green-500 mt-4">{paymentSuccess}</div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
