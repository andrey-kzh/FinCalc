import React from 'react';
import './style.css';

export default class PlusButton extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    returnClassName() {
        if(this.props.isOpen) {
            return 'minus'
        }
        return 'plus'
    }

    render() {
        return (
            <button onClick={this.props.toggleCallback} className={this.returnClassName()}></button>
        )
    }

}