import React from "react";
import { useState } from "react";

export default function ListForm({ listItems, listItem, setListItem }) {
  const [text, setText] = useState(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();
    listItems.push({
      id: listItems.length + 1,
      description: listItem,
    });
    setListItem("");
  };
  return (
    <div>
      ListForm
      <p>{text}</p>
      <form>
        <input
          type="text"
          placeholder="Enter thing here"
          value={listItem}
          onChange={(e) => {
            setListItem(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Add to things</button>
      </form>
    </div>
  );
}
