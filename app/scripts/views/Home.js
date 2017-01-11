import React from "react";

import logo from "../../../public/media/logo.svg";

import h from "../helpers/helper";

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    goToMain(event){
        event.preventDefault();
        //console.log(this.refs.storeId.value);
        this.props.router.push('/' + this.refs.storeId.value);
    }

    render() {
        return (
            <div className="home">
                <div className="background"></div>
                <img className="logo" src={logo} alt=""/>
                <div className="formWrapper">
                    <h2>Kiosk</h2>
                    <h4>An AI powered, curated library of the articles, researches, trends and news.</h4>
                    <form className="storeForm" onSubmit={this.goToMain.bind(this)}>
                        <select ref="storeId">
                            <option value="design">Design</option>
                            <option value="tech">Tech</option>
                            <option value="entrepreneurship">Entr</option>
                            <option value="research">Research</option>
                        </select>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

//reactMixin.onClass(Home, Navigation);

export default Home;