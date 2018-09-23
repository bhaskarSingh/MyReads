import React, { Component } from 'react'
import BookShelf from '../components/BookShelf';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllBooks } from '../action'

class BooksContainer extends Component {

    componentDidMount(){
        this.props.getAllBooks();
    }

    render() {
        return (
            <div>
                <p>Reading</p>
                <BookShelf data={this.props.data.books} type="currentlyReading" />
                <p>Want to read</p>
                <BookShelf data={this.props.data.books} type="wantToRead" />
                <p>Read</p>
                <BookShelf data={this.props.data.books} type="read" />
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
