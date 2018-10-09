import React, { Component } from 'react';
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

export default ClientDetails;