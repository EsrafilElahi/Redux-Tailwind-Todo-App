export const showReducer = (state = true, action) => {
    switch (action.type) {
        case 'SHOW_TODOS':
            return !state
        default:
            return state
    }
}