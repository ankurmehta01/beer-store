import React from "react";
import classes from "./searchList.module.css";

export default function SearchList({ searchedStores, serachListClickHandler }) {
  return (
    <div className={classes.storesList}>
      <ul>
        {searchedStores?.map((item) => {
          return (
            <li
              key={item.id}
              className={classes.listItem}
              id={item.id}
              onClick={serachListClickHandler}
            >
              {item.address}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
