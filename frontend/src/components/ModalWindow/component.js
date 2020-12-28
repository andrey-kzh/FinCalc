import React from 'react';
import './style.css';

export default class ModalWindowComponent extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className={"modal-window-container"}>
                <div className={"modal-window"}>
                    {this.props.children}
                </div>
            </div>

        )
    }

}