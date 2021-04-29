import { createContext, useState } from "react";

export const Context = createContext();

function GlobalContextProvider(props) {
  const [todoList, setTodoList] = useState([]);
  const addTodoList = (title, desc) => {
    setTodoList([{ title: title, desc: desc }, ...todoList]);
  };
  const removeTodoList = (id) => {
    setTodoList(todoList.filter((todoList, index) => index !== id));
  };
  return (
    <Context.Provider value={{ todoList, addTodoList, removeTodoList }}>
      {props.children}
    </Context.Provider>
  );
}

export default GlobalContextProvider;
