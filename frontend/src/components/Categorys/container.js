import React from 'react'
import {connect} from 'react-redux'
import CategorysComponent from './component'

const mapStateToProps = state => {
    return {};
};


const mapDispatchToProps = dispatch => {
    return {};
};

export const Categorys = connect(mapStateToProps, mapDispatchToProps)(CategorysComponent);