import React from 'react'
import {connect} from 'react-redux'
import MenuComponent from './component'


const mapStateToProps = state => {
    return {
        menu: state.menu
    };
};


const mapDispatchToProps = dispatch => {
    return {};
};

export const Menu = connect(mapStateToProps, mapDispatchToProps)(MenuComponent);