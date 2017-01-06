import React from "react";
import ReactDOM from "react-dom";

const AppMounter = document.getElementById("app");

class App extends React.Component {
    render() {
        return (
            <div>
            <h1>Hello</h1>
            </div>
        );
    }
}

ReactDOM.render(<App/>, AppMounter);