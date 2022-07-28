import React from "react";
import classes from "./radioButton.module.css";

export default function RadioButton({ isBase, radioChangeHandler }) {
  return (
    <div className={classes.radioContainer}>
      <input
        type="radio"
        id="base"
        name="store"
        value="base"
        checked={isBase ? true : false}
        onChange={radioChangeHandler}
      />
      <label>Base Store</label>

      <input
        type="radio"
        id="assigned"
        name="store"
        value="assigned"
        checked={isBase ? false : true}
        onChange={radioChangeHandler}
      />
      <label>Assigned Store</label>
      {/* <button onClick={testingFunction}>test button</button> */}
    </div>
  );
}
