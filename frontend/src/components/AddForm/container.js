import React from 'react'
import {connect} from 'react-redux'
import {getPosts} from '../../store/actions'
import AddFormComponent from './component'


const mapStateToProps = state => {
    return {
        menu: state.menu
    };
};


const mapDispatchToProps = dispatch => {
    return {
        getPosts: (menu) => dispatch(getPosts(menu))
    };
};

export const AddForm = connect(mapStateToProps, mapDispatchToProps)(AddFormComponent);