import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Favorite from '../Favorite/Favorite';
import Search from '../Search/Search';

class App extends Component {

  render() {
    return (
      <>
      <div>
        <h1>Giphy Search!</h1>
      </div>
      <Router>
      <div className="navBar">
            <Route path="/favorite">
              <Favorite />
            </Route>
            <Route exact path="/">
              <Search />
            </Route>
        <Link to="/">Search</Link>
        <Link to="/favorite">Favorites</Link>
      </div>
      </Router>
      </>
    );
  }
  
}

export default App;
