import React, { useState } from "react";
import List from "../components/List";
import ListForm from "../components/ListForm";

export default function ListItems({ listItems, setListItems }) {
  const [listItem, setListItem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    listItems.push({
      id: listItems.length + 1,
      description: listItem,
    });
    setListItem("");
    setListItems((prev) => [...prev]);
  };

  const handleDelete = async (id) => {
    listItems.splice(id - 1, 1);
    setListItems((prev) => [...prev]);
  };

  return (
    <div>
      <ol>
        <h2>Your list</h2>
        <List listItems={listItems} handleDelete={handleDelete} />
        {listItems.length === 4 ? (
          ""
        ) : (
          <ListForm
            listItems={listItems}
            listItem={listItem}
            setListItem={setListItem}
            handleSubmit={handleSubmit}
          />
        )}
      </ol>
    </div>
  );
}
