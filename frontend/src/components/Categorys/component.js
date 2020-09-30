import React from 'react';
import './style.css';
import CategorysItem from '../CategorysItem'

export default class CategorysComponent extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    returnClassName() {
        if(this.props.type !== this.props.toggleCategory) {
           return 'detals__block_hide'
        }
        return ''
    }

    renderItems() {
        return this.props.categorys.map((categoryItem) => {

            if (categoryItem.type === this.props.type) {
                return <CategorysItem
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
            <div className={`detals__block ${this.returnClassName()}`}>
                {this.renderItems()}
            </div>
        )
    }

}