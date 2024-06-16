import React from "react";
import DiceRoller from "./DiceRoller";

export default function DiceCard({ diceResult, setDiceResult, listItems }) {
  return (
    <div>
      <p>Dice roll! (4-sided)</p>

      <DiceRoller setDiceResult={setDiceResult} />
    </div>
  );
}
