import { CommentType } from "../../../types/comment.type";
import Comment from "../../../components/comment/Comment";
import "./Comments.scss";

type CommentsProps = {
	data: CommentType[];
};

const Comments = (props: CommentsProps) => {
	return (
		<div className="Comments">
			{props.data.map((c) => {
				return <Comment key={`comment-${c.id}`} comment={c}></Comment>;
			})}
		</div>
	);
};

export default Comments;
