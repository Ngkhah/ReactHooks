import React, { createContext, useEffect, useReducer } from 'react'
import { TodoReduser } from '../reducers/TodoReduser';
import { GET_TODOS, SAVE_TODOS } from '../reducers/types';


export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
    const storeTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const [todos, dispatch] = useReducer(TodoReduser, storeTodos)

    useEffect(() => {
        dispatch({
            type: GET_TODOS,
            payload: null
        })
    }, [])

    useEffect(() => {
        dispatch({
            type: SAVE_TODOS,
            payload: { todos }
        })
    }, [todos])

    const TodoContextData = {
        todos,
        dispatch
    };

    return (
        <TodoContext.Provider value={TodoContextData}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider


    // useEffect(() => {
    //     localStorage.setItem('todos', JSON.stringify(todos))
    //     console.log(todos)
    // }, [todos])

    // const addTodos = todo => {
    //     setTodos([...todos, todo]);
    // };

    // const deleteTodos = id => {
    //     setTodos(todos.filter(todo => todo.id !== id));
    // };
    //  const [todos, setTodos] = useState([
    // //     {
    // //         id: 1,
    // //         title: "delectus aut autem",
    // //     },
    // //     {
    // //         id: 2,
    // //         title: "quis ut nam facilis et officia qui",
    // //     },
    // //     {
    // //         id: 3,
    // //         title: "fugiat veniam minus",
    // //     }
    // ]);