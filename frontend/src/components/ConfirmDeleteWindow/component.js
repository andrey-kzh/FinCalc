import React from 'react';
import './style.css';
import ModalWindow from "../ModalWindow";
import CloseWindowButton from "../CloseWindowButton";
import SubmitButton from "../SubmitButton";

export default class ConfirmDeleteWindow extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ModalWindow>
                <div>
                    <CloseWindowButton
                        closeCallback={this.props.cancelCallback}/>

                    <div className={`delete-window-text`}>
                        Удалить {this.props.title}?
                    </div>

                    <div className={`modal-window__buttons`}>
                        <SubmitButton
                            callback={this.props.deleteCallback}
                            className={`button_modal-window`}>
                            Удалить
                        </SubmitButton>

                        <SubmitButton
                            callback={this.props.cancelCallback}
                            className={`button_modal-window`}>
                            Отмена
                        </SubmitButton>
                    </div>
                </div>
            </ModalWindow>
        )
    }
}