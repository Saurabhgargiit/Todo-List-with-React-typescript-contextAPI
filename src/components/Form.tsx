import React, { useRef, useContext } from "react";
import classes from "./Form.module.css";
import { TodoContext } from "../context/store";

const Form: React.FC = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const ctx = useContext(TodoContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const data = todoTextInputRef.current!.value;
    if (data.trim().length === 0) return;
    ctx.submitHandler(data);
    todoTextInputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="TodoInput">Add Todo item</label>
      <input type="text" id="TodoInput" ref={todoTextInputRef}></input>
      <button>Add item</button>
    </form>
  );
};

export default Form;
