import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = (props) => {
    const addTodo = props.addTodoFunc
    const [title, setTiile] = useState('')

  const changeTitle = (e) => {
    setTiile(e.target.value);
  };
  const addItemTodo = e =>{
    e.preventDefault()
    if(title !== ''){
        addTodo(title);
        setTiile('')
    }
  }

  return (
    <form style={{ display: "flex" }} onSubmit={addItemTodo}>
      <input
        style={{ flex: "10", padding: "5px" }}
        type="text"
        name="title"
        placeholder="Thêm việc"
        onChange={changeTitle}
      />
      <input
        style={{ padding: "5px" }}
        className="btn"
        type="submit"
        value="Thêm"
      />
    </form>
  );
};
AddTodo.propTypes = {
    addTodoFunc: PropTypes.func.isRequired,
};

export default AddTodo;
