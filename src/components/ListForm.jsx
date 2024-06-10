import React from "react";
import { useState } from "react";

export default function ListForm() {
  const [thing, setThing] = useState("");
  return (
    <div>
      ListForm
      <form>
        {/* <input
        className="inputs"
        type="text"
        value={}
        placeholder="Enter thing here"
        /> */}
      </form>
    </div>
  );
}
