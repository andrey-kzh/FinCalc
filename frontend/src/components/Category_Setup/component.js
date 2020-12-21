import React from 'react';
import './style.css';
import CategoryItemSetup from "../CategoryItem_Setup";

export default class CategorySetupComponent extends React.Component {

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
        return this.props.categorysIdArr.map((categoryId) => {
            const category = this.props.categorys[categoryId]
            if (category.type === this.props.type) {
                return <CategoryItemSetup
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    type={category.type}
                    visible={category.visible}
                />
            }
        })
    }

    render() {
        if ('categorys' in this.props) {
            return (
                <div className={`details-setup__block ${this.returnClassName()}`}>
                    {this.renderItems()}
                </div>
            )
        }
        return []
    }


}