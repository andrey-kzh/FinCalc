import React from 'react';
import './style.css';

import PlusButton from '../PlusButton'
import AddForm from '../AddForm'
import List from '../List'

export default class CategorysItem extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            isOpenList: false,
            isOpenForm: false
        }
    }

    toggleList() {
        this.setState({isOpenList: !this.state.isOpenList})
    }

    toggleForm() {
        this.setState({isOpenForm: !this.state.isOpenForm})
    }

    render() {
        return (
            <div className={`category`}>
                <div className={`category__header`}>
                    <div onClick={() => this.toggleList()} className={`category-txt`}>
                        <div className={`category-txt__title`}>{this.props.title}</div>
                        <div className={`category-txt__sum`}>{this.props.sum} &#8381;</div>
                    </div>
                    <div className={`add-button`}>
                        <PlusButton
                            isOpen={this.state.isOpenForm}
                            toggleCallback={() => this.toggleForm()}/>
                    </div>
                </div>

                <div className={`category-content`}>
                    <AddForm
                        categoryId={this.props.id}
                        isOpen={this.state.isOpenForm}/>

                    <List
                        categoryId={this.props.id}
                        isOpen={this.state.isOpenList}/>
                </div>

            </div>
        )
    }

}