import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {search} from '../actions/search';

class SearchInput extends Component {
    render() {
        return (
            <div className="searchInputContainer">
                <input onChange={(event) => this.props.searchCallback(event.target.value)} />
                <img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-128.png" alt="" />
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
    return bindActionCreators({ searchCallback: search}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchInput);