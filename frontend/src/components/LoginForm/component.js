import React from 'react';
import './style.css';

import SubmitButton from "../SubmitButton";

export default class LoginFormComponent extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            login: '',
            pass: ''
        }
    }

    handleChange(e, val) {
        this.setState({[val]: e.target.value});
    }

    render() {
        return (
            <form onSubmit={(e) => e.preventDefault()}>

                <input value={this.state.login}
                       onChange={(e) => this.handleChange(e, 'login')}
                       placeholder="Логин"
                       type="text"
                       className={`add-form__sum`}/>

                <input value={this.state.pass}
                       onChange={(e) => this.handleChange(e, 'pass')}
                       placeholder="Пароль"
                       type="password"
                       className={`add-form__sum`}/>

                <SubmitButton
                    className={'button_add-form'}
                    callback={() => this.props.loginRequest({login: this.state.login, pass: this.state.pass})}>
                    Добавить
                </SubmitButton>

            </form>
        );
    }

}
