import React from 'react'
import {connect} from 'react-redux'
import {addCategoryAction} from '../../store/actions'
import AddCategoryComponent from './component'


const mapStateToProps = state => {
    return {
        user: state.user
    };
};


const mapDispatchToProps = dispatch => {
    return {
        addCategory: (category) => dispatch(addCategoryAction(category))
    };
};

export const AddCategory = connect(mapStateToProps, mapDispatchToProps)(AddCategoryComponent);