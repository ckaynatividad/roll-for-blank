import React from "react";
import DiceRoller from "./DiceRoller";

export default function DiceCard({ diceResult, setDiceResult, listItems }) {
  return (
    <div>
      <p>Click to roll.</p>

      <DiceRoller
        diceResult={diceResult}
        setDiceResult={setDiceResult}
        listItems={listItems}
      />
    </div>
  );
}
