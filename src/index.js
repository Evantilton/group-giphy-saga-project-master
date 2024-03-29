import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
// this startingPlantArray should eventually be removed


/////////////////////Reducer////////////////////////
//reducerOne
const searchReducer = (state = {}, action) => {
    if(action.type === 'GIPHY_SEARCH') {
        return [action.payload];
    }
    return state;
}
//end reducerOne

//reducertwo

//end reducerTwo

//reducerThree

//end reducerThree

/////////////////////Sagas//////////////////////////

//GET SAGA

//End GET SAGA

//POST SAGA
function* postFaveSaga(action) {
  try {
    yield axios.post('/api/favorite', action.payload);
    yield put({ type: 'SET_FAVE' })
  } catch (error) {
    console.log('error fetching Favorites', error);
  }
}

//END POST SAGA


//DELETE SAGA

//END DELETE SAGA


// Create the rootSaga generator function
function* rootSaga() {
//rootsaga1
  
 //end rootsaga1
 //rootsaga2

  //end rootsaga2
  // rootsaga3
  yield takeEvery('POST_FAVE', postFaveSaga);
  // end rootsaga3
  }



// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const store = createStore(
  combineReducers({
    //reducer1
    searchReducer,
    //end reducer1
    //reducer2

    //end reducer2
    //reducer3

    //end reducer3
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);


// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));