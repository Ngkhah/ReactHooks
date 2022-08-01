import React, { Fragment, useContext} from "react";
import "./Hooks.css";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import ThemeSwitch from "./ThemeSwitch";
import { TodoContext } from "../contextsHook/TodoContext";
import { AuthContext } from "../contextsHook/AuthContext";

const Todos = () => {
  const { todos } = useContext(TodoContext);
  //   const [todos, setTodos] = useState([
  //     {
  //       id: 1,
  //       title: "delectus aut autem",
  //     },
  //     {
  //       id: 2,
  //       title: "quis ut nam facilis et officia qui",
  //     },
  //     {
  //       id: 3,
  //       title: "fugiat veniam minus",
  //     }
  //   ]);
  //   const addTodos = todo => {
  //     setTodos([...todos,todo]);
  //   };

  //   const deleteTodos = id => {
  //     setTodos(todos.filter(todo=> todo.id !== id));
  //   };

  // load auththenticated vào todos
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <Fragment>
      <div className="todo-list">
        <TodoForm />
        {
          isAuthenticated ? (<ul>
            {todos.map((todo) => (
              <TodoItem todo={todo} key={todo.id} />
            ))}
          </ul>) : ( <p style={{textAlign:"center", margin:"2rem", fontSize:"15px"}}>Not auththenticated</p> )
        }
        <ThemeSwitch />
      </div>
    </Fragment>
  );
};

export default Todos;
