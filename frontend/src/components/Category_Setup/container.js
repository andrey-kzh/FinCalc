import React from 'react'
import {connect} from 'react-redux'
import CategorySetupComponent from './component'


const mapStateToProps = state => {
    return {
        categorys: state.categorys,
        toggleCategory: state.toggleCategory
    };
};


const mapDispatchToProps = dispatch => {
    return {};
};

export const CategorySetup = connect(mapStateToProps, mapDispatchToProps)(CategorySetupComponent);