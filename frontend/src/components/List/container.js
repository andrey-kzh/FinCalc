import React from 'react'
import {connect} from 'react-redux'
import ListComponent from './component'


const mapStateToProps = state => {
    return {
        lists: state.lists
    };
};


const mapDispatchToProps = dispatch => {
    return {};
};

export const List = connect(mapStateToProps, mapDispatchToProps)(ListComponent);