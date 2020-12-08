import React from 'react';
import './style.css';
import Category from '../Category'
import ToggleCategory from "../ToggleCategory";

export default class CategorysComponent extends React.PureComponent {

    constructor(props) {
        super(props)
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