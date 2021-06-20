export const setTodo = (e) => {
    return async (dispatch) => {
        const value = e.target.value
        await dispatch({ type: 'SET_TODO', payload: value })
    }
}

export const clearTodo = () => {
    return async (dispatch) => {
        await dispatch({ type: 'CLEAR_TODO', payload: "" })
    }
}