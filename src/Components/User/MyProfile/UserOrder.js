import React, { useState } from "react";

import { orderData } from "../../AdminDashboard/Customerdata";
import { ProfileDiv } from "./ProfileDiv";
import PaginationTailwind from "../../AdminDashboard/PaginationTailwind";

const UserOrder = () => {
  const [orders, setOrders] = useState(orderData);

  // Sorting state
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  // Function to toggle sorting direction
  const toggleSortDirection = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  // Sort orders based on the selected field and direction
  const sortedOrders = [...orders].sort((a, b) => {
    const fieldA = a[sortField];
    const fieldB = b[sortField];

    if (sortDirection === "asc") {
      return fieldA < fieldB ? -1 : 1;
    } else {
      return fieldA > fieldB ? -1 : 1;
    }
  });

  // Pagination state
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = sortedOrders.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <ProfileDiv>
      <div style={{ height: "calc(100vh - 4rem)" }}>
        <div className="w-full  h-full bg-purple-400 md:px-4 py-2 ">
          {/* <h1 className="text-2xl font-semibold text-center">MY Order </h1> */}
          <div className="h-full w-full flex flex-col ">
            <div className="flex flex-col md:flex-row justify-between items-center py-2 gap-2">
              <h2 className="text-lg font-semibold pl-2">My Order History</h2>
              <input
                type="search"
                placeholder="search your order"
                className=" block  rounded-md border-0 py-2 px-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <button className="bg-blue-500 mx-2 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Add Order
              </button>
            </div>
            <div className=" max-h-full overflow-x-auto overflow-y-auto">
              <table className="w-full h-full border-collapse border border-gray-300">
                <thead className="sticky top-0 bg-black text-white">
                  <tr className="">
                    <th className="border border-gray-300 p-2 text-left">
                      <input type="checkbox" />
                    </th>
                    <th
                      className="border border-gray-300 p-2 cursor-pointer text-left"
                      onClick={() => {
                        setSortField("orderNumber");
                        toggleSortDirection();
                      }}
                    >
                      ORDER
                      {sortField === "orderNumber" && (
                        <span
                          className={`ml-2 ${
                            sortDirection === "asc" ? "rotate-180" : ""
                          }`}
                        >
                          &#8593;
                        </span>
                      )}
                    </th>
                    <th
                      className="border border-gray-300 p-2 cursor-pointer text-left"
                      onClick={() => {
                        setSortField("total");
                        toggleSortDirection();
                      }}
                    >
                      TOTAL
                      {sortField === "total" && (
                        <span
                          className={`ml-2 ${
                            sortDirection === "asc" ? "rotate-180" : ""
                          }`}
                        >
                          &#8593;
                        </span>
                      )}
                    </th>
                    <th
                      className="border border-gray-300 p-2 cursor-pointer text-left"
                      onClick={() => {
                        setSortField("customer");
                        toggleSortDirection();
                      }}
                    >
                      CUSTOMER
                      {sortField === "customer" && (
                        <span
                          className={`ml-2 ${
                            sortDirection === "asc" ? "rotate-180" : ""
                          }`}
                        >
                          &#8593;
                        </span>
                      )}
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      PAYMENT STATUS
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      FULFILMENT STATUS
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      DELIVERY TYPE
                    </th>
                    <th
                      className="border border-gray-300 p-2 cursor-pointer text-left"
                      onClick={() => {
                        setSortField("date");
                        toggleSortDirection();
                      }}
                    >
                      DATE
                      {sortField === "date" && (
                        <span
                          className={`ml-2 ${
                            sortDirection === "asc" ? "rotate-180" : ""
                          }`}
                        >
                          &#8593;
                        </span>
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedOrders.map((order, index) => (
                    <tr
                      key={order.id}
                      className={`${
                        index % 2
                          ? "bg-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white"
                          : "bg-yellow-300 cursor-pointer hover:bg-yellow-700 hover:text-white"
                      }`}
                    >
                      <td className="border border-gray-300 p-2">
                        <input type="checkbox" />
                      </td>
                      <td className="border border-gray-300 p-2">
                        {order.orderNumber}
                      </td>
                      <td className="border border-gray-300 p-2">
                        ${order.total.toFixed(2)}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {order.customer}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {order.paymentStatus}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {order.fulfilmentStatus}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {order.deliveryType}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {order.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination component */}
            <div className="sticky bottom-0 bg-blue-400">
              <PaginationTailwind
                itemsPerPage={itemsPerPage}
                totalItems={sortedOrders.length}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </ProfileDiv>
  );
};

export default UserOrder;
