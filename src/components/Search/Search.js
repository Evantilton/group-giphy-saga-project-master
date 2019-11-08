import React, { Component } from 'react';

import axios from 'axios';


import { connect } from 'react-redux';


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

    addFavorite = (event) =>{
        //adds favorited search result to database
        event.preventDefault();
        console.log('Favorite clicked');
        this.props.dispatch({ type: 'POST_FAVES', payload: this.state.image })
        this.setState({
            newFave: {
                category_id: '',
                image: '',
            }
        });
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





        <button onClick={this.addFavorite}>Favorite This</button>

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
const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Search);
