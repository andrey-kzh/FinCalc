import React from 'react'
import {connect} from 'react-redux'
import UserLogoutLinkComponent from './component'
import {logoutAction} from "../../store/actions";


const mapStateToProps = state => {
    return {
        userName: state.user.name
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logoutAction())
    };
};

export const UserLogoutLink = connect(mapStateToProps, mapDispatchToProps)(UserLogoutLinkComponent);
