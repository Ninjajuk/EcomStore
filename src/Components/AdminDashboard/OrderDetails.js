import React from "react";
import { useParams } from "react-router-dom"; // If you're using React Router
import { orderData } from "./Customerdata";

const OrderDetailsPage = () => {
  const { orderId } = useParams(); // If you're using React Router

  // Find the order with the matching orderId
  const order = orderData.find((order) => order.id === parseInt(orderId));

  if (!order) {
    // Handle the case where the order is not found
    return <div>Order not found</div>;
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2>Order Details</h2>
      </div>
      <div className="card-body">
        <div>
          <strong>Order Number:</strong> {order.orderNumber}
        </div>
        <div>
          <strong>Total:</strong> ${order.total.toFixed(2)}
        </div>
        <div>
          <strong>Customer:</strong> {order.customer}
        </div>
        <div>
          <strong>Payment Status:</strong> {order.paymentStatus}
        </div>
        <div>
          <strong>Fulfilment Status:</strong> {order.fulfilmentStatus}
        </div>
        <div>
          <strong>Delivery Type:</strong> {order.deliveryType}
        </div>
        <div>
          <strong>Date:</strong> {order.date}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
