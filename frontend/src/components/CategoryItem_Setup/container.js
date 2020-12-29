import React from 'react'
import {connect} from 'react-redux'
import CategoryItemSetupComponent from './component'
import {updCategoryAction, delCategoryAction} from "../../store/actions";

const mapStateToProps = state => {
    return {};
};


const mapDispatchToProps = dispatch => {
    return {
        updCategory: (category) => dispatch(updCategoryAction(category)),
        delCategory: (category) => dispatch(delCategoryAction(category))
    };
};

export const CategoryItemSetup = connect(mapStateToProps, mapDispatchToProps)(CategoryItemSetupComponent);