import React from "react";
import PropTypes from "prop-types";

export default function TransactionRow(props) {
  const { order } = props;
  console.log(order);
  return (
    <tr>
      <td>{order.id}</td>
      <td>{order.orderDate}</td>
      <td>{order.orderTime}</td>
      <td>{order.amount}</td>
    </tr>
  );
}

TransactionRow.propTypes = {
  order: PropTypes.object.isRequired,
};
