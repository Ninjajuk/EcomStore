// src/components/CustomerPage.js
import React, { useState } from "react";
import AdminLayout from "./AdminLayout";
import PaginationTailwind from "./PaginationTailwind";
import { customerData } from "./Customerdata";
import CustomerForm from "../Form/CustomerForm";
import MyForm from "../Form/UserForm";
import CustomerModal from "../Modal/CustomerModal";
const CustomerPage = () => {
  const [customers, setCustomers] = useState(customerData);

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // Sorting state
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  // Function to toggle sorting direction
  const toggleSortDirection = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  // Sort customers based on the selected field and direction
  const sortedCustomers = [...customers].sort((a, b) => {
    const fieldA = a[sortField];
    const fieldB = b[sortField];

    if (sortDirection === "asc") {
      return fieldA < fieldB ? -1 : 1;
    } else {
      return fieldA > fieldB ? -1 : 1;
    }
  });
  const [hoveredRow, setHoveredRow] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  return (
    <AdminLayout>
      <div className="" style={{ height: "calc(100vh - 4rem)" }}>
        <h1 className="text-2xl font-semibold text-center">
          Customer Management
        </h1>

        <div className="flex justify-between items-center  ">
          <h2 className="text-lg font-semibold pl-2">Customer List</h2>
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="bg-blue-500 mx-2  hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Add Customer
          </button>
        </div>
        <div
          className="overflow-hidden max-h-full overflow-x-auto overflow-y-auto"
          // style={{ width: "100%", overflowX: "auto" }}
        >
          <table className="w-full  table-auto  border-collapse border border-gray-300 overflow-y-auto overflow-x-auto">
            <thead className="sticky top-0 bg-black text-white">
              <tr className="text-left">
                <th className="border border-gray-300 p-2">
                  <input type="checkbox" />
                </th>
                <th
                  className="border border-gray-300 p-2 cursor-pointer"
                  onClick={() => {
                    setSortField("name");
                    toggleSortDirection();
                  }}
                >
                  CUSTOMER
                </th>
                <th
                  className="border border-gray-300 p-2 cursor-pointer"
                  onClick={() => {
                    setSortField("email");
                    toggleSortDirection();
                  }}
                >
                  EMAIL
                </th>
                <th
                  className="border border-gray-300 p-2 cursor-pointer"
                  onClick={() => {
                    setSortField("orders");
                    toggleSortDirection();
                  }}
                >
                  ORDERS
                </th>
                <th
                  className="border border-gray-300 p-2 cursor-pointer"
                  onClick={() => {
                    setSortField("totalSpent");
                    toggleSortDirection();
                  }}
                >
                  TOTAL SPENT
                </th>
                <th
                  className="border border-gray-300 p-2 cursor-pointer"
                  onClick={() => {
                    setSortField("city");
                    toggleSortDirection();
                  }}
                >
                  CITY
                </th>
                <th
                  className="border border-gray-300 p-2 cursor-pointer"
                  onClick={() => {
                    setSortField("lastSeen");
                    toggleSortDirection();
                  }}
                >
                  LAST SEEN
                </th>
                <th
                  className="border border-gray-300 p-2 cursor-pointer"
                  onClick={() => {
                    setSortField("lastOrder");
                    toggleSortDirection();
                  }}
                >
                  LAST ORDER
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedCustomers.map((customer, index) => (
                <tr
                  key={customer.id}
                  className={
                    index % 2 === 0
                      ? "bg-gray-200 hover:bg-gray-400 shadow-2xl "
                      : "bg-indigo-200 hover:bg-indigo-400 shadow-2xl"
                  }
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  style={{ position: "relative", cursor: "pointer" }}
                >
                  <td className="border border-gray-300 p-2">
                    <input type="checkbox" />
                  </td>
                  <td className="border border-gray-300 p-2">
                    {customer.name}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {customer.email}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {customer.orders}
                  </td>
                  <td className="border border-gray-300 p-2">
                    ${customer.totalSpent.toFixed(2)}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {customer.city}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {customer.lastSeen}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {customer.lastOrder}
                  </td>
                  {/* {hoveredRow === index && (
        <td className="border border-gray-300 p-2">
          <button className="mr-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded">
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded">
            Delete
          </button>
        </td>
      )} */}
                  <td
                    className={`flex items-center p-2 absolute right-0 top-0 ${
                      hoveredRow === index ? "block" : "hidden"
                    }`}
                  >
                    <button className="mr-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded ">
                      Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="sticky bottom-0">
          <PaginationTailwind />
        </div>
      </div>
      {isModalOpen && <CustomerModal closeModal={closeModal} />}
    </AdminLayout>
  );
};

export default CustomerPage;
