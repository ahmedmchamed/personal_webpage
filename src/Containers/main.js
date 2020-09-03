import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Banner from '../components/banner';
import NavBar from '../components/navbar';
import Home from '../components/home';
import Projects from '../components/projects';
import About from '../components/about';

class MainPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
            <>
                <Banner />
                <NavBar />
                {/* <Switch> */}
                    <Route path="/" component={Home}></Route>
                    <Route path="/projects" component={Projects}></Route>
                    <Route path="/about" component={About}></Route>
                {/* </Switch> */}
            </>
            </Router>
        )
    }
}

export default MainPage;