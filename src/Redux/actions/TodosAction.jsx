import { clearTodo } from './TodoAction'

export const addTodo = (todoName) => {

    return async (dispatch, getState) => {
        const todos = [...getState().todos]
        const todo = {
            id: new Date().getTime().toString(),
            todoName
        }

        if (todo.todoName !== "" && todo.todoName !== " ") {
            todos.push(todo)
            await dispatch({ type: 'ADD_TODO', payload: todos })
            await dispatch(clearTodo())
        }
    }
}

export const deleteTodo = (id) => {

    return async (dispatch, getState) => {
        const todos = [...getState().todos]
        const filteredTodo = todos.filter((todo) => todo.id !== id)

        await dispatch({ type: 'DELETE_TODO', payload: filteredTodo })
    }
}

export const clearTodos = () => {
    
    return async (dispatch) => {
        await dispatch({ type: 'CLEAR_TODOS', payload: [] })
    }
}
