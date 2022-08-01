import React, { useContext } from "react";
import { ThemContexts } from "../contextsHook/ThemContexts";
import { TodoContext } from "../contextsHook/TodoContext";
import { DELETE_TODOS } from "../reducers/types";
import "./Hooks.css";

//cách 1
// const TodoItem = (props) => {
//     const todo = props.todoItem
//   return (
//     (<li> <p className='qcont'>{todo.title}</p> </li>)
//   )
// }

//cách 2
const TodoItem = ({ todo }) => {
  //sudung context truyền du liệu và function wa nhieu component
  // const { deleteTodos } = useContext(TodoContext)
  const { dispatch } = useContext(TodoContext);
  const { theme } = useContext(ThemContexts);
  const { isLightTheme, Light, Dark } = theme;
  const style = isLightTheme ? Light : Dark;
  return (
    <li
      onClick={() => {
        dispatch({
          type: DELETE_TODOS,
          payload: { id: todo.id },
        });
      }}
      className="qcont"
      style={style}
    >
      {todo.title}
    </li>
  );
};

export default TodoItem;
