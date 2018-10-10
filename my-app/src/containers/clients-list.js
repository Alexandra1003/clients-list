import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';
import ListItem from '../components/listItem';

class ClientsList extends Component {
    showList() {
        return this.props.clients.map((client) => {
            return (
                <ListItem client={client} onClickCallback={() => this.props.select (client)} key={this.props.clients.indexOf(client)} />
               // <li onClick={() => this.props.select (client)} key={this.props.clients.indexOf(client)}>{client.general.firstName}</li>
            )
        })
    }
    render() {
        return (
            <ol>
                {this.showList ()}
            </ol>
        );
    }
}

function mapStateToProps (state) {
    return {
        clients: state.clients
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ClientsList);