import React, { Component } from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component {
  componentWillMount () {
    firebase.initializeApp({
      apiKey: "AIzaSyDZvP_JAob8M9TYfnMUkcQmT1Lvz5W65rU",
      authDomain: "employeemanagement-7e4e4.firebaseapp.com",
      databaseURL: "https://employeemanagement-7e4e4.firebaseio.com",
      projectId: "employeemanagement-7e4e4",
      storageBucket: "",
      messagingSenderId: "1028680467164"
    });
  }

  render () {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    )
  }
}

export default App;
