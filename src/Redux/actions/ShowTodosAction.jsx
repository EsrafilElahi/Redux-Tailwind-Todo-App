export const showTodos = () => {
    return async (dispatch) => {
        await dispatch({ type: 'SHOW_TODOS' })
    }
}