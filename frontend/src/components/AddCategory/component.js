import React from 'react';
import './style.css';

import RadioButton from "../RadioButton";
import SubmitButton from "../SubmitButton";

export default class AddCategoryComponent extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            type: 'expense',
            title: '',
            userId: props.user.id
        }

        this.handleChange = this.handleChange.bind(this)
        this.addCategoryAndResetState = this.addCategoryAndResetState.bind(this)
    }

    handleChange(e, val) {
        this.setState({[val]: e.target.value});
    }

    addCategoryAndResetState(category) {
        if (this.state.title !== '') {
            this.props.addCategory(category)
            this.setState({
                title: '',
            })
        }
    }

    render() {
        return (
            <form className={`setup-form`}
                  onSubmit={(e) => e.preventDefault()}>

                <RadioButton
                    className={'radio-setup-lable'}
                    id={'radio-expense'}
                    name={'category-type'}
                    value={'expense'}
                    defaultChecked={true}
                    callback={(e) => this.handleChange(e, 'type')}>
                    Расход
                </RadioButton>

                <RadioButton
                    className={'radio-setup-lable'}
                    id={'radio-income'}
                    name={'category-type'}
                    value={'income'}
                    callback={(e) => this.handleChange(e, 'type')}>
                    Доход
                </RadioButton>

                <input value={this.state.title}
                       onChange={(e) => this.handleChange(e, 'title')}
                       placeholder="Название"
                       type="text"
                       className={`setup-input-field`}/>


                <SubmitButton
                    className={'button_setup-form'}
                    callback={() => this.addCategoryAndResetState(this.state)}>
                    Добавить
                </SubmitButton>

            </form>
        )
    }
}