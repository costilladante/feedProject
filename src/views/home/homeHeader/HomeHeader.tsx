import logo from "../../../assets/github.svg";
import "./HomeHeader.scss";

type HomeHeaderProps = {
	title: string;
	onLogoClicked?: () => void;
};

const HomeHeader = (props: HomeHeaderProps) => {
	return (
		<span className="homeHeader">
			<div className="homeHeader-logo" onClick={props.onLogoClicked}>
				<img src={logo} alt="logo"></img>
				<h1>{props.title}</h1>
			</div>
			<span className="homeHeader-pagination"></span>
		</span>
	);
};

export default HomeHeader;
