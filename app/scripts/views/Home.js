import React from "react";

import logo from "../../../public/media/logo.svg";

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
            <h1>Home</h1>
                <img className="logo" src={logo} alt=""/>
                <form onSubmit={this.goToMain.bind(this)}>
                    <select ref="storeId">
                        <option value="design">Design</option>
                        <option value="tech">Tech</option>
                        <option value="entrepreneurship">Entr</option>
                        <option value="research">Research</option>
                    </select>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

//reactMixin.onClass(Home, Navigation);

export default Home;