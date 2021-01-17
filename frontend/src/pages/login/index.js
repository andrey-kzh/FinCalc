import React from 'react'
import {connect} from 'react-redux'
import './style.css';
import LoginForm from '../../components/LoginForm'

import {
    Route,
    Redirect
} from "react-router-dom";


class LoginPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login-form-wrap">
            <LoginForm/>
            </div>
        );
    }
}


class RedirectRoute extends React.PureComponent {

    constructor(props) {
        super(props)
        this.location = props.location
        this.from = "/"
        if (props.location.state !== undefined) this.from = props.location.state.from.pathname
    }

    render() {
        return (
            <Route
                render={() =>
                    //(!this.props.user.isLogin)
                    (true)
                        ? (<LoginPage/>)
                        : (<Redirect
                            to={{
                                pathname: this.from,
                                //state: {from: this.location}
                            }}
                        />)
                }
            />
        );
    }
}

const Login = connect(state => {
    return {user: state.user}
})(RedirectRoute)
export default Login