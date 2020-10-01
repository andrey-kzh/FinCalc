import React from 'react';
import './style.css';

import RadioButton from "../RadioButton";
import SubmitButton from "../SubmitButton";

export default class AddCategoryComponent extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            categoryType: '',
            title: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e, val) {
        this.setState({[val]: e.target.value});
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
                    callback={(e) => this.handleChange(e, 'categoryType')}>
                    Расход
                </RadioButton>

                <RadioButton
                    className={'radio-setup-lable'}
                    id={'radio-income'}
                    name={'category-type'}
                    value={'income'}
                    callback={(e) => this.handleChange(e, 'categoryType')}>
                    Доход
                </RadioButton>

                <input value={this.state.title}
                       onChange={(e) => this.handleChange(e, 'title')}
                       placeholder="Название"
                       type="text"
                       className={`setup-input-field`}/>


                <SubmitButton
                    className={'button_setup-form'}
                    callback={() => console.log(1)}>
                    Добавить
                </SubmitButton>

            </form>
        )

    }

}