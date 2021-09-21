import HomeBody from "./homeBody/HomeBody";
import HomeHeader from "./homeHeader/HomeHeader";
import "./Home.scss";
import Pagination from "../../components/pagination/Pagination";

const Home = () => {
	const onPageChanged = (page: number) => {
		console.log(`PageChanged: ${page}`);
	};
	return (
		<>
			<span className="Home-Pagination">
				<Pagination
					currentPage={3}
					totalPages={6}
					onPageChanged={onPageChanged}
				></Pagination>
			</span>

			<HomeBody></HomeBody>
		</>
	);
};

export default Home;
