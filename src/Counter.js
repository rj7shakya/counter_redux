import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const gcounter = useSelector((state) => state?.counter);
  const dispatch = useDispatch();

  console.log("gcounter", gcounter);

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>Count:{gcounter}</div>
      <div className="margin">
        <span
          className="button"
          onClick={() =>
            dispatch({
              type: "INCREMENT",
            })
          }
        >
          +
        </span>{" "}
        <span
          className="button"
          onClick={() =>
            dispatch({
              type: "DECREMENT",
            })
          }
        >
          -
        </span>
      </div>
    </div>
  );
};

export default Counter;
