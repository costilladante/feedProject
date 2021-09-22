import { CommentType } from "../../../types/comment.type";
import Comment from "../../../components/comment/Comment";
import avatar from "../../../assets/avatar.svg";
import "./Comments.scss";

type CommentsProps = {
	data: CommentType[];
};

const Comments = (props: CommentsProps) => {
	return (
		<div className="Comments">
			{props.data.map((c, i) => {
				return (
					<Comment
						key={`comment-${c.id}`}
						avatarSrc={avatar}
						comment={c}
					></Comment>
				);
			})}
		</div>
	);
};

export default Comments;
