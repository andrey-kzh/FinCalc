import React from 'react'
import {connect} from 'react-redux'
import CategoryComponent from './component'


const mapStateToProps = state => {
    return {
        categorys: state.categorys,
        toggleCategory: state.toggleCategory
    };
};


const mapDispatchToProps = dispatch => {
    return {};
};

export const Category = connect(mapStateToProps, mapDispatchToProps)(CategoryComponent);