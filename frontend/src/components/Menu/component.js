import React from 'react';
import './style.css';
import MenuItem from '../MenuItem'

export default class MenuComponent extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    renderItems() {
        return this.props.menu.map((menuItem, i) => {
            return <MenuItem
                key={i}
                title={menuItem.title}
                link={menuItem.link} />
        })
    }

    render() {
        return (

            <nav>
                <ul className="menu">
                    {this.renderItems()}
                </ul>
            </nav>
        )
    }

}