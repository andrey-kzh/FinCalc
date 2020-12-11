import React from 'react'
import {connect} from 'react-redux'
import {loginRequestAction} from '../../store/actions'
import LoginFormComponent from './component'


const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginRequest: (data) => dispatch(loginRequestAction(data))
    };
};

export const LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginFormComponent);
