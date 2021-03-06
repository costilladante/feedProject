import { PureComponent } from "react";
import "./Card.scss";
type CardProps = {
	title: string;
	text: string;
	onClick?: () => void;
};

class Card extends PureComponent<CardProps> {
	render() {
		return (
			<div className="card" onClick={this.props.onClick}>
				<div className="card-title">
					<h2>{this.props.title}</h2>
				</div>
				<p>{this.props.text}</p>
			</div>
		);
	}
}

export default Card;
