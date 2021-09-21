import Home from "./views/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Post from "./views/post/Post";
import HomeHeader from "./views/home/homeHeader/HomeHeader";

function App() {
	return (
		<div className="App">
			<div className="App-Header">
				<HomeHeader title="Feed Project"></HomeHeader>
			</div>
			<div className="App-Body">
				<Router>
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route path="/post">
							<Post></Post>
						</Route>
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
