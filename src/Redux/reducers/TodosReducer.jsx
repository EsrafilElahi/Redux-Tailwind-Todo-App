export const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...action.payload]

        case 'DELETE_TODO':
            return [...action.payload]


        case 'CLEAR_TODOS':
            return [...action.payload]


        default:
            return state
    }
}

