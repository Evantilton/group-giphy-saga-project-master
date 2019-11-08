import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {

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
      <div>
        <h1>Search Page!</h1>




        <button onClick={this.addFavorite}>Favorite This</button>
      </div>
    );
  }
  
}
const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Search);
