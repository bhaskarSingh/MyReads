import React from 'react';
import Book from './Book';


const BookShelf = (props) => (
    props.data.map((book, index) => (
        book.shelf === props.type?
        <li key={index} >
          <Book data={book} />
        </li> : ""
    ))
);

export default BookShelf;