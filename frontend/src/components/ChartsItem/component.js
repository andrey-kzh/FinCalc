import React from 'react';
import './style.css';

export default class ChartsItem extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {chartStyleName: `width`}
        this.updateChartDimension = this.updateChartDimension.bind(this)
    }

    componentDidMount() {
        this.updateChartDimension()
        window.addEventListener("resize", this.updateChartDimension);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateChartDimension)
    }

    updateChartDimension() {
        if (window.innerWidth <= 480) {
            this.setState({chartStyleName: `height`})
        } else {
            this.setState({chartStyleName: `width`})
        }
    }

    render() {
        return (
            <div className={`chart`}>
                <div style={{[this.state.chartStyleName]: `${this.props.persent}%`}}
                     className={`chart-line chart-line_${this.props.type}`}>
                </div>
                <div className={`chart-txt`}>
                    <div className={`chart-txt_title`}>{this.props.title}</div>
                    <div className={`chart-txt_val`}>{this.props.sum} &#8381;</div>
                </div>
            </div>
        )
    }

}