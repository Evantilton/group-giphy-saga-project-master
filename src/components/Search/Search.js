import React, { Component } from 'react';
import axios from 'axios';


class Search extends Component {
  state = {
    searchRequest: {
      searchText: '',
    }
  }
  handleNameChange = event => {
    console.log('event happened')
    this.setState({
      searchRequest: {
        [event.target.searchText]: event.target.value,
      }
    });
  }


doSearch = event => {
  console.log("doing a search hopefully?")
  axios.get('/api/search')
    .then(response => {
      console.log(response.data)
      this.props.dispatch({type: 'GIPHY_SEARCH', payload: response.data.data.url})

    })
    .catch(error => {
      alert('Could not do search at this time. Please try again later');
      console.log('Error on GET', error);
    })
}

  render() {
    return (
      <>
      <div>
        <h1>Search Page!</h1>
        <form onSubmit={this.doSearch}>
          <input type='text' placeholder='search' name='url'
            value={this.state.searchRequest.searchText} onChange={this.handleNameChange} />
          <input type='submit' value='add new search request' />
          {/* <img src={this.props.searchReducer}></img> */}
        </form>
      </div>
      <pre>
      {JSON.stringify(this.state,null,2)}
    </pre>
    </>
    );
  }

}
const mapReduxStateToProps=(reduxState)=>{
  return reduxState;
}

export default Search;
