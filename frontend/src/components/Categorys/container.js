import React from 'react'
import {connect} from 'react-redux'
import CategorysComponent from './component'
import {getAllListsWithCategorysAction} from '../../store/actions'

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};


const mapDispatchToProps = dispatch => {
    return {
        getAllListsWithCategorys: (userIdAndDateRange) => dispatch(getAllListsWithCategorysAction(userIdAndDateRange))
    };
};

export const Categorys = connect(mapStateToProps, mapDispatchToProps)(CategorysComponent);