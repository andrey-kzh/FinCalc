import React from 'react';
import './style.css';

export default class ListItem extends React.PureComponent {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className={`category-item`}>
                <div className={`category-item__txt`}>
                    <div className={`category-item__date`}>20-01-2020</div>
                    <div className={`category-item__descr`}>{this.props.title}</div>
                </div>
                <div className={`category-item__sum`}>
                    {this.props.sum} &#8381;
                </div>
            </div>
        )
    }

}