import {
    ADD_TODOS,
    DELETE_TODOS,
    SAVE_TODOS,
    GET_TODOS
} from "./types"


export const TodoReduser = (state, action) => {

    const { type, payload } = action

    switch (type) {
        case GET_TODOS:
            console.log("reducer GetTodos")
            const todos = localStorage.getItem('todos')
            if (todos) state = JSON.parse(todos)
            return state
        case SAVE_TODOS:
            localStorage.setItem('todos', JSON.stringify(payload.todos))
            return state
        case ADD_TODOS:
            return [...state, payload.todo]
        case DELETE_TODOS:
            return state.filter(todo => todo.id !== payload.id)
        default:
            return state
    }
}

