import "./styles.css";
import React, { useEffect, useState } from "react";
import Hello from "./Hello";

function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    window.addEventListener("keydown", () => {
      console.log("key press down");
    });
    console.log("component mounted in the  changed duet name");
    return () => {
      window.removeEventListener("keydown", () => {
        console.log("key press down removed");
      });
    };
  }, [name]);
  return (
    <div>
      <Hello name={name} setName={setName} />

      <p>Start editing to see some magic happen {name}:)</p>
    </div>
  );
}

export default App;
