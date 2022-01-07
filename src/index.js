import React, { Component, useEffect, useState } from "react";
import { render } from "react-dom";
import Hello from "./Hello";

function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("component mounted in the UI");
  }, [name]);
  return (
    <div>
      <Hello name={name} setName={setName} />
      <p>Start editing to see some magic happen {name}:)</p>
    </div>
  );
}

render(<App />, document.getElementById("root"));
