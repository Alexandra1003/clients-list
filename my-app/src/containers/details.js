import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClientDetails from '../components/clientDetails';

class Details extends Component {
    render() {
        if (!this.props.client) {
            return (<div className="twelve wide column inform-message">
                <div className="ui info message">
                    Please, choose a client..
            </div>
            </div>);
        }
        return (
            <div className="twelve wide column">
                <ClientDetails client={this.props.client} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        client: state.active
    };
}

export default connect(mapStateToProps)(Details);