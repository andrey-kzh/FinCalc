import React from 'react';
import './style.css';
import ModalWindow from "../ModalWindow";
import CloseWindowButton from "../CloseWindowButton";
import SubmitButton from "../SubmitButton";
import ConfirmDeleteWindow from "../ConfirmDeleteWindow";

export default class ListItemComponent extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            isOpenEditWindow: false,
            isOpenConfirmDelete: false,
            title: this.props.title,
            sum: this.props.sum
        }

        this.openEditWindow = this.openEditWindow.bind(this)
        this.closeWindows = this.closeWindows.bind(this)
        this.openConfirmDeleteWindow = this.openConfirmDeleteWindow.bind(this)
        this.saveListItem = this.saveListItem.bind(this)
        this.deleteListItem = this.deleteListItem.bind(this)
    }

    handleChange(e, val) {
        const fieldValue = (val === `sum`) ? e.target.value.replace(/\D/, '') : e.target.value
        this.setState({[val]: fieldValue});
    }

    openEditWindow() {
        this.setState({
            isOpenEditWindow: true,
            isOpenConfirmDelete: false,
        })
    }

    openConfirmDeleteWindow() {
        this.setState({
            isOpenEditWindow: false,
            isOpenConfirmDelete: true,
        })
    }

    closeWindows() {
        this.setState({
            isOpenEditWindow: false,
            isOpenConfirmDelete: false,
        })
    }

    saveListItem() {
        this.props.updListItem({
            id: this.props.id,
            title: this.state.title,
            sum: this.state.sum
        })
        this.closeWindows()
    }

    deleteListItem() {
        this.props.delListItem({id: this.props.id})
        this.closeWindows()
    }

    render() {
        return [
            <div onClick={() => this.openEditWindow()} key={this.props.id} className={`category-item`}>
                <div className={`category-item__txt`}>
                    <div className={`category-item__date`}>20-01-2020</div>
                    <div className={`category-item__descr`}>{this.props.title}</div>
                </div>
                <div className={`category-item__sum`}>
                    {this.props.sum} &#8381;
                </div>
            </div>,

            this.state.isOpenEditWindow &&

            <ModalWindow
                key={`ew${this.props.id}`}>
                <div>
                    <CloseWindowButton
                        closeCallback={this.closeWindows}/>

                    <input value={this.state.sum}
                           onChange={(e) => this.handleChange(e, 'sum')}
                           placeholder="Сумма"
                           type="text"
                           className={`add-form__sum`}/>

                    <textarea
                        value={this.state.title}
                        onChange={(e) => this.handleChange(e, 'title')}
                        placeholder="Комментарий"
                        className={`add-form__txt`}/>

                    <div className={`modal-window__buttons`}>
                        <SubmitButton
                            callback={() => this.saveListItem()}
                            className={`button_modal-window`}>
                            Сохранить
                        </SubmitButton>

                        <SubmitButton
                            callback={() => this.openConfirmDeleteWindow()}
                            className={`button_modal-window`}>
                            Удалить
                        </SubmitButton>
                    </div>

                </div>
            </ModalWindow>,

            this.state.isOpenConfirmDelete &&

            <ConfirmDeleteWindow
                key={`dw${this.props.id}`}
                cancelCallback={() => this.closeWindows()}
                deleteCallback={() => this.deleteListItem()}
                title={this.props.title}
            />
        ]
    }

}