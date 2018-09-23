import * as BookApis from '../BooksAPI';

export function getAllBooks(){
    const request = BookApis.getAll().then(response => response);
    return {
        type: 'GET_BOOKS',
        payload: request
    }
}