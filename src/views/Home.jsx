import React from "react";
import Header from "../components/Header";
import DiceRoller from "./Dice";
import ListThings from "./ListThings";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="main">
        <DiceRoller />
        <ListThings />
      </div>
    </div>
  );
}
