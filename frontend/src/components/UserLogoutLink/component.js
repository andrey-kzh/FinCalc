import React from 'react';
import './style.css';

export default class UserLogoutLinkComponent extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={`user`}>
                <div className={`user-name`}>{this.props.userName}</div>
                <button onClick={this.props.logout} className={`user-logout`}>Выход</button>
            </div>
        )
    }

}
