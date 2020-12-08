import React from 'react';
import './style.css';
import CategoryItemSetup from "../CategoryItem_Setup";

export default class CategorySetupComponent extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    returnClassName() {
        if (this.props.type !== this.props.toggleCategory) {
            return `details-setup__block_hide`
        }
        return ''
    }


    renderItems() {
        return this.props.categorys.map((categoryItem) => {

            if (categoryItem.type === this.props.type) {
                return <CategoryItemSetup
                    key={categoryItem.id}
                    id={categoryItem.id}
                    title={categoryItem.title}
                    sum={categoryItem.sum}
                    type={categoryItem.type}
                />
            }
        })
    }

    render() {
        return (
            <div className={`details-setup__block ${this.returnClassName()}`}>
                {this.renderItems()}
            </div>
        )
    }


}