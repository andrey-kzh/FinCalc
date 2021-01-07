import React from 'react';
import './style.css';

import SubmitButton from "../SubmitButton";

export default class AddFormComponent extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            sum: '',
            title: ''
        }
    }

    handleChange(e, val) {
        const fieldValue = (val === `sum`) ? e.target.value.replace(/\D/, '') : e.target.value
        this.setState({[val]: fieldValue});
    }


    checkAndAddListItem() {
        if (this.state.sum && this.state.title) {
            this.props.addListItem({
                ...{categoryId: this.props.categoryId},
                ...this.state
            })
            this.setState({
                sum: '',
                title: ''
            })
            this.props.toggleCallback()
        }
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
                        onChange={(e) => this.handleChange(e, 'title')}
                        placeholder="Комментарий"
                        className={`add-form__txt`}/>

                    <SubmitButton
                        className={'button_add-form'}
                        callback={() => this.checkAndAddListItem()}>
                        Добавить
                    </SubmitButton>

                </div>
            )
        }

        return null
    }

}