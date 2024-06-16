import React from "react";

export default function ListForm({ listItem, setListItem, handleSubmit }) {
  return (
    <div>
      <form>
        <input
          type="text"
          value={listItem}
          onChange={(e) => {
            setListItem(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Add to List</button>
      </form>
    </div>
  );
}
