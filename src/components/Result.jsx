import React from "react";
import { useState } from "react";

export default function Result({
  diceResult,
  setDiceResult,
  listItems,
  setListItems,
}) {
  const handleReset = async (e) => {
    e.preventDefault();
    setDiceResult("Click to roll!");
  };
  return (
    <div>
      <p>The dice roll was: {diceResult}</p>
      <p>
        {listItems.length >= 4 && diceResult != "Click to roll!"
          ? diceResult + "." + " " + listItems[diceResult - 1].description
          : "none"}
      </p>
      <button onClick={handleReset}>roll again</button>
    </div>
  );
}
