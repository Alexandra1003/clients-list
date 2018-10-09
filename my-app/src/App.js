import React, { Component } from 'react';
import './App.css';

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

class ListItem extends Component {
  render() {
    return (
      <div className="listItemContainer">
        <img className="listItemAvatar" src={this.props.client.general.avatar} alt="" />
        <div>{this.props.client.general.firstName + " " + this.props.client.general.lastName}</div>
        <div>{this.props.client.job.title}</div>
      </div>
    );
  }
}

var selectedClient = clients[0];

class ClientDetails extends Component {
  render() {
    return (
      <div className="clientDetailsContainer">
        <img className="clientDetailsAvatar" src={this.props.client.general.avatar} alt="" />
        <div>{this.props.client.general.firstName + " " + this.props.client.general.lastName}</div>
        <div>{this.props.client.job.company}</div>
        <div>{this.props.client.job.title}</div>

        <div>{this.props.client.contact.email}</div>
        <div>{this.props.client.contact.phone}</div>

        <div>{this.props.client.address.street}</div>
        <div>{this.props.client.address.city}</div>
        <div>{this.props.client.address.zipCode}</div>
        <div>{this.props.client.address.country}</div>
      </div>
    );
  }
}

class SearchInput extends Component {
  render() {
    return (
      <div className="searchInputContainer">
        <input/>
        <img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-128.png" alt=""/>
      </div>
    );
  }
}

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
