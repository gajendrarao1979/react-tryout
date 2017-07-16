import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link} from "react-router-dom";


import Layout from "./Layout";
import Featured from "./Featured";
import Archived from "./Archived";
import Settings from "./Settings";
import Signup from "./Signup";

export default class Client extends React.Component {
	render() {
		return (
			<HashRouter>
				<div>
					<Route path="/" component={Layout}/>
					<Route path="/featured" component={Featured}/>
					<Route path="/archived" component={Archived}/>
					<Route path="/settings" component={Settings}/>
					<Route path="/signup" 
					updateName={Layout.prototype.updateName.bind(Layout.__proto__)}
					updateCountry={Layout.prototype.updateCountry.bind(Layout.__proto__)}
					component={Signup}/>
				</div>
			</HashRouter>
		);
	}
}

/*
const Client = () => (
	<div>
		<BrowserRouter>
			<div>
				<nav>
					<Link to="/featured">Featured</Link>
				</nav>
				<div>
					<Route path="/featured" component={Featured} />
				</div>
			</div>
  		</BrowserRouter>
	</div>
)*/

const app = document.getElementById("app");

ReactDOM.render(
	<Client />
	, app
)

