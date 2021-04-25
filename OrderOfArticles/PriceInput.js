import React from "react";

export const PriceInput = props => {
    const changeValue = e => {
      if (Number(e.target.value) < 0) return;
      props.onAmountChange(e.target.value);
    }

    return <span>
      $<input
        type="number"
        value={props.amount}
        style={{ width: "50px", color: "cornflowerblue" }}
        onChange={changeValue}
      />
    </span>;
}