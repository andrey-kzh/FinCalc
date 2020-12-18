import React from 'react';
import './style.css';
import Category from '../Category'
import ToggleCategory from "../ToggleCategory";
import {calcDateRange} from "../../utils/calcDateRange";

export default class CategorysComponent extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const dateRange = calcDateRange(this.props.datePeriod)
        this.props.getAllListsWithCategorys(
            {...{userId: this.props.user.id}, ...dateRange}
        );
    }

    render() {
        return (
            [
                <ToggleCategory key={`ct01`}/>,
                <div key={`ct02`} className={`details details_categorys`}>
                    <Category type={`expense`}/>
                    <Category type={`income`}/>
                </div>
            ]
        )
    }

}