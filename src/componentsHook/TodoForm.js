import React, { useState, useContext } from "react";
import { Input } from "antd";
import { v4 as uuidv4 } from "uuid";
import "antd/dist/antd.css";
import { ThemContexts } from "../contextsHook/ThemContexts";
import { TodoContext } from "../contextsHook/TodoContext";
import { ADD_TODOS } from "../reducers/types";

const TodoForm = () => {
  const { theme } = useContext(ThemContexts);
  const { isLightTheme, Light, Dark } = theme;
  const style = isLightTheme ? Light : Dark;
  const [title, setTitle] = useState("");

  //load context todo
  const { dispatch } = useContext(TodoContext);
  //for this component only

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_TODOS,
      payload: {
        todo:{
          id: uuidv4(),
          title
        }
      }
    });
    setTitle("");
  };

  return (
    <form
      style={{
        display: "flex",
        margin: "0 15px",
        paddingTop: "15px",
        height: "60px",
      }}
      onSubmit={onHandleSubmit}
    >
      <Input
        placeholder="Enter a new Todos"
        type="text"
        name="title"
        onChange={onTitleChange}
        value={title}
        required
      />
      <Input className="btnSubmit" type="submit" value="Thêm" style={style} />
    </form>
  );
};

export default TodoForm;
