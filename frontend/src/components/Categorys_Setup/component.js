import React from 'react';
import './style.css';
import CategorySetup from '../Category_Setup'
import ToggleCategory from "../ToggleCategory";

export default class CategorysComponent extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getAllCategorys(this.props.user.id);
    }

    render() {
        return (
            [
                <ToggleCategory key={`ct01`}/>,
                <div key={`ct02`} className={`details-setup details-setup_categorys`}>
                    <CategorySetup type={`expense`}/>
                    <CategorySetup type={`income`}/>
                </div>
            ]
        )
    }

}