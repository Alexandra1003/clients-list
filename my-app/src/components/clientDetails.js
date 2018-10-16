import React, { Component } from 'react';
class ClientDetails extends Component {
    render() {
        return (
            <div>
                <div className="ui basic left floated segment">
                    <img className="ui image circular" src={this.props.client.general.avatar} alt="" />
                </div>
                <div className="ui basic left floated segment">
                    <h1 className="ui header">{this.props.client.general.firstName + " " + this.props.client.general.lastName}</h1>
                    <h3 className="ui header">{this.props.client.job.title} - {this.props.client.job.company}</h3><br />

                    <h4 className="ui header">Email: </h4> <span className="meta">{this.props.client.contact.email}</span><br />
                    <h4 className="ui header">Contact phone: </h4> <span className="meta">{this.props.client.contact.phone}</span><br />

                    <h4 className="ui header">Street: </h4> <span className="meta">{this.props.client.address.street}</span><br />
                    <h4 className="ui header">City: </h4> <span className="meta">{this.props.client.address.city}</span><br />
                    <h4 className="ui header">Zip Code: </h4> <span className="meta">{this.props.client.address.zipCode}</span><br />
                    <h4 className="ui header">Country: </h4> <span className="meta">{this.props.client.address.country}</span><br />
                </div>
            </div>
        );
    }
}

export default ClientDetails;