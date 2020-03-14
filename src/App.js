import React, { Component } from 'react';
import { Provider } from "react-redux"
import './App.css';
import store from './store';
import ShowNames from './Components/ShowNames';

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <ShowNames />
      </Provider>
    );
  }
}

export default App;
