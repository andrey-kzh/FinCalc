import React from 'react'
import './style.css';
import Header from '../header'
import Charts from '../../components/Charts'
import Categorys from '../../components/Categorys'
import ToggleCategory from '../../components/ToggleCategory'

export default class Home extends React.Component {

    render() {
        return (
            <div>
                {console.log(this.props.urlParams)}
                <Header/>
                <section>
                    <Charts/>
                </section>
                <section>
                    <ToggleCategory/>
                    <div className={`details details_categorys`}>
                            <Categorys type={`expense`}/>
                            <Categorys type={`income`}/>
                    </div>
                </section>
            </div>
        );
    }

}