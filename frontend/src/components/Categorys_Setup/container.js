import React from 'react'
import {connect} from 'react-redux'
import CategorysSetupComponent from './component'
import {getAllCategorysAction} from '../../store/actions'

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};


const mapDispatchToProps = dispatch => {
    return {
        getAllCategorys: (userId) => dispatch(getAllCategorysAction(userId))
    };
};

export const CategorysSetup = connect(mapStateToProps, mapDispatchToProps)(CategorysSetupComponent);