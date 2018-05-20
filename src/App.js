import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './editor/Editor.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Jingtum Smart Contract Editor</h1>
        </header>

        <Editor/>
      </div>
    );
  }
}

export default App;
