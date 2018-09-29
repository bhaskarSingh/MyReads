import React, { Component } from 'react';
import * as BooksApi from '../BooksAPI';
import escapeRegexp from 'escape-string-regexp';
import SearchBar from 'material-ui-search-bar';
import ShowSearchResults from './ShowSearchResults';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllBooks } from '../action';
class SearchBooks extends Component {
    state = {
        query: "",
        data: []
    }

    componentWillMount(){
        this.props.getAllBooks();
    }

    handleSearchInput = (query) => {
        this.setState({ query: escapeRegexp(query, 'i') });
        if(this.state.query){
            BooksApi.search(query).then((data) => {
                const arr = data.slice();
                for(let i =0; i < data.length; i++){
                    for(let j = 0; j < this.props.data.books.length; j++){
                        if(data[i].id === this.props.data.books[j].id){
                            arr.splice(i, 1, this.props.data.books[j]);
                        }
                    }
                }
                console.log(arr)
                this.setState({data: arr})
                console.log(this.state.data, this.state.query);
            })
            .catch(() => {
                this.setState({ data: [] });
            })
        } else {
            this.setState({data: [] });
        }
    }

    render() {
        console.log(this.props.data.books);
        return (
            <div>
                <SearchBar
                placeholder="Search for title or author name"
                style={{margin:'10px'}}
                value={this.state.query}
                onChange={(newValue) => this.handleSearchInput(newValue)}
                onRequestSearch={() => this.handleSearchInput(this.state.query)} />
                <ShowSearchResults data={this.state.data} />
            </div>
          );
      }
}

const mapStateToProps = (state) => {
    return {
        data: state.books
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllBooks
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBooks);