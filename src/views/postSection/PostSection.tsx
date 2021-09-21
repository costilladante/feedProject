import PostDetails from "./postDetails/PostDetails";
import "./PostSection.scss";
import Comments from "./comments/Comments";
const PostSection = () => {
	return (
		<div className="PostSection">
			<h2>Post Title</h2>
			<PostDetails></PostDetails>
			<h3>Comments ({5})</h3>
			<Comments></Comments>
			<button className="PostSection-LoadBtn">Load More</button>
		</div>
	);
};

export default PostSection;
