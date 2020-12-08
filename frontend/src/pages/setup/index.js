import React from 'react'
import './style.css';
import Header from '../header'
import AddCategory from "../../components/AddCategory";
import CategorysSetup from "../../components/Categorys_Setup";

export default class Setup extends React.Component {

    render() {
        return (
            [
                <Header key={'ac01'}/>,
                <AddCategory key={'ac02'}/>,
                <CategorysSetup key={'ac03'}/>
            ]
        );
    }

}