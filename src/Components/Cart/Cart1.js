import "./cart.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EmptyCart from "./EmptyCart";
import PriceSidebar from "../Cart/TotalPriceSidebar";

import { Grid } from "react-loader-spinner";
import Footer from "../Footer";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem
} from "../../Redux/cartSlicer";
import Navbar1 from "../Navbar/Navbar1";

function ShoppingCart1() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityDecrease = (itemId) => {
    console.log("Decrease quantity for item:", itemId);
    dispatch(decreaseQuantity(itemId));
  };

  const handleQuantityIncrease = (itemId) => {
    console.log("Increase quantity for item:", itemId);
    dispatch(increaseQuantity(itemId));
  };
  const removeFromCArt = (itemid) => {
    dispatch(removeItem(itemid));
  };

  //Spinner func starts here
  const [loading, setLoading] = useState(true); // Set initial loading state
  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setLoading(false); // Set loading to false after some time
    }, 2000); // Simulating a 2-second loading time
  }, []);
  //Spinner func ends here

  const isCartEmpty = cartItems.length === 0;
  return (
    <>
      <div className="mx-auto max-w-7xl ">
        {loading ? (
          // Show loading spinner while loading
          <div className="flex items-center justify-center h-screen">
            <Grid type="Puff" color="#00BFFF" height={100} width={100} />
          </div>
        ) : (
          <>
            <Navbar1 />
            <div>
              <span className="text-4xl my-5 font-bold tracking-tight text-gray-900">
                {cartItems.length === 0 ? null : <h1>Shopping Cart</h1>}
              </span>
              <div className="flex flex-col md:flex-row">
                <div className="flex-grow">
                  {cartItems.length === 0 ? (
                    <EmptyCart />
                  ) : (
                    cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center mb-6 md:mb-0"
                      >
                        <div className="flex ">
                          <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-md border md:w-48 md:h-48 mr-4 md:mr-0">
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>

                          <div className="flex flex-col">
                            <h1 className="px-4 py-2">₹{item.title}</h1>
                            <p className="flex py-2">
                              <span className="px-4 text-xl font-medium">
                                ₹{item.price}
                              </span>
                              {/* <span className='px-4 text-xl font-medium'>₹{finalPrice}</span>
                        <span className='px-4 text-green-500'>{item.discountPercentage}% offers</span> */}
                            </p>
                            {/* Cartitemsquantity starts here */}
                            <div className="flex flex-col pt-4">
                              <div className="flex items-center justify-center">
                                <button
                                  onClick={() => {
                                    console.log(
                                      "Item ID to decrease:",
                                      item.id
                                    );
                                    handleQuantityDecrease(item.id);
                                  }}
                                  className="w-10 h-10 bg-gradient-to-b from-white to-[#f9f9f9] inline-block border border-gray-300 cursor-pointer text-base rounded-full leading-none"
                                >
                                  –
                                </button>
                                <input
                                  type="text"
                                  className="w-10 text-center"
                                  value={item.quantity} // Display the item quantity
                                  readOnly
                                />
                                <button
                                  onClick={() =>
                                    handleQuantityIncrease(item.id)
                                  }
                                  className="w-10 h-10 bg-gradient-to-b from-white to-[#f9f9f9] inline-block border border-gray-300 cursor-pointer text-base rounded-full leading-none"
                                >
                                  +
                                </button>
                              </div>
                              <div className="flex py-2 px-3">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded mr-2">
                                  Save for later
                                </button>
                                <button
                                  onClick={() => removeFromCArt(item.id)}
                                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>

                            {/* Cartitemsquantity Ends here */}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                {!isCartEmpty && <PriceSidebar cartItems={cartItems} />}
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ShoppingCart1;
