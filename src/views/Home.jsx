import React from "react";
import Header from "../components/Header";
import DiceRoller from "./Dice";
import ListItems from "./ListItems";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="main">
        <DiceRoller />
        <ListItems />
      </div>
    </div>
  );
}
