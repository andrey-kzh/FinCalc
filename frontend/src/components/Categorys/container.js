import React from 'react'
import {connect} from 'react-redux'
import {getPosts} from '../../store/actions'
import CategorysComponent from './component'


const mapStateToProps = state => {
    return {
        categorys: state.categorys,
        toggleCategory: state.toggleCategory
    };
};


const mapDispatchToProps = dispatch => {
    return {
        getPosts: (id) => dispatch(getPosts(id))
    };
};

export const Categorys = connect(mapStateToProps, mapDispatchToProps)(CategorysComponent);