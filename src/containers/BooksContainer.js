import React, { Component } from 'react'
import BookShelf from '../components/BookShelf';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllBooks } from '../action'
import './BookContainer.css'

class BooksContainer extends Component {

    componentDidMount(){
        this.props.getAllBooks();
    }

    render() {
        return (
            <div>
                <h2 className="bookShelfTitle">Currently Reading</h2>
                <div className="scrollingWrapper">
                    <BookShelf data={this.props.data.books} type="currentlyReading" />
                </div>
                <h2 className="bookShelfTitle">Want to read</h2>
                <div className="scrollingWrapper">
                    <BookShelf data={this.props.data.books} type="wantToRead" />
                </div>
                <h2 className="bookShelfTitle">Read</h2>
                <div className="scrollingWrapper">
                    <BookShelf data={this.props.data.books} type="read" />
                </div>
            </div>
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
