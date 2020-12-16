import React from 'react'
import {connect} from 'react-redux'
import AddFormComponent from './component'


const mapStateToProps = state => {
    return {
        menu: state.menu
    };
};


const mapDispatchToProps = dispatch => {
    return {};
};

export const AddForm = connect(mapStateToProps, mapDispatchToProps)(AddFormComponent);