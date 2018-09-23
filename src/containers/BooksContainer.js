import React, { Component } from 'react'
import BookShelf from '../components/BookShelf';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllBooks } from '../action'

class BooksContainer extends Component {

    state = {
        data: []
    }

    componentDidMount(){
        this.props.getAllBooks();
    }

    render() {
        return (
            <div>
                <BookShelf data={this.props.data.books} type="wantToRead" />
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
