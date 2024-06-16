import React from "react";
import DiceCard from "../components/DiceCard";

export default function DiceView({ diceResult, setDiceResult }) {
  return (
    <div className="">
      <DiceCard diceResult={diceResult} setDiceResult={setDiceResult} />
    </div>
  );
}
