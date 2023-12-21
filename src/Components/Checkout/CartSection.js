import React from "react";
import { useNavigate } from "react-router-dom";

function CartSection({ cartItems }) {
  const navigate = useNavigate();

  // Calculate the total price and total discount amount
  const { totalPrice, totalDiscount } = cartItems.reduce(
    (acc, item) => {
      const itemPrice = item.price;
      const discountAmount = (itemPrice * item.discountPercentage) / 100;
      return {
        totalPrice: acc.totalPrice + itemPrice,
        totalDiscount: acc.totalDiscount + discountAmount
      };
    },
    { totalPrice: 0, totalDiscount: 0 }
  );

  // Calculate the final price after applying discounts
  const finalPrice = Math.floor(totalPrice - totalDiscount);

  return (
    <div className="mx-auto mt-12 bg-white max-w-7xl px-2 sm:px-2 lg:px-4">
      <div className="border-t border-gray-200 px-0 py-6 sm:px-0">
        <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
          Cart
        </h1>

        {cartItems.map((item) => {
          const discountAmount = (item.price * item.discountPercentage) / 100;
          // const discountPrice = Math.floor(item.price - discountAmount); // Round down to remove decimal digits
          const discountPrice = (item.price - discountAmount).toFixed(2); // Show up to two digits after the decimal point

          return (
            <div key={item.id} className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                <li className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href="#">{item.title}</a>
                        </h3>
                        <p className="ml-4">${discountPrice}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
                    </div>

                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="text-gray-500">
                        <label
                          htmlFor="quantity"
                          className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                        >
                          Qty
                        </label>
                        <select>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>

      <div className="border-t border-gray-200 px-2 py-6 sm:px-2">
        <div className="flex justify-between my-2 text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>$ {finalPrice}</p>
        </div>
        <div className="flex justify-between my-2 text-base font-medium text-gray-900">
          <p>Total Items in Cart</p>
          <p>{cartItems.length} items</p>
        </div>

        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <div
            // onClick={handleOrder}
            className="flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Order Now
          </div>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or
            <button
              to="/"
              onClick={() => navigate("/")}
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
            <button />
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartSection;
