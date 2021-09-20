import React from "react";
import Card from "../../../components/card/Card";
import "./HomeBody.scss";
const HomeBody = () => {
	const lorem =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie sollicitudin porta. Nam orci libero, consectetur nec velit ac, commodo malesuada leo. Quisque eros est, ultricies viverra mollis et, ullamcorper non sem. Sed scelerisque porta lorem a gravida. Curabitur ut velit feugiat, malesuada ipsum in, pharetra lectus. Phasellus viverra, mauris molestie placerat blandit, lacus nisi tempor leo, nec placerat metus enim et quam. Mauris pulvinar lorem magna, id porta orci imperdiet nec. Nunc auctor vehicula nibh, non hendrerit nulla aliquet et. Morbi ac sapien sit amet massa vehicula accumsan non et nulla. Nullam vitae risus risus. Donec facilisis, nisl at lobortis pharetra, quam arcu tempus mi, et suscipit elit elit sed nisi. Nam ullamcorper, lorem nec ullamcorper pellentesque, sem eros sodales tortor, sit amet hendrerit ante felis sit amet dolor. ";
	return (
		<>
			<Card title="title" text="text"></Card>
			<Card title="title" text={lorem}></Card>
			<Card title={lorem} text="text"></Card>
			<Card title={lorem} text={lorem}></Card>
			<Card title="title" text="text"></Card>
			<Card title="title" text={lorem}></Card>
			<Card title={lorem} text="text"></Card>
			<Card title={lorem} text={lorem}></Card>
			<Card title="title" text="text"></Card>
			<Card title="title" text={lorem}></Card>
			<Card title={lorem} text="text"></Card>
			<Card title={lorem} text={lorem}></Card>
		</>
	);
};

export default HomeBody;
