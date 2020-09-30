import React from 'react';
import './style.css';
import SubmitButton from '../SubmitButton'

export default class ToggleCategoryComponent extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    returnClassName(type) {
        if (type === this.props.toggleCategory) {
            return 'button_active'
        }
        return ''
    }

    render() {

        console.log(this.props.toggleCategory)

        return (
            <ul className={`menu__detals menu__detals_search`}>
                <li>
                    <SubmitButton
                        callback={() => this.props.toggle('expense')}
                        className={`button_detals ${this.returnClassName('expense')}`}>
                        Расходы
                    </SubmitButton>
                </li>
                <li>
                    <SubmitButton
                        callback={() => this.props.toggle('income')}
                        className={`button_detals ${this.returnClassName('income')}`}>
                        Доходы
                    </SubmitButton>
                </li>
            </ul>
        )
    }

}