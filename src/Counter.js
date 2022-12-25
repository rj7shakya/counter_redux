import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state?.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Count:{counter}</div>
      <div className="margin">
        <span
          className="button"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          +
        </span>{" "}
        <span
          className="button"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          -
        </span>
      </div>
    </div>
  );
};

export default Counter;
