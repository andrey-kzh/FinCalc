import React from 'react';
import './style.css';

export default class MenuItem extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li>
                <a href={`/${this.props.link}`} className={`button button_period`}>{this.props.title}</a>
            </li>
        )
    }

}