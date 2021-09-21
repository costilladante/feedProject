import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import PostDetails from "./postDetails/PostDetails";
import Comments from "./comments/Comments";
import "./PostSection.scss";
import { getComments } from "../../services/comments.service";
import { CommentType } from "../../types/comment.type";

type PostSectionParams = {
	id: string;
};
const PostSection = () => {
	let history = useHistory();
	const { id: postId } = useParams<PostSectionParams>();
	const [isLoading, setIsLoading] = useState(false);
	const [comments, setComments] = useState<CommentType[]>([]);

	const onGoBackClicked = () => {
		history.push("/");
	};

	useEffect(() => {
		const fetchComments = async () => {
			setIsLoading(true);
			try {
				const result = await getComments(postId);
				const commentsData: [CommentType] = result.data;
				setComments(commentsData);
			} catch (error) {
				console.log("Could not get Comments");
			} finally {
				setIsLoading(false);
			}
		};
		fetchComments();
	}, [postId]);

	return (
		<div className="PostSection">
			<span className="PostSection-Header">
				<h2>Post Title</h2>
				<button onClick={onGoBackClicked}> {"< Go back"} </button>
			</span>

			<PostDetails></PostDetails>
			<h3>Comments ({comments.length})</h3>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<Comments data={comments}></Comments>
			)}
		</div>
	);
};

export default PostSection;
