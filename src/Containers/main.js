import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../Components/navbar';

class MainPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
            <>
                <NavBar />
                <Switch>
                    <Route path="/"></Route>
                    <Route path="/projects"></Route>
                    <Route path="/about"></Route>
                </Switch>
            </>
            </Router>
        )
    }
}

export default MainPage;