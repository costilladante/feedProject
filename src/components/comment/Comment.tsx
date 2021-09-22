import { PureComponent } from "react";
import { CommentType } from "../../types/comment.type";
import "./Comment.scss";

type CommentsProps = {
	comment: CommentType;
	avatarSrc: string;
};

class Comment extends PureComponent<CommentsProps> {
	render() {
		const { comment, avatarSrc } = this.props;
		const { name, email, body } = comment;
		return (
			<div className="Comment">
				<div className="Comment-Header">
					<img src={avatarSrc} alt="avatar" />
					<span className="Comment-Header-Name">{name}</span>
					<span className="Comment-Header-Email">{email}</span>
				</div>
				<p>{body}</p>
			</div>
		);
	}
}

export default Comment;
