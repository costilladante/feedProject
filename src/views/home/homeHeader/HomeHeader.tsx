import React from "react";
import Pagination from "../../../components/pagination/Pagination";
import logo from "../../../assets/github.svg";
import "./HomeHeader.scss";

type HomeHeaderProps = {
	title: string;
};

const HomeHeader = (props: HomeHeaderProps) => {
	const onPageChanged = (page: number) => {
		console.log(`PageChanged: ${page}`);
	};

	return (
		<span className="homeHeader">
			<div className="homeHeader-logo">
				<img src={logo} alt="logo"></img>
				<h1>{props.title}</h1>
			</div>
			<span className="homeHeader-pagination">
				<Pagination
					currentPage={3}
					totalPages={6}
					onPageChanged={onPageChanged}
				></Pagination>
			</span>
		</span>
	);
};

export default HomeHeader;
