import React from 'react'
import {connect} from 'react-redux'
import CategoryComponent from './component'


const mapStateToProps = state => {
    if (state.data === null) return {}
    return {
        categorys: state.data.entities.categorys,
        categorysIdArr: state.data.result.categorys,
        toggleCategory: state.toggleCategory
    };
};


const mapDispatchToProps = dispatch => {
    return {};
};

export const Category = connect(mapStateToProps, mapDispatchToProps)(CategoryComponent);