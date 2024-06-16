import React, { useState } from "react";
import Header from "../components/Header";
import Result from "../components/Result";
import DiceView from "./DiceView";
import ListItems from "./ListItems";

export default function Home() {
  const [diceResult, setDiceResult] = useState("Click to roll");
  const [listItems, setListItems] = useState([]);
  return (
    <div className="home">
      <Header />
      <div>
        <div className="main">
          <DiceView diceResult={diceResult} setDiceResult={setDiceResult} />
          <ListItems listItems={listItems} setListItems={setListItems} />
        </div>
        {diceResult && listItems.length >= 4 ? (
          <Result diceResult={diceResult} listItems={listItems} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
