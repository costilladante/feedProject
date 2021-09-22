import { CommentType } from "../../types/comment.type";
import "./Comment.scss";

type CommentsProps = {
	comment: CommentType;
	avatarSrc: string;
};

const Comment = (props: CommentsProps) => {
	const { name, email, body } = props.comment;

	return (
		<div className="Comment">
			<div className="Comment-Header">
				<img src={props.avatarSrc} alt="avatar" />
				<span className="Comment-Header-Name">{name}</span>
				<span className="Comment-Header-Email">{email}</span>
			</div>
			<p>{body}</p>
		</div>
	);
};

export default Comment;
