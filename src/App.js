import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import Editor from './editor/Editor.js';

const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Jingtum Smart Contract Editor</h1>
          </header>

          <Editor/>
        </div>
      </Provider>
    );
  }
}

export default App;
