import React from "react";

import ReactDOM from "react-dom";

import { Link } from "react-router-dom";
import Archived from "./Archived";
import profileStore from "./store/ProfileStore";


export default class Layout extends React.Component {

	constructor () {
		super();
		this.state = profileStore.getProfile();
	}

	updateName(name) {
		this.setState({name});
	}

	updateCountry(country) {
		this.setState({country});
	}

	componentWillMount() {
		profileStore.on("change", () => {
			
			this.setState(profileStore.getProfile());
		});
	}

	componentWillUnmount() {
		console.log("componentWillUnmount ");
		profileStore.removeListener("change");
	}

	render() {
		console.log(this);
		return (
			<div>
				<h1> Hello {this.state.name}. How is weather in {this.state.country} </h1>
				<Link to="/featured">Featured</Link>
				<Link to="/archived">Archived</Link>
				<Link to="/settings">Settings</Link>
				<Link to="/signup" >
					Signup
				</Link>
				{this.props.children}
			</div>
		);
	}
}

