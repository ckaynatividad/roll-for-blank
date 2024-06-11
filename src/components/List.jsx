import React from "react";

export default function List({ listItems }) {
  return (
    <div>
      <ol>
        {listItems.map((item, i) => (
          <li key={item.id}>{item.description}</li>
        ))}
      </ol>
    </div>
  );
}
