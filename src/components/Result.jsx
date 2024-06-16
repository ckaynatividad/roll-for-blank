import React from "react";
import { useState } from "react";

export default function Result({ diceResult, listItems }) {
  return (
    <div>
      <p>your result is!</p>
      <p>
        {listItems.length >= 4
          ? listItems.find((item) => item.id === diceResult).description
          : "none"}
      </p>
    </div>
  );
}
