import React from "react";

import profileStore from "./store/ProfileStore";

import dispatcher from "./Dispatcher";
import * as profileAction from "./action/ProfileAction";

export default class Signup extends React.Component {
    constructor() {
        super();
        this.state = { name: "Gajendra", country: "India" };
    }
    
    handleNameChange(e) {
        var name = e.target.value;
        this.state.name = name;
    }

    handleCountryChange(e) {
        var country = e.target.value;
        this.state.country = country;
    }

    updateProfile(e) {
        profileAction.saveProfile(this.state.name, this.state.country);
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <h1> Your Name</h1>
                    </div>
                    <div class="col-sm-2">
                        <input id="name" onChange={this.handleNameChange.bind(this)} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <h1> Your country </h1>
                    </div>
                    <div class="col-sm-2">
                        <input id="country" onChange={this.handleCountryChange.bind(this)} />
                    </div>
                </div>
                <div class="row">
                    <button onClick={this.updateProfile.bind(this)} > Save Profile </button>
                </div>
            </div>
        );
    }

    onChange() {
        this.props.Signup
    }
} 