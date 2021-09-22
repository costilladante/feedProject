import Home from "./views/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import PostSection from "./views/postSection/PostSection";
import HomeHeader from "./views/home/homeHeader/HomeHeader";

function App() {
	return (
		<div className="App">
			<div className="App-Header">
				<HomeHeader
					title="Feed Project"
					//onLogoClicked={onLogoClicked}
				></HomeHeader>
			</div>
			<div className="App-Body">
				<Router basename={process.env.PUBLIC_URL}>
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route path="/post/:id">
							<PostSection></PostSection>
						</Route>
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
