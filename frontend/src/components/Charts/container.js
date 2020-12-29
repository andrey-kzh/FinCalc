import React from 'react'
import {connect} from 'react-redux'
import ChartsComponent from './component'
import {calcCharts} from '../../utils/calcCharts'


const mapStateToProps = state => {
    if (state.data === null) return {}
    return {
        charts: calcCharts(state.data)
    };
};


export const Charts = connect(mapStateToProps)(ChartsComponent);