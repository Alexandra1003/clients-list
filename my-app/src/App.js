import React, { Component } from 'react';
import './App.css';
import ListItem from './listItem.js';
import ClientDetails from './clientDetails.js';
import SearchInput from './searchInput.js';

var clients = [
  {
    "general": {
      "firstName": "Liana",
      "lastName": "Crooks",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
    },
    "job": {
      "company": "Ledner, Johnson and Predovic",
      "title": "Investor Functionality Coordinator"
    },
    "contact": {
      "email": "Gerry_Hackett77@gmail.com",
      "phone": "(895) 984-0132"
    },
    "address": {
      "street": "1520 Zemlak Cove",
      "city": "New Devon",
      "zipCode": "42586-7898",
      "country": "Guinea-Bissau"
    }
  },

  {
    "general": {
      "firstName": "Deontae",
      "lastName": "Dare",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg"
    },
    "job": {
      "company": "D'Amore, Dicki and Borer",
      "title": "International Applications Consultant"
    },
    "contact": {
      "email": "Kellie.Marvin38@yahoo.com",
      "phone": "1-615-843-3426 x600"
    },
    "address": {
      "street": "65901 Glover Terrace",
      "city": "Alden ton",
      "zipCode": "57744-4248",
      "country": "Kenya"
    }
  },

  {
    "general": {
      "firstName": "Cortez",
      "lastName": "Pacocha",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/holdenweb/128.jpg"
    },
    "job": {
      "company": "McKenzie Group",
      "title": "Forward Branding Developer"
    },
    "contact": {
      "email": "Sage_Wiegand@hotmail.com",
      "phone": "725.583.0926 x0430"
    },
    "address": {
      "street": "376 Reginald Dam",
      "city": "Port Enid fort",
      "zipCode": "51294-8361",
      "country": "Belarus"
    }
  }
];

var selectedClient = clients[0];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClientDetails client={selectedClient} />

        <SearchInput />
        <ListItem client={clients[0]} />
        <ListItem client={clients[1]} />
        <ListItem client={clients[2]} />
      </div>
    );
  }
}

export default App;
