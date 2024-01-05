import React from "react";

function PaymentMethod() {
  return (
    <div className="mt-10 space-y-10">
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-900">
          Payment Methods
        </legend>
        <p className="mt-1 text-sm leading-6 text-gray-600">Choose One</p>
        <div className="mt-6 space-y-6">
          <div className="flex items-center gap-x-3">
            <input
              id="cash"
              name="payments"
              // onChange={handlePayment}
              value="cash"
              type="radio"
              // checked={paymentMethod === 'cash'}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="cash"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Cash
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="card"
              // onChange={handlePayment}
              name="payments"
              // checked={paymentMethod === 'card'}
              value="card"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="card"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
             credit Card Payment 
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default PaymentMethod;
