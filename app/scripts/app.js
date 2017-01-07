import React from "react";
import ReactDOM from "react-dom";

import Home from "./views/Home";
import Login from "./views/Login";
import About from "./views/About";

import { Router, Route, Link, browserHistory } from "react-router";

import h from "./helpers/helper";

import "../styles/app.scss"

const AppMounter = document.getElementById("app");

class App extends React.Component {
    render() {
        return (
            <div className="mainApp">
                {/*<nav>
                    <ul>
                        <li><Link className="link" to="/login">Login</Link></li>
                        <li><Link className="link" to="/about">About</Link></li>
                        <li><Link className="link" to="/rooms">Rooms</Link></li>
                    </ul>
                </nav>*/}
                <Main tagline="A curated list of resources"/>
                <ReadingList/>
                <Contribution/>
            </div>
        );
    }
}

class Main extends React.Component {
    render () {
        return (
            <div className="main">
                <h2>Main</h2>
                <h4>{this.props.tagline}</h4>
            </div>
        )
    }
}

class ReadingList extends React.Component {
    render () {
        return (
            <div className="readingList">
                <h2>ReadingList</h2>
            </div>
        )
    }
}

class Contribution extends React.Component {
    render () {
        return (
            <div className="contribution">
                <h2>Contribution</h2>
            </div>
        )
    }
}

class NotFound extends React.Component {
    render () {
        return (
            <h2>Error 404!</h2>
        )
    }
}

const routes = <Router history = { browserHistory }>
                    <Route path="/" component={Home} />
                    <Route path="/:storeId" component={App} />
                    <Route path="about" component={About} />
                    <Route path="*" component={NotFound}/>
               </Router>;

ReactDOM.render(routes, AppMounter);