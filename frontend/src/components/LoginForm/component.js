import React from 'react';
import './style.css';

import SubmitButton from "../SubmitButton";

export default class LoginFormComponent extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            login: 'demo',
            pass: 'demo123'
        }
    }

    handleChange(e, val) {
        this.setState({ [val]: e.target.value });
    }

    render() {

        return (
            <div>
                {this.props.user.loginErrorMes &&
                    <div className="login-error-mes">{this.props.user.loginErrorMes}</div>}

                <form onSubmit={(e) => e.preventDefault()}>

                    <input value={this.state.login}
                        onChange={(e) => this.handleChange(e, 'login')}
                        placeholder="Логин"
                        type="text"
                        className={`add-form__sum`} />

                    <input value={this.state.pass}
                        onChange={(e) => this.handleChange(e, 'pass')}
                        placeholder="Пароль"
                        type="password"
                        className={`add-form__sum`} />

                    <div className="login-form-submit-wrap">
                        <SubmitButton
                            className={'button_login-form'}
                            callback={() => this.props.loginRequest({ login: this.state.login, pass: this.state.pass })}>
                            Войти
                        </SubmitButton>
                    </div>

                </form>
            </div>
        );
    }

}
