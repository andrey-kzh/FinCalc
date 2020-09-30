import React from 'react'
import {connect} from 'react-redux'
import {loginRequest} from '../../store/actions'
import LoginFormComponent from './component'


const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginRequest: (data) => dispatch(loginRequest(data))
    };
};

export const LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginFormComponent);
