import React from 'react'
import {connect} from 'react-redux'
import CategorySetupComponent from './component'


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

export const CategorySetup = connect(mapStateToProps, mapDispatchToProps)(CategorySetupComponent);