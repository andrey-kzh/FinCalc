import React from 'react'
import {connect} from 'react-redux'
import ListItemComponent from './component'
import {delListItemAction, updListItemAction} from "../../store/actions";

const mapStateToProps = state => {
    return {};
};


const mapDispatchToProps = dispatch => {
    return {
        updListItem: (listItem) => dispatch(updListItemAction(listItem)),
        delListItem: (listItem) => dispatch(delListItemAction(listItem))
    };
};

export const ListItem = connect(mapStateToProps, mapDispatchToProps)(ListItemComponent);