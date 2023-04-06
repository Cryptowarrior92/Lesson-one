import React, { useEffect, useRef, useState } from "react";

const State = () => {
  //   const [something, setSomething] = useState(0);
  const [number, setNumber] = useState(1);

  //   let number = 1;
  //   const increaseNumber = () => {
  //     number += number;
  //     console.log(number);
  //   };

  const increaseNumber = () => {
    setNumber(number + number);
  };

  return (
    <div>
      <h1>current number - {number}</h1>
      <button onClick={increaseNumber}>increase number</button>
    </div>
  );
};

// rerendering
// hooks
// useState
// useEffect
// useMemo
// useRef

export default State;
