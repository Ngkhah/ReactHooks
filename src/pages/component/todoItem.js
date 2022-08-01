import React, { Fragment } from "react";
import PropTypes from 'prop-types'

const TodoItem = (props) => {
  const todo = props.todoProps;
  const markComplete = props.markCompleteFunc;
  const deletTodo = props.deletTodoFunc;

  const todoStyle = {
    background: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: todo.completed ? "line-through" :'none',
  };
  return (
    <Fragment>
      <p style={todoStyle}>
        <input type="checkbox" onChange={markComplete.bind(this, todo.id)} checked={todo.completed}/> {todo.title}
        <button
          style={{
            background: "#ff0000",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            padding: "5px 9px",
            cursor: "pointer",
            float: "right",
          }}
          onClick={deletTodo.bind(this, todo.id)}
        >
          Delete
        </button>
      </p>
    </Fragment>
  );
};
TodoItem.propTypes = {
    todoProps: PropTypes.object.isRequired,
    markCompleteFunc: PropTypes.func.isRequired,
    deletTodoFunc: PropTypes.func.isRequired
}
export default TodoItem;
