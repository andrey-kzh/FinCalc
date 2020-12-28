import React from 'react';
import './style.css';
import SubmitButton from "../SubmitButton";
import ModalWindow from "../ModalWindow";
import CloseWindowButton from "../CloseWindowButton";
import ConfirmDeleteWindow from "../ConfirmDeleteWindow";

export default class CategoryItemSetupComponent extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            isOpenEditWindow: false,
            isOpenConfirmDelete: false,
            title: this.props.title,
        }

        this.openEditWindow = this.openEditWindow.bind(this)
        this.closeWindows = this.closeWindows.bind(this)
        this.openConfirmDeleteWindow = this.openConfirmDeleteWindow.bind(this)
        this.saveCategoryItem = this.saveCategoryItem.bind(this)
        this.deleteCategoryItem = this.deleteCategoryItem.bind(this)
        this.toggleVisibleAndUpdate = this.toggleVisibleAndUpdate.bind(this)
    }

    toggleVisibleAndUpdate() {
        const category = {
            id: this.props.id,
            visible: !this.props.visible
        }
        this.props.updCategory(category)
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

    saveCategoryItem() {
        console.log('1')
        this.closeWindows()
    }

    deleteCategoryItem() {
        console.log('2')
        this.closeWindows()
    }


    render() {
        return [
            <div className="category__setup">
                <div onClick={() => this.openEditWindow()}
                     className={`category-setup__item ${!this.props.visible && `category-setup__item_hidden`}`}>
                    <div className="category-setup__title">
                        {this.props.title}
                    </div>
                </div>

                <SubmitButton
                    callback={() => this.toggleVisibleAndUpdate()}
                    className={`button button_hide`}>
                    {this.props.visible ? `Скрыть` : `Показать`}
                </SubmitButton>
            </div>,

            this.state.isOpenEditWindow &&

            <ModalWindow
                key={`ew${this.props.id}`}>
                <div>
                    <CloseWindowButton
                        closeCallback={this.closeWindows}/>

                    <textarea
                        value={this.state.title}
                        onChange={(e) => this.handleChange(e, 'title')}
                        placeholder="Комментарий"
                        className={`add-form__txt`}/>

                    <div className={`modal-window__buttons`}>
                        <SubmitButton
                            callback={() => this.saveCategoryItem()}
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
                deleteCallback={() => this.deleteCategoryItem()}
                title={this.props.title}
            />
        ]
    }

}