import React from "react";

export default function DiceRoller({ setDiceResult }) {
  const rollDice = (max) => {
    return 1 + Math.floor(Math.random() * max);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDiceResult(rollDice(4));
  };
  return (
    <div className="dice-roller">
      <button onClick={handleSubmit}>Click to roll!</button>
    </div>
  );
}
