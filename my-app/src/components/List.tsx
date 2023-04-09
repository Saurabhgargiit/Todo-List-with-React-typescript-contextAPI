import React, { useContext } from "react";
import classes from "./List.module.css";
import { TodoContext } from "../context/store";

const List: React.FC<{
  item: string;
  id: string;
}> = (props) => {
  const ctx = useContext(TodoContext);

  return (
    <li
      id={props.id}
      className={classes.list}
      onClick={() => ctx.removeFunction(props.id)}
    >
      {props.item}
    </li>
  );
};

export default List;
