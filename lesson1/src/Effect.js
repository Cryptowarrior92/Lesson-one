import React, { useEffect, useState } from "react";

const Effect = () => {
  const [number, setNumber] = useState(0);

  const multiply = () => {
    return number * 2;
  };

  useEffect(() => {
    console.log(multiply());
  }, [number]);

  return (
    <div>
      <p>New number {number}</p>

      <button onClick={() => setNumber(number + 1)}>Add</button>
    </div>
  );
};

export default Effect;
