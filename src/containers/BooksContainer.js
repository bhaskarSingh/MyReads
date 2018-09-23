import React, { Component } from 'react'
import * as BooksApi from '../BooksAPI';
import BookShelf from '../components/BookShelf';

class BooksContainer extends Component {

    state = {
        data: []
    }

    componentDidMount(){
        BooksApi.getAll().then((response) => {
            console.log(response);
            this.setState({
                data: response
            })
        })
    }

    render() {
        return (
            <div>
                <BookShelf data={this.state.data} type="wantToRead" />
            </div>
        )
    }
}

export default BooksContainer;
