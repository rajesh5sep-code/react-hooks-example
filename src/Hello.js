import React, { useRef, useState } from "react";

function Hello({ name, setName }) {
  function changeName() {
    setName(changedName);
  }

  const [changedName, setChangedName] = useState("");
  const imageRef = useRef();
  return (
    <div>
      <h1>Hello {changedName}!</h1>
      <div style={{ padding: "10px" }}>
        <input onChange={(event) => setChangedName(event.target.value)}></input>
      </div>
      <div style={{ padding: "10px" }}>
        {/* <button name="change Name" onClick={() => {setName(changedName);}} >
          Change Name
        </button> */}

        <button name="change Name" onClick={changeName}>
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
