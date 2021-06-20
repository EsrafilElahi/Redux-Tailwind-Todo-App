export const todoReducer = (state = "", action) => {
    switch (action.type) {
        case 'SET_TODO':
            return action.payload 
        case 'CLEAR_TODO':
            return action.payload
        default:
            return state
    }
}
