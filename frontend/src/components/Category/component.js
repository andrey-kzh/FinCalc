import React from 'react';
import './style.css';
import CategoryItem from '../CategoryItem'

export default class CategoryComponent extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    returnClassName() {
        if (this.props.type !== this.props.toggleCategory) {
            return 'details__block_hide'
        }
        return ''
    }


    renderItems() {
        return this.props.categorysIdArr.map((categoryId) => {
            const category = this.props.categorys[categoryId]
            if (category.type === this.props.type) {
                return <CategoryItem
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    type={category.type}
                    sum={category.totalSum}
                    listIdArr={category.list}
                />
            }
        })
    }


    render() {
        if ('categorys' in this.props) {
            return (
                <div className={`details__block ${this.returnClassName()}`}>
                    {this.renderItems()}
                </div>
            )
        }
        return []
    }

}