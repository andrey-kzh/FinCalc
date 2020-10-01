import React from 'react';
import './style.css';

export default class RadioButton extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            [
                <input key={'rb01'}
                       className="radio-button"
                       type="radio"
                       id={this.props.id}
                       name={this.props.name}
                       value={this.props.value}
                       onClick={this.props.callback}/>,

                <label key={'rb02'}
                       className={`${this.props.className} radio-button-lable`}
                       htmlFor={this.props.id}>
                    {this.props.children}
                </label>
            ]
        )
    }
}
