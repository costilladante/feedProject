import Card from "../../../components/card/Card";
import { PostType } from "../../../types/post.type";
import "./HomeBody.scss";

type HomeBodyProps = {
	posts: PostType[];
};
const HomeBody = (props: HomeBodyProps) => {
	const { posts } = props;

	return (
		<div className="HomeBody">
			{posts.map((p) => {
				return <Card key={`card-${p.id}`} title={p.title} text={p.body} />;
			})}
		</div>
	);
};

export default HomeBody;
