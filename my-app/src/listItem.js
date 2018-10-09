import React, { Component } from 'react';
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

export default ListItem;