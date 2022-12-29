import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementAction, decrementAction } from "./redux/actions";

const Counter = () => {
  const gcounter = useSelector((state) => state?.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Count:{gcounter}</div>
      <div className="margin">
        <span className="button" onClick={() => dispatch(incrementAction)}>
          +
        </span>{" "}
        <span className="button" onClick={() => dispatch(decrementAction)}>
          -
        </span>
      </div>
    </div>
  );
};

export default Counter;
