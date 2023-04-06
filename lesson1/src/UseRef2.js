import React, { useRef, useState } from "react";

const UseRef2 = () => {
  const [count, setCount] = useState(0);

  const countRef = useRef(count);

  const handleClick = () => {
    console.log(countRef.current);
    countRef.current = countRef.current + 1;
    setCount(countRef.current);
  };
  return (
    <div>
      <p>count :{count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
};

export default UseRef2;
