import React from "react";
import { useState } from "react";

export default function Result({ diceResult, setDiceResult, listItems }) {
  const [resultText, setResultText] = useState(
    diceResult + "." + " " + listItems[diceResult - 1].description
  );

  const handleReset = async (e) => {
    e.preventDefault();
    setDiceResult(0);
  };
  return (
    <div>
      <p>The dice roll was: {diceResult}!</p>
      <p>{listItems.length === 4 && diceResult !== 0 && resultText}</p>
      <button onClick={handleReset}>Roll again?</button>
    </div>
  );
}
