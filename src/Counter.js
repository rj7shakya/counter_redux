import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>Count:{counter}</div>
      <div className="margin">
        <span className="button" onClick={() => setCounter((c) => c + 1)}>
          +
        </span>{" "}
        <span
          className="button"
          onClick={() => setCounter((c) => (c > 0 ? c - 1 : c))}
        >
          -
        </span>
      </div>
    </div>
  );
};

export default Counter;
