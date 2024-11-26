import React, { useEffect, useState } from "react";
import "./Order.css";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>Order List</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {order.item.map((items, index) => {
                  if (index === order.item.lenght - 1) {
                    return `${items.name} x ${items.quantity}`;
                  } else {
                    return `${items.name} x ${items.quantity}, `;
                  }
                })}
              </p>
              <p className="order-item-name">{`${order.address.firstName} ${order.address.lastName}`}</p>
              <p className="order-item-adress">
                <p>{`${order.address.street}, `}</p>
                <p>{`${order.address.city}, ${order.address.state}, ${order.address.country}, ${order.address.zipcode}`}</p>
              </p>
              <p className="order-item-phone">{`${order.address.phone}`}</p>
            </div>
            <p>{`Items: ${order.item.lenght}`} </p>
            <p>{`₹${order.amount}`}</p>
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
