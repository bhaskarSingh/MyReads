import React, { Component, Fragment } from 'react'
import BookShelf from '../components/BookShelf';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllBooks } from '../action'
import './BookContainer.css'

class BooksContainer extends Component {

    shelves = [
        ['Currently Reading', 'currentlyReading'],
        ['Want to read', 'wantToRead'],
        ['Read', 'read']
    ]

    componentDidMount(){
        this.props.getAllBooks();
    }

    mappedShelves = () => (
        this.shelves.map(shelf => (
            <Fragment key={shelf[1]} >
                <h2 className="bookShelfTitle">{shelf[0]}</h2>
                <div className="scrollingWrapper">
                    <BookShelf data={this.props.data.books} type={shelf[1]} />
                </div>
            </Fragment>
        ))
    )

    render() {
        return (
            <Fragment>
                { this.mappedShelves() }
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        data: state.books
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllBooks
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);
