import Card from "../../../components/card/Card";
import { PostType } from "../../../types/post.type";
import { useHistory } from "react-router-dom";
import "./HomeBody.scss";

type HomeBodyProps = {
	posts: PostType[];
};
const HomeBody = (props: HomeBodyProps) => {
	const { posts } = props;
	let history = useHistory();
	const onCardClicked = (cardId: number) => {
		history.push(`/post/${cardId}`);
	};

	return (
		<div className="HomeBody">
			{posts.map((p) => {
				return (
					<Card
						key={`card-${p.id}`}
						title={p.title}
						text={p.body}
						onClick={() => {
							onCardClicked(p.id);
						}}
					/>
				);
			})}
		</div>
	);
};

export default HomeBody;
