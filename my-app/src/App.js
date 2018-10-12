import React, { Component } from 'react';
import './App.css';
import ClientsList from './containers/clients-list';
import Details from './containers/details';
import SearchInput from './components/searchInput.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Details />
        <SearchInput />
        <ClientsList />
      </div>
    );
  }
}

export default App;
