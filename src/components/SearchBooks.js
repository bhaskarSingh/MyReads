import React, { Component } from 'react';
import * as BooksApi from '../BooksAPI';
import escapeRegexp from 'escape-string-regexp';
import SearchBar from 'material-ui-search-bar';
import ShowSearchResults from './ShowSearchResults';
class SearchBooks extends Component {
    state = {
        query: "",
        data: []
    }

    handleSearchInput = (query) => {
        const val = escapeRegexp(query, 'i');
        this.setState({
            query: val
        });
        BooksApi.search(query).then((data) => {
            // debugger
            if(data !== undefined && data.length > 0){
                if(this.state.query === ""){
                    this.setState({data: []})
                }else{
                    this.setState({data})
                }
            }
            console.log(this.state.data, this.state.query);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
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

export default SearchBooks;