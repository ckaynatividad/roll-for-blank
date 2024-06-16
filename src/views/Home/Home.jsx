import React, { useState } from "react";
import Header from "../../components/Header";
import Result from "../../components/Result";
import DiceView from "../Dice/DiceView";
import ListItems from "../ListItems/ListItems";

export default function Home() {
  const [diceResult, setDiceResult] = useState(0);
  const [listItems, setListItems] = useState([]);
  const [text, setText] = useState("Please set up four things on your list!");

  return (
    <div className="home">
      <Header />
      <div>
        <div className="main">
          {diceResult != 0 && listItems.length >= 4 ? (
            <Result
              diceResult={diceResult}
              setDiceResult={setDiceResult}
              listItems={listItems}
              setListItems={setListItems}
            />
          ) : listItems.length === 4 ? (
            <DiceView
              diceResult={diceResult}
              setDiceResult={setDiceResult}
              listItems={listItems}
            />
          ) : (
            text
          )}
          <ListItems listItems={listItems} setListItems={setListItems} />
        </div>
      </div>
    </div>
  );
}
