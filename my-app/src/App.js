import React, { Component } from 'react';
import './App.css';
import ClientsList from './containers/clients-list';
import Details from './containers/details';

import ListItem from './components/listItem.js';
import ClientDetails from './components/clientDetails.js';
import SearchInput from './components/searchInput.js';

//var selectedClient = clients[0];
/*
  <ClientDetails client={selectedClient} />

        <SearchInput />
        <ListItem client={clients[0]} />
        <ListItem client={clients[1]} />
        <ListItem client={clients[2]} /> 

*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <Details />
        <ClientsList />
      </div>
    );
  }
}

export default App;
