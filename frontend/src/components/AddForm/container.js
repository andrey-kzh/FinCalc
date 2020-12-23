import React from 'react'
import {connect} from 'react-redux'
import AddFormComponent from './component'
import {addListItemAction} from "../../store/actions";


const mapStateToProps = state => {
    return {};
};


const mapDispatchToProps = dispatch => {
    return {
        addListItem: (listItem) => dispatch(addListItemAction(listItem))
    };
};

export const AddForm = connect(mapStateToProps, mapDispatchToProps)(AddFormComponent);