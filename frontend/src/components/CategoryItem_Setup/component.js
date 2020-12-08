import React from 'react';
import './style.css';
import SubmitButton from "../SubmitButton";

export default class CategoryItemSetupComponent extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="category__setup">
                <div className="category-setup__item">
                    <div className="category-setup__title">
                        {this.props.title}
                    </div>
                </div>

                <SubmitButton
                    callback={() => this.props.hideCategory(this.props.id)}
                    className={`button button_hide`}>
                    Скрыть
                </SubmitButton>
            </div>
        )
    }

}