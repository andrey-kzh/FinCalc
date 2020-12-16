import React from 'react';
import './style.css';
import SubmitButton from "../SubmitButton";

export default class CategoryItemSetupComponent extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    toggleVisibleAndUpdate() {
        const category = {
            id: this.props.id,
            visible: !this.props.visible
        }
        this.props.updCategory(category)
    }

    render() {
        return (
            <div className="category__setup">
                <div className={`category-setup__item ${!this.props.visible && `category-setup__item_hidden`}`}>
                    <div className="category-setup__title">
                        {this.props.title}
                    </div>
                </div>

                <SubmitButton
                    callback={() => this.toggleVisibleAndUpdate()}
                    className={`button button_hide`}>
                    {this.props.visible ? `Скрыть` : `Показать`}
                </SubmitButton>
            </div>
        )
    }

}