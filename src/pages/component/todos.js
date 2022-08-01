import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import AddTodo from "./addTodo";
import TodoItem from "./todoItem";
const Todos = () => {
  const [todosState, setTodosState] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        //console.log(res.data);
        setTodosState(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTodos();
  }, []);
  //them array trong ,[] để axios dừng reload lại mỗi khi thao tác với frontend

  //   const [todosState, setTodosState] = useState([
  //     { id: uuidv4(), title: "Việc 1", completed: true },
  //     { id: uuidv4(), title: "Việc 2", completed: false },
  //     { id: uuidv4(), title: "Việc 3", completed: false },
  //     { id: uuidv4(), title: "Việc 4", completed: false },
  //   ]);
  //tương tác với state hook thông thường dữ liệu mất khi reload
  //   const addTodo = (title) => {
  //     const newTodos = [
  //       ...todosState,
  //       {
  //         id: uuidv4(),
  //         title,
  //         completed: false,
  //       },
  //     ];
  //     // const newtodo = [{viec1},{viec2},{viec3}]
  //     setTodosState(newTodos);
  //   };
  //const deletTodo = (id) => {
  //     const newTodos = todosState.filter((todo) => todo.id !== id);
  //     setTodosState(newTodos);
  //   };
  //CÁCH TRUYỀN THỐNG
  //   const allTodos = [];
  //   for (let todo of todosState) {
  //     allTodos.push(<p>{todo}</p>);
  //   }

  //HÀM .map()
  const markComplete = (id) => {
    const newTodos = todosState.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    setTodosState(newTodos);
  };

  const deletTodo = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const newTodos = todosState.filter((todo) => todo.id !== id);
      setTodosState(newTodos);
    } catch (error) {
      console.log(error.message);
    }
  };

  //tương tác với data json
  const addTodo = async (title) => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          title,
          completed: false,
        }
      );
      const newTodos = [...todosState, res.data];
      setTodosState(newTodos);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      {/* <div style={{ textAlign: "left", fontSize: "14px" }}>{allTodos}</div> */}
      <AddTodo addTodoFunc={addTodo} />
      <div style={{ textAlign: "left", fontSize: "14px" }}>
        {todosState.map((todo) => {
          return (
            <p>
              <TodoItem
                key={todo.id}
                todoProps={todo}
                markCompleteFunc={markComplete}
                deletTodoFunc={deletTodo}
              />
            </p>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Todos;
