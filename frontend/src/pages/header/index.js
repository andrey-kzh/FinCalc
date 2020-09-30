import React from 'react'
import './style.css';
import Menu from '../../components/Menu'
import UserLogoutLink from '../../components/UserLogoutLink'
import SetupLink from '../../components/SetupLink'

export default class Header extends React.Component {

    render() {
        return (
            <header className={"top"}>
                <Menu/>
                <div className={"menu-setup"}>
                    <SetupLink/>
                    <UserLogoutLink/>
                </div>
            </header>

        );
    }

}