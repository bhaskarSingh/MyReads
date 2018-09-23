import React from 'react';
import Book from './Book/Book';

const ShowSearchResults = (props) => (
    <div>
        <ol style={{'listStyleType': 'none', padding: 0, margin: 0,
        display: 'flex', 'justifyContent': 'center', 'flexWrap': 'wrap',background: 'whitesmoke'}}>
            {
                props.data.map((data, index) => {
                    return(
                        <li key={index} >
                            <Book data={data} />
                        </li>
                    )
                })
            }
        </ol>
    </div>
);

export default ShowSearchResults;