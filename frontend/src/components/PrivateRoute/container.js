import React from 'react'
import {connect} from 'react-redux'
import PrivateRouteComponent from './component'
import {authRequest} from "../../store/actions";


const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        authRequest: () => dispatch(authRequest())
    };
};

export const PrivateRoute = connect(mapStateToProps, mapDispatchToProps)(PrivateRouteComponent);
