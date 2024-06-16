import React from "react";
import DiceRoller from "./DiceRoller";

export default function DiceCard({ diceResult, setDiceResult, listItems }) {
  return (
    <div>
      <p>Dice roll! (4-sided)</p>

      <DiceRoller
        diceResult={diceResult}
        setDiceResult={setDiceResult}
        listItems={listItems}
      />
    </div>
  );
}
