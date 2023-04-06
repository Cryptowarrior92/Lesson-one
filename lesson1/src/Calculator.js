import React, { useState, useEffect } from "react";

const Button = () => {
  const [value, setValue] = useState(0);

  const Power = () => {
    setValue(Math.pow(value, 2));
  };

  const showValue = (num) => {
    setValue(num);
  };
  const deLete = () => {
    setValue("");
  };

  const [inde, setInde] = useState(20);
  const [dep, setDep] = useState(0);

  const fn = () => {
    setDep(inde + 20);
  };

  useEffect(() => {
    fn();
  }, [inde]);

  return (
    <div>
      {/* this is how to visualize a value */}
      <div>
        <p>{inde}</p>
        <p>{dep}</p>
        <button onClick={() => setInde(inde + 1)}>Click</button>
      </div>

      <p>Value: {value}</p>
      <p className="numpad">
        <input
          value="10"
          type="button"
          onClick={(e) => setValue(e.target.value)}
        />

        <button
          onClick={() => {
            showValue(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            showValue(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            showValue(3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            showValue(4);
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            showValue(5);
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            showValue(6);
          }}
        >
          6
        </button>
        <button
          onClick={() => {
            showValue(7);
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            showValue(8);
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            showValue(9);
          }}
        >
          9
        </button>
        <button
          onClick={() => {
            showValue(0);
          }}
        >
          0
        </button>
        <button onClick={deLete}>x</button>
        <button onClick={Power}>Power2</button>
      </p>
    </div>
  );
};

export default Button;
