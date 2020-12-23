import React from 'react'
import {connect} from 'react-redux'
import ListComponent from './component'


const mapStateToProps = state => {
    return {
        list: state.data.entities.list,
    };
};


const mapDispatchToProps = dispatch => {
    return {};
};

export const List = connect(mapStateToProps, mapDispatchToProps)(ListComponent);