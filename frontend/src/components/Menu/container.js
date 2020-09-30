import React from 'react'
import {connect} from 'react-redux'
import {getPosts} from '../../store/actions'
import MenuComponent from './component'


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

export const Menu = connect(mapStateToProps, mapDispatchToProps)(MenuComponent);