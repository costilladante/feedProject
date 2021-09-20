import HomeBody from "./homeBody/HomeBody";
import HomeHeader from "./homeHeader/HomeHeader";
import "./Home.scss";

const Home = () => {
	return (
		<div className="layout">
			<div className="layout-header">
				<HomeHeader title="Feed Project"></HomeHeader>
			</div>
			<div className="layout-body">
				<HomeBody></HomeBody>
			</div>
		</div>
	);
};

export default Home;
