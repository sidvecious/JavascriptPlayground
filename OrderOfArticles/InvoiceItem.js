import React, { useState } from "react";
import { PriceInput } from "./PriceInput";
import { CountInput } from "./CountInput";

export const InvoiceItem = props => {
  //const [price, setPrice] = useState(props.price);
  //const [count, setCount] = useState(props.count);

  return <tr>
    <td><CountInput amount={props.count} setAmount={props.setCount}/></td>
    <td>{props.name}</td>
    <td className="price">
      <PriceInput 
        amount={props.price} 
        onAmountChange={props.setPrice} 
      />
    </td>
    <td>{props.count * props.price}</td>
  </tr>;
};
