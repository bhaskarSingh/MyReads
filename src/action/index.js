import * as BookApis from '../BooksAPI';

export function getAllBooks(){
    const request = BookApis.getAll().then(response => response);
    return {
        type: 'GET_BOOKS',
        payload: request
    }
}

export function updateBookCategory(book, shelf){
    const request = BookApis.update(book, shelf).then(response => response)
    return {
        type: 'UPDATE_BOOK',
        payload: request
    }
}