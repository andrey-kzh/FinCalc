import React from 'react';
import './style.css';
import CategoryItem from '../CategoryItem'

export default class CategoryComponent extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    returnClassName() {
        if(this.props.type !== this.props.toggleCategory) {
           return 'details__block_hide'
        }
        return ''
    }

    renderItems() {
        return this.props.categorys.map((categoryItem) => {

            if (categoryItem.type === this.props.type) {
                return <CategoryItem
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
            <div className={`details__block ${this.returnClassName()}`}>
                {this.renderItems()}
            </div>
        )
    }

}