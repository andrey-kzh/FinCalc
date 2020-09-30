import React from 'react';
import './style.css';

export default class ChartsItem extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={`chart`}>
                <div className={`chart-line chart-line_${this.props.type}`}></div>
                <div className={`chart-txt`}>
                    <div className={`chart-txt_title`}>{this.props.title}</div>
                    <div className={`chart-txt_val`}>{this.props.sum} &#8381;</div>
                </div>
            </div>
        )
    }

}