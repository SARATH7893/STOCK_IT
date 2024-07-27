import React from "react";
import { Link } from "react-router-dom";
import  { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allorders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      // console.log(res.data);
      setAllOrders(res.data);
    });
  }, []);
  return (
    <>
      <h3 className="title">Your Orders ({allorders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {allorders.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td style={{fontSize:"14.4px"}}>{stock.price.toFixed(2)}</td>
                <td className={stock.mode==="BUY"?"profit":"loss"} style={{fontSize:"14.4px"}}>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;