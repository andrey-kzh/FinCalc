import React from 'react';
import './style.css';

import SubmitButton from "../SubmitButton";

export default class AddFormComponent extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            sum: '',
            comment: ''
        }
    }

    handleChange(e, val) {
        this.setState({[val]: e.target.value});
    }

    render() {

        if (this.props.isOpen === true) {
            return (
                <div className={`add-form`}>

                    <input value={this.state.sum}
                           onChange={(e) => this.handleChange(e, 'sum')}
                           placeholder="Сумма"
                           type="text"
                           className={`add-form__sum`}/>

                    <textarea
                        value={this.state.comment}
                        onChange={(e) => this.handleChange(e, 'comment')}
                        placeholder="Комментарий"
                        className={`add-form__txt`} />

                    <SubmitButton
                        className={'button_add-form'}
                        callback={() => console.log(1)}>
                        Добавить
                    </SubmitButton>

                </div>
            )
        }

        return null
    }

}