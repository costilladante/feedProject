import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Comments from "./comments/Comments";
import { getComments, postComment } from "../../services/comments.service";
import { CommentType } from "../../types/comment.type";
import { useTypedSelector } from "../../hooks/hooks";
import "./PostSection.scss";

type PostSectionParams = {
	id: string;
};
const PostSection = () => {
	const mockedUserName = "Anon";
	const mockedUserEmail = "anon@gmail.com";
	let history = useHistory();
	const { posts } = useTypedSelector((state) => state.postReducer);
	const { id: postId } = useParams<PostSectionParams>();
	const [isLoading, setIsLoading] = useState(false);
	const [comments, setComments] = useState<CommentType[]>([]);
	const [commentInput, setCommentInput] = useState("");

	const post = posts.find((p) => p.id === parseInt(postId));
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

	const onTextChanged = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
		setCommentInput(ev.target.value);
	};

	const onSubmitClicked = async () => {
		if (!commentInput) {
			return;
		}
		try {
			const result = await postComment(
				postId,
				mockedUserName,
				mockedUserEmail,
				commentInput
			);
			const commentData: CommentType = result.data;
			setComments([commentData, ...comments]);
		} catch (error) {
			console.error("Could not submit Comment");
		}
	};

	return (
		<div className="PostSection">
			<span className="PostSection-Header">
				<h2>{post?.title}</h2>
				<button onClick={onGoBackClicked}> {"< Go back"} </button>
			</span>
			<p>{post?.body}</p>
			<h3>Comments ({comments.length})</h3>
			<div className="PostSection-Comment">
				<textarea
					placeholder="Submit a comment..."
					value={commentInput}
					onChange={onTextChanged}
				>
					{commentInput}
				</textarea>
				<button disabled={!commentInput} onClick={onSubmitClicked}>
					Submit
				</button>
			</div>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<Comments data={comments}></Comments>
			)}
		</div>
	);
};

export default PostSection;
