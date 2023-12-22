import React, { useState } from "react";

import OrderForm from "../Form/OrderForm";

const OrderModal = ({ closeModal, order, onSubmit }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto">
      <div className="absolute inset-0 bg-gray-700 opacity-75"></div>
      <div className="relative z-10 bg-indigo-400 p-4 max-w-md rounded-lg">
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="text-red-600 hover:text-red-800"
          >
            Close
          </button>
        </div>
        <OrderForm
          closeModal={closeModal}
          initialOrder={order}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default OrderModal;
