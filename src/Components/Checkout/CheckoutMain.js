import React, { useState, useEffect } from "react";
import { Grid } from "react-loader-spinner";
import AddressForm from "./AddressForm"; // Import your AddressForm component
import PaymentMethod from "./PaymentMethod"; // Import your PaymentMethod component
import CartSection from "./CartSection"; // Import your CartSection component
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CheckoutMain() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(true); // Set initial loading state

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setLoading(false); // Set loading to false after some time
    }, 2000); // Simulating a 2-second loading time
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {loading ? (
        // Show loading spinner while loading
        <div className="flex items-center justify-center h-screen">
          <Grid type="Puff" color="#00BFFF" height={100} width={100} />
        </div>
      ) : (
        // Once loading is done, show the actual content
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <AddressForm />
            <PaymentMethod />
          </div>
          <div className="lg:col-span-2">
            <CartSection cartItems={cartItems} />
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutMain;
