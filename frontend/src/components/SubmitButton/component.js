import React from 'react';
import './style.css';

export default class SubmitButton extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button
                className={`button ${this.props.className}`}
                onClick={this.props.callback}>
                {this.props.children}
            </button>
        )
    }

}