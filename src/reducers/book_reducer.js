const books = (state = {}, action) => {
    switch(action.type){
        case 'GET_BOOKS':
            return {...state, books: action.payload}
        case 'UPDATE_BOOK':
            return {...state, book: action.payload}
        default:
            return state
    }
}

export default books;