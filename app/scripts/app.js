import React from "react";
import ReactDOM from "react-dom";

import Home from "./views/Home";
import Header from "./views/Header";


import { Router, Route, Link, browserHistory } from "react-router";

import sample from "./helpers/sample";

import "../styles/app.scss";
import logo from "../../public/media/logo.svg";

const AppMounter = document.getElementById("app");

//Firebase
import base from "./helpers/keys";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            feeds : {},
            readings : {}
        }
    }

    componentDidMount() {
       base.syncState(this.props.params.storeId + '/feeds', {
           context : this,
           state : 'feeds'
       })
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('reading-'+ this.props.params.storeId, JSON.stringify(nextState.readings));
        //console.log(nextState.readings);
    }

    addFeed(feed) {
        let timeStamp = (new Date()).getTime();
        this.state.feeds["feed-" + timeStamp] = feed;

        this.setState({feeds : this.state.feeds});
    }

    loadSampleFeeds(event) {
        this.setState({feeds : sample});
        //console.log(sample);
    }

    renderFeedList() {
        return Object.keys(this.state.feeds).map(this.renderOneFeed.bind(this));
    }

    renderOneFeed(key) {
        return <Feed key={key} index={key} details={this.state.feeds[key]} addToRead={this.addToReadList.bind(this)}/>;
    }

    addToReadList(key) {
        //console.log(key);
        //let timeStamp = (new Date()).getTime();
        //this.state.readings["read-" + timeStamp] = read;
        if(this.state.readings[key]===1) return;

        this.state.readings[key] = 1;
        this.setState(this.state.readings);
    }

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
                <Header/>
                <Main tagline="A curated list of resources" renderFeed={this.renderFeedList.bind(this)}/>
                <ReadingList feeds={this.state.feeds} readings={this.state.readings}/>
                <Contribution addFeed={this.addFeed.bind(this)} loadFeed={this.loadSampleFeeds.bind(this)}/>
            </div>
        );
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="main">
                <h2>Main</h2>
                <h4>{this.props.tagline}</h4>
                <ul>{this.props.renderFeed()}</ul>
            </div>
        )
    }
}

class ReadingList extends React.Component {
    constructor(props) {
        super(props);
        this.renderReadItem = this.renderReadItem.bind(this);
    }

    renderReadItem(key){
        var item = this.props.feeds[key];
        console.log(item);
        return (
            <div key={key}>
            <li>{item["name"]}</li>
            <button>X</button>
            </div>
        )
    }

    render () {
        var readItemIds = Object.keys(this.props.readings);

        return (
            <div className="readingList">
                <h2>ReadingList</h2>
                <ul>
                    {readItemIds.map(this.renderReadItem)}
                </ul>
            </div>
        )
    }
}

class Contribution extends React.Component {
    render () {
        return (
            <div className="contribution">
                <h2>Contribution</h2>
                <ContributionForm {...this.props}/>
                <button onClick={this.props.loadFeed}>Add sample feeds</button>
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

class ContributionForm extends React.Component {
    makeContribution(event) {
        event.preventDefault();
        console.log("submitting");

        var contribution = {
            name: this.refs.name.value,
            link: this.refs.link.value,
            img: this.refs.img.value,
            desc: this.refs.desc.value
        }

        this.props.addFeed(contribution);

        this.refs.contributionForm.reset();
    }


    render () {
        return (
            <form ref="contributionForm" onSubmit={this.makeContribution.bind(this)}>
                <input type="text" ref="name" placeholder="Name" required/>
                <input type="text" ref="link" placeholder="Link" required/>
                <input type="text" ref="img" accept="image/*" placeholder="Link icon"/>
                <textarea type="text" ref="desc" defaultValue={"No Description"} placeholder="Description"></textarea>
                <input type="submit" />
            </form>
        )
    }
}

class Feed extends React.Component {

    addToReadings(event){
        this.props.addToRead(this.props.index);
        //console.log(this);
    }

    render() {
        return (
            <li className="feed">
                <hr/>
                <h3>{this.props.details.name}</h3>
                <img src={this.props.details.img} alt=""/>
                <h4>
                    <a href={this.props.details.link}>Open Article</a>
                </h4>
                <button onClick={this.addToReadings.bind(this)}>Add to Read</button>
                <hr/>
            </li>
        )
    }
}

const routes = <Router history = { browserHistory }>
                    <Route path="/" component={Home} />
                    <Route path="/:storeId" component={App} />
                    <Route path="*" component={NotFound}/>
               </Router>;

ReactDOM.render(routes, AppMounter);