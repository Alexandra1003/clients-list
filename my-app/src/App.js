import React, { Component } from 'react';
import './App.css';
import ClientsList from './containers/clients-list';
import Details from './containers/details';
import SearchInput from './components/searchInput.js';

class App extends Component {
  render() {
    return (
      <div className="App ui grid container">
        <div className="four wide column left-bar">
          <SearchInput />
          <ClientsList />
        </div>
        <Details className="twelve wide column" />
      </div>
    );
  }
}

export default App;
