import React from 'react';

import {
    Route,
    Redirect
} from "react-router-dom";

export default class PrivateRouteComponent extends React.PureComponent {

    constructor(props) {
        super(props)
        this.children = props.children
        this.urlParams = props.computedMatch.params
        this.location = props.location
    }

    componentDidMount() {
        if (this.props.user.isLogin !== true && this.props.user.isLogin !== false) {
            this.props.authRequest() //авторизация
        }
    }

    render() {
        if (this.props.user.isLogin !== true && this.props.user.isLogin !== false) {
            return [] //заглушка
        }
        return (
            <Route
                render={() =>
                    (this.props.user.isLogin) //подтверждение авторизации
                        ? (React.cloneElement(this.children, {urlParams: this.urlParams}))
                        : (<Redirect
                            to={{
                                pathname: "/login",
                                state: {from: this.location}
                            }}
                        />)
                }
            />
        );
    }
}
