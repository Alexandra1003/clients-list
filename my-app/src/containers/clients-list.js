import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../actions/client';
import ListItem from '../components/listItem';

class ClientsList extends Component {
    showList() {
        return this.props.clients.map((client) => {
            return (
                <ListItem client={client} onClickCallback={() => this.props.select(client)} key={this.props.clients.indexOf(client)} />
            )
        })
    }

    render() {
        return (
            <div>
                <ol>
                    {this.showList()}
                </ol>
            </div>
        );
    }
}

function filterClients(clients, searchValue) {
    if (!searchValue || searchValue.length === 0) {
        return clients;
    }
    var result = clients.filter((client) => {

        for (var prop in client) {
            for (var field in client[prop]) {
                if (field === "avatar") continue;
                if (client[prop][field].toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) {
                    return true;
                }
            }
        }
        return false;
    })


    return result;
}

function mapStateToProps(state) {
    return {
        clients: filterClients(state.clients, state.searchString),
        active: state.active
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ select: select }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ClientsList);