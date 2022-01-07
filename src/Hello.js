import React, { useRef, useState } from "react";

function Hello({ name, setName }) {
  const [changedName, setChangedName] = useState("");
  const imageRef = useRef(null);
  return (
    <div>
      <h1>Hello {name}!</h1>
      <div style={{ padding: "10px" }}>
        <input onChange={(event) => setChangedName(event.target.value)}></input>
      </div>
      <div style={{ padding: "10px" }}>
        <button name="change Name" onClick={(event) => setName(changedName)}>
          Change Name
        </button>
      </div>
      <div>
        <img
          alt="speaker"
          src="/Speaker-39062.jpg"
          ref={imageRef}
          onMouseOver={() => {
            imageRef.current.src = "/Speaker-41808.jpg";
          }}
          onMouseOut={() => {
            imageRef.current.src = "/Speaker-39062.jpg";
          }}
        />
      </div>
    </div>
  );
}

export default Hello;
