import React from 'react'
import {connect} from 'react-redux'
import ChartsComponent from './component'


const mapStateToProps = state => {
    if (state.charts === null) return {}
    return {
        charts: state.charts

    };
};


export const Charts = connect(mapStateToProps)(ChartsComponent);