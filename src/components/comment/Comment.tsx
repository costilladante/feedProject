import { CommentType } from "../../types/comment.type";
import "./Comment.scss";

type CommentsProps = {
	comment: CommentType;
};

const Comment = (props: CommentsProps) => {
	const { name, email, body } = props.comment;

	return (
		<div className="Comment">
			<a href={`mailto:${email}`}>{name}</a>
			<p>{body}</p>
		</div>
	);
};

export default Comment;
