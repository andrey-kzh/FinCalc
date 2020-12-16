import React from 'react'
import './style.css';
import Header from '../header'
import Charts from '../../components/Charts'
import Categorys from '../../components/Categorys'

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <section>
                    <Charts/>
                </section>
                <section>
                    <Categorys/>
                </section>
            </div>
        );
    }

}