

import React, { useState } from "react";

export const CountInput = props => {

    const setAmount = amount => props.setAmount(amount)

    return <span>
      <button
        onClick={() => setAmount(props.amount - 1)}
        disabled={props.amount <= 1}
      >-</button>
      <span style={{ width: "30px", color: "cornflowerblue" }}>
      &nbsp;{props.amount} &times;&nbsp;
      </span>
      <button
        onClick={() => setAmount(props.amount + 1)}
        disabled={props.amount >= 9}
      >+</button>
    </span>;
}