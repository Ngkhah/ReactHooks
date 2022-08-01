import React, { Fragment } from "react";
import Navbar from "../componentsHook/Navbar";
import Todos from "../componentsHook/Todos";
import "../componentsHook/Hooks.css";
import ThemContextProvider from "../contextsHook/ThemContexts";
import TodoContextProvider from "../contextsHook/TodoContext";
import AuthContextProvider from "../contextsHook/AuthContext";

const TestHooks = () => {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <ThemContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TodoContextProvider>
            <Todos />
          </TodoContextProvider>
        </AuthContextProvider>
      </ThemContextProvider>
    </div>
  );
};

export default TestHooks;
