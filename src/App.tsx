import "./App.css";
import { useState, useContext } from "react";
import Todos from "./components/Todos";
import { Todo } from "./models/Todo";
import Form from "./components/Form";
import { TodoContext } from "./context/store";
// import classes from "./App.module.css";
import "./App.css";

function App() {
  // const list = [new Todo("Learn React"), new Todo("Learn Typescript")];
  // const [listData, setListData] = useState<Todo[]>([]);

  // const submitHandler = (data: string) => {
  //   const newData = new Todo(data);
  //   setListData((state) => {
  //     return state.concat(newData);
  //   });
  // };

  // const listClickHandler = (id: string) => {
  //   const newList = listData.filter((el) => {
  //     if (el.id !== id) return el;
  //   });
  //   setListData(() => {
  //     return newList;
  //   });
  // };
  const ctx = useContext(TodoContext);

  return (
    <div className="App">
      <Form></Form>
      <Todos />
    </div>
  );
}

export default App;
