import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {store} from './store';
import Home from './pages/home';
import Setup from './pages/setup';
import Login from './pages/login';
import Page404 from './pages/404';
import PrivateRoute from './components/PrivateRoute'

import './styles.css';


class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <div className="max-width">
                    <Router>
                        <Switch>
                            <PrivateRoute exact path="/">
                                <Home/>
                            </PrivateRoute>
                            <PrivateRoute exact path="/setup">
                                <Setup/>
                            </PrivateRoute>
                            <Route path="/login/" component={Login}/>
                            <PrivateRoute exact path="/:period">
                                <Home/>
                            </PrivateRoute>
                            <Route path="*" component={Page404}/>
                        </Switch>
                    </Router>
                </div>
            </Provider>

        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
