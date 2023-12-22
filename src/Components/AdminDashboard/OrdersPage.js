// src/components/OrdersPage.js
import React, { useState } from "react";
import AdminLayout from "./AdminLayout";

import PaginationTailwind from "./PaginationTailwind";
import { orderData } from "./Customerdata";
import OrderModal from "../Modal/OrderModal";

import { DeleteCustomerModal } from "../Modal/DeleteCustomerModal";
const OrdersPage = () => {
  // Dummy order data (you can replace this with actual data)
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedOrderForEdit, setSelectedOrderForEdit] = useState(null);

  const handleEditClick = (order) => {
    setSelectedOrderForEdit(order);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };
  const onSubmit = (editedOrder) => {
    // Update the order data (replace with your actual update logic)
    const updatedOrders = orders.map((order) =>
      order.id === editedOrder.id ? { ...order, ...editedOrder } : order
    );
    setOrders(updatedOrders);

    setIsModalOpen(false);
    setSelectedOrderForEdit(null);
  };

  // const handleDelete = (index) => {
  //   const updatedOrders = [...orders];
  //   updatedOrders.splice(indexOfFirstItem + index, 1); // Remove the order at the specified index
  //   setOrders(updatedOrders);
  // };

  const [hoveredRow, setHoveredRow] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };
  const [checkboxStates, setCheckboxStates] = useState({});

  const handleCheckboxChange = (index) => {
    setCheckboxStates((prevState) => {
      return { ...prevState, [index]: !prevState[index] };
    });
  };
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleDelete = (index) => {
    setIsModalOpened(true); // Indicate that modal is about to open
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = (index) => {
    // Check if the modal is fully opened before proceeding
    if (isModalOpened) {
      setIsModalOpened(false); // Reset the modal opened flag

      const itemIndexToDelete = indexOfFirstItem + index;
      const updatedOrders = [...orders];
      updatedOrders.splice(itemIndexToDelete, 1);
      console.log("Updated orders after deletion:", updatedOrders);
      setOrders(updatedOrders);
      setIsDeleteModalOpen(false);
    }
  };

  const handleDeleteAndConfirm = async (index) => {
    await handleDelete(index); // Wait for handleDelete to complete
    handleConfirmDelete(index);
  };

  const handleCancelDelete = (index) => {
    setIsDeleteModalOpen(false);
  };
  return (
    <AdminLayout>
      <div style={{ height: "calc(100vh - 4rem)" }}>
        <h1 className="text-2xl font-semibold text-center">Order Management</h1>
        <div className="flex justify-between items-center ">
          <h2 className="text-lg font-semibold pl-2">Order List</h2>
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="bg-blue-500 mx-2 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Add Order
          </button>
        </div>
        <div className="overflow-hidden max-h-full overflow-x-auto overflow-y-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="sticky top-0 bg-black text-white">
              <tr className="">
                <th className="border border-gray-300 p-2 text-left">
                  <input type="checkbox" />
                </th>
                <th
                  className=" p-2 cursor-pointer text-left"
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
                  className={
                    checkboxStates[index]
                      ? "bg-green-200 hover:bg-green-400 shadow-lg"
                      : index % 2 === 0
                      ? "bg-gray-100 hover:bg-gray-400 shadow-lg"
                      : "bg-purple-200 hover:bg-purple-400 shadow-lg"
                  }
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  style={{ position: "relative", cursor: "pointer" }}
                >
                  <td
                    className={`border border-gray-300 p-2 'bg-green-500 text-white' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={checkboxStates[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    {order.orderNumber}
                  </td>
                  <td className="border border-gray-300 p-2">${order.total}</td>
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
                  <td className="border border-gray-300 p-2">{order.date}</td>
                  <td
                    className={` p-2 absolute right-0 top-0 ${
                      hoveredRow === index ? "block" : "hidden"
                    }`}
                  >
                    <button
                      onClick={() => handleEditClick(order)}
                      className="mr-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded "
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteAndConfirm(index)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination component */}
        <div className="sticky bottom-0">
          <PaginationTailwind
            itemsPerPage={itemsPerPage}
            totalItems={sortedOrders.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      {isModalOpen && (
        <OrderModal
          closeModal={() => {
            setIsModalOpen(false);
            setSelectedOrderForEdit(null);
          }}
          order={selectedOrderForEdit}
          onSubmit={onSubmit} // Pass the onSubmit callback
        />
      )}
      {isDeleteModalOpen && (
        <DeleteCustomerModal
          closeModal={handleCancelDelete}
          onDelete={handleDeleteAndConfirm}
        />
      )}
      {/* {isModalOpen && (
        <div>
          {selectedOrderForEdit ? (
            <OrderForm
            onSubmit={onSubmit}
            initialOrder={initialOrder || {}}
              closeModal={() => {
                setIsModalOpen(false);
                setSelectedOrderForEdit(null); // Clear the selected order after editing
              }}
              orders={orders} // Pass the orders to access within the OrderForm
            />
          ) : (
            <OrderModal closeModal={closeModal} initialOrder={selectedOrderForEdit} />
          )}
        </div>
      )} */}
    </AdminLayout>
  );
};

export default OrdersPage;
