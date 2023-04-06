import React, { useState } from "react";

const State2 = () => {
  const [sport, setSport] = useState("");

  const handleSubmit = () => {
    alert(`my sport is ${sport}`);
  };

  return (
    <>
      <div>
        <label>My sport</label>
        <input onChange={(e) => setSport(e.target.value)} />
        <button onClick={handleSubmit}>handle Submit</button>
      </div>
      <div>My sport is {sport}</div>
    </>
  );
};

export default State2;
