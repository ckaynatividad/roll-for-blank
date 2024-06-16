import React, { useState } from "react";
import List from "../../components/List";
import ListForm from "../../components/ListForm";

export default function ListItems({ listItems, setListItems }) {
  const [listItem, setListItem] = useState("");
  const [errText, setErrText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (listItem.length === 0) {
      setErrText("You must enter something!");
    } else {
      setErrText("");
      listItems.push({
        id: listItems.length + 1,
        description: listItem,
      });
      setListItem("");
      setListItems((prev) => [...prev]);
    }
  };

  const handleDelete = async (id) => {
    listItems.splice(listItems.indexOf(id), 1);
    setListItems((prev) => [...prev]);
  };

  return (
    <div>
      <ol>
        <h2>Your List</h2>
        <List listItems={listItems} handleDelete={handleDelete} />
        {errText}
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
