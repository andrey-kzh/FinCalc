import React from 'react';
import './style.css';
import ChartsItem from '../ChartsItem'

export default class ChartsComponent extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    renderItems() {
        return this.props.charts.map((chartsItem, i) => {
            return <ChartsItem
                key={i}
                title={chartsItem.title}
                sum={chartsItem.sum}
                type={chartsItem.type}/>
        })
    }

    render() {
        return (

            <div className="charts">
                {this.renderItems()}
            </div>
        )
    }

}