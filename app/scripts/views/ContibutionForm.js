import React from "react";

export class ContributionForm extends React.Component {
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
        console.log(this.refs.contributionForm);
	    //this.props.router.push('/' + this.refs.contributionForm.value);
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

export default class Contribution extends React.Component {
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