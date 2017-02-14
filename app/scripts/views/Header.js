import React from "react";
import { Link } from "react-router";
import Contribution from "./ContibutionForm"

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        //this.goToContibution = this.goToContibution(this);
    }
/*
    goToContibution(event){
        event.preventDefault();
        this.props.router.push();
    }
*/
    render() {
        return (
            <div>
            <h1>Header</h1>
            <Link to=":storeId/contribute">Contribute</Link>
            </div>
        );
    }
}