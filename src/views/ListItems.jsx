import React, { useState } from "react";
import List from "../components/List";
import ListForm from "../components/ListForm";

export default function ListItems({ listItems }) {
  const [listItem, setListItem] = useState("");

  return (
    <div>
      <ol>
        <h2>Your list</h2>
        <List listItems={listItems} />
        <ListForm
          listItems={listItems}
          listItem={listItem}
          setListItem={setListItem}
        />
      </ol>
    </div>
  );
}
