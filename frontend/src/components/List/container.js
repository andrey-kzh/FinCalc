import React from 'react'
import {connect} from 'react-redux'
import {getPosts} from '../../store/actions'
import ListComponent from './component'


const mapStateToProps = state => {
    return {
        lists: state.lists
    };
};


const mapDispatchToProps = dispatch => {
    return {
        getPosts: (id) => dispatch(getPosts(id))
    };
};

export const List = connect(mapStateToProps, mapDispatchToProps)(ListComponent);