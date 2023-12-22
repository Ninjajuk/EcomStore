import React, { useState } from "react";

const CustomerForm = () => {
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    orders: "",
    totalSpent: "",
    city: "",
    lastSeen: "",
    lastOrder: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log("Form submitted:", customerData);
  };

  return (
    <form
      className=" w-full max-w-lg bg-white p-6 rounded-lg shadow-lg "
      style={{ maxHeight: "70vh", overflowY: "auto" }}
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Customer Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={customerData.name}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={customerData.email}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="orders"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Orders
        </label>
        <input
          type="number"
          id="orders"
          name="orders"
          value={customerData.orders}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="totalSpent"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Total Spent
        </label>
        <input
          type="number"
          id="totalSpent"
          name="totalSpent"
          value={customerData.totalSpent}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="city"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={customerData.city}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="lastSeen"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Last Seen
        </label>
        <input
          type="text"
          id="lastSeen"
          name="lastSeen"
          value={customerData.lastSeen}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="lastOrder"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Last Order
        </label>
        <input
          type="text"
          id="lastOrder"
          name="lastOrder"
          value={customerData.lastOrder}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default CustomerForm;
