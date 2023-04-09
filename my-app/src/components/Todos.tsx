import React, { useContext } from "react";
import List from "./List";
import classes from "./Todos.module.css";
import { TodoContext } from "../context/store";

const Todos: React.FC = (props) => {
  const ctx = useContext(TodoContext);
  return (
    <>
      <ul className={classes.ul}>
        {ctx.listData.map((el) => (
          <List key={el.id} item={el.item} id={el.id}></List>
        ))}
      </ul>
      {ctx.listData.length !== 0 && (
        <span>
          <i> Click on the list item to remove the item</i>
        </span>
      )}
    </>
  );
};

export default Todos;
