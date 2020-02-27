import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
import './App.css';

class App extends Component {
  state = {
    ninjas : [
      { name: "Furtuna", age: 28, belt: 'black', id: 1 },
      { name: "Ryu", age: 30, belt: 'black', id: 2 },
      { name: "Bla", age: 21, belt: 'red', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My first react app</h1>
          <AddNinja />
          <Ninjas ninjas={ this.state.ninjas } />
        </header>
      </div>
    );
    
  }
}

export default App;
