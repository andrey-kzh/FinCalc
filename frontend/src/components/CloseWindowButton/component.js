import React from 'react';
import './style.css';

export default class CloseWindowButton extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={`close-window-container`}>
                <button
                    onClick={this.props.closeCallback}
                    className={`close-window`}>
                </button>
            </div>
        )
    }

}