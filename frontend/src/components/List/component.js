import React from 'react';
import './style.css';
import ListItem from "../ListItem";

export default class ListComponent extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    renderItems() {

        if (this.props.listIdArr.length > 0) {

            return this.props.listIdArr.map((listItemId) => {
                const listItem = this.props.list[listItemId]
                return <ListItem
                    id={listItem.id}
                    date={listItem.date}
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