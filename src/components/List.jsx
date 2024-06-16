import React from "react";

export default function List({ listItems, handleDelete }) {
  return (
    <div>
      <ol>
        {listItems.map((item, i) => (
          <li key={i}>
            {item.description}
            <button onClick={() => handleDelete(item.id)}>x</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
