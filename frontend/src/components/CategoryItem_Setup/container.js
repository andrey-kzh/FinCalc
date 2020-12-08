import React from 'react'
import {connect} from 'react-redux'
import CategoryItemSetupComponent from './component'
import {hideCategory} from "../../store/actions";

const mapStateToProps = state => {
    return {};
};


const mapDispatchToProps = dispatch => {
    return {
        hideCategory: (id) => dispatch(hideCategory(id))
    };
};

export const CategoryItemSetup = connect(mapStateToProps, mapDispatchToProps)(CategoryItemSetupComponent);