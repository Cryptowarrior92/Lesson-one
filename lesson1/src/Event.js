import React from "react";

const Event = () => {
  const clickEvent = () => {
    console.log("me");
  };
  return (
    <div>
      <p>Click this button</p>
      <button onClick={clickEvent}>Click me</button>
      <input onChange={(eme) => console.log(eme.target.value)} />
    </div>
  );
};

export default Event;

// eme = global variable or a local varibale?
