import React from "react";
import ReactDOM from "react-dom";

import Home from "./views/Home";
import About from "./views/About";

import { Router, Route, Link, browserHistory } from "react-router";

const AppMounter = document.getElementById("app");

class App extends React.Component {
    render() {
        return (
            <div>
            <h1>App</h1>
                <Link to="/home">Home</Link> <br/>
                <Link to="/about">About</Link>
            </div>
        );
    }
}

ReactDOM.render((
    <Router history = { browserHistory }>
        <Route path="/" component={App} />
        <Route path="home" component={Home} />
        <Route path="about" component={About} />
        <Route path="*" component={App}/>
    </Router>
), AppMounter
);