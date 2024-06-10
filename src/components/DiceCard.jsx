import React from "react";
import DiceForm from "./DiceForm";
import DiceRoller from "./DiceRoller";

export default function DiceCard() {
  return (
    <div>
      <p>Click to roll. Already have a roll? </p>
      {/* <DiceForm /> */}
      <DiceRoller />
      <p>Roll again? </p>
    </div>
  );
}
