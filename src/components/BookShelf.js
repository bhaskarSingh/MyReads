import React from 'react';
import Book from './Book/Book';


const BookShelf = (props) => (
    props.data && props.data.length > 0 ?
    props.data.map((book, index) => (
        book.shelf === props.type?
        <li key={index} >
          <Book data={book} />
        </li> : ""
    )) : null
);

export default BookShelf;