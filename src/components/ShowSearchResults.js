import React from 'react';
import Book from './Book/Book';

const ShowSearchResults = (props) => (
    <div>
        <ol style={{'listStyleType': 'none', padding: 0, margin: 0,
        display: 'flex', 'justifyContent': 'center', 'flexWrap': 'wrap',background: 'whitesmoke'}}>
            {
                props.data && props.data.length > 0 ?
                props.data.map((data, index) => {
                    return(
                        <li key={index} >
                            <Book data={data} />
                        </li>
                    )
                }) : null
            }
        </ol>
    </div>
);

export default ShowSearchResults;