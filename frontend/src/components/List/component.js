import React from 'react';
import './style.css';
import ListItem from "../ListItem";

export default class ListComponent extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    renderItems() {

        if (this.props.lists[this.props.categoryId] !== undefined) {

            return this.props.lists[this.props.categoryId].map((listItem) => {
                return <ListItem
                    key={listItem.id}
                    title={listItem.title}
                    sum={listItem.sum}
                />
            })

        } else {
            return null
        }
    }

    render() {
        if (this.props.isOpen === true) {
            return (
                <div className={`category-list`}>
                    {this.renderItems()}
                </div>
            )
        }
        return null
    }

}