import React, { useState } from "react";

function App() {
  const [initialName, setName] = useState("");
  const [finalName, setFinalName] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };
  const saveName = () => {
    setFinalName(initialName);
  };
  return (
    <div className="container">
      <h1>Hello {finalName}</h1>
      <input
        onChange={changeName}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={saveName}>Submit</button>
    </div>
  );
}

export default App;
