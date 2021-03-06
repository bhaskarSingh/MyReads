import React from 'react';
import Book from './Book/Book';


const BookShelf = (props) => (
    props.data && props.data.length > 0 ?
    props.data.map((book, index) => (
        book.shelf === props.type?
        <div key={index} style={{flex: '0 0 auto'}}>
          <Book data={book} />
        </div> : ""
    )) : null
);

export default BookShelf;