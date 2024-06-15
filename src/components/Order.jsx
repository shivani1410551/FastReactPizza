import React from "react";
const Order = ({ closeHour }) => {
  return (
    <div>
      <p>We are open until {closeHour}:00. Come visit us or order online.</p>
      <button>Order</button>
    </div>
  );
};

export default Order;
