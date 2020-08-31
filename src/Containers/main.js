import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../Components/navbar';
import Home from '../Components/home';
import Projects from '../Components/projects';
import About from '../Components/about';

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
                    <Route path="/" component={Home}></Route>
                    <Route path="/projects" component={Projects}></Route>
                    <Route path="/about" component={About}></Route>
                </Switch>
            </>
            </Router>
        )
    }
}

export default MainPage;