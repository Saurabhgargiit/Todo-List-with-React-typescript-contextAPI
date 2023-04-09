import React, { useState } from "react";
import { Todo } from "../models/Todo";

interface ProvideContextProps {
  children: React.ReactNode;
}

interface store {
  removeFunction: (id: string) => void;
  listData: Todo[];
  submitHandler: (data: string) => void;
}

const intialValue: store = {
  removeFunction: (id: string) => {},
  listData: [],
  submitHandler: (data: string) => {},
};

export const TodoContext = React.createContext(intialValue);

export const ProvideContext: React.FC<ProvideContextProps> = (props) => {
  const [listData, setListData] = useState<Todo[]>([]);

  const submitHandler = (data: string) => {
    const newData = new Todo(data);
    setListData((state) => {
      return state.concat(newData);
    });
  };

  const listClickHandler = (id: string) => {
    const newList = listData.filter((el) => {
      return el.id !== id;
    });
    setListData(() => {
      return newList;
    });
  };

  return (
    <TodoContext.Provider
      value={{
        removeFunction: listClickHandler,
        listData: listData,
        submitHandler: submitHandler,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
