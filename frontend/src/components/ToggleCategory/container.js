import React from 'react'
import {connect} from 'react-redux'
import {toggleCategoryAction} from '../../store/actions'
import ToggleCategoryComponent from './component'


const mapStateToProps = state => {
    return {
        toggleCategory: state.toggleCategory
    };
};


const mapDispatchToProps = dispatch => {
    return {
        toggle: (categoryType) => dispatch(toggleCategoryAction(categoryType))
    };
};

export const ToggleCategory = connect(mapStateToProps, mapDispatchToProps)(ToggleCategoryComponent);