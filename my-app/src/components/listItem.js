import React, { Component } from 'react';
class ListItem extends Component {
    render() {
        return (
            <div onClick={this.props.onClickCallback} className="ui raised segments">
                <div className="ui segment wrapper">
                    <img className="ui avatar tiny image" src={this.props.client.general.avatar} alt="" />
                    <div><h4 className="ui header">{this.props.client.general.firstName + " " + this.props.client.general.lastName}</h4>
                        {this.props.client.job.title}</div>
                </div>
            </div>
        );
    }
}

export default ListItem;