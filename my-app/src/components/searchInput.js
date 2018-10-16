import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { search } from '../actions/search';

class SearchInput extends Component {
    render() {
        return (
            <div className="ui raised segment">
                <div className="ui icon input">
                    <input onChange={(event) => this.props.searchCallback(event.target.value)} type="text" placeholder="Search..." />
                    <i className="search icon"></i>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchString: state.searchString
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ searchCallback: search }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchInput);