import React, { useState } from "react";

export default function DiceRoller() {
  const [diceResult, setDiceResult] = useState("Click to roll");
  const rollDice = (max) => {
    return 1 + Math.floor(Math.random() * max);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDiceResult(rollDice(4));
  };
  return (
    <div className="dice-roller">
      <button onClick={handleSubmit}>{diceResult}</button>
    </div>
  );
}
