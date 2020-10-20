import React from 'react'
import {connect} from 'react-redux'
import {addCategory} from '../../store/actions'
import AddCategoryComponent from './component'


const mapStateToProps = state => {
    return {
        user: state.user
    };
};


const mapDispatchToProps = dispatch => {
    return {
        addCategory: (category) => dispatch(addCategory(category))
    };
};

export const AddCategory = connect(mapStateToProps, mapDispatchToProps)(AddCategoryComponent);