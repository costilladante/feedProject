import { useEffect, useState } from "react";
import { CommentType } from "../../../types/comment.type";
import Comment from "../../../components/comment/Comment";
import "./Comments.scss";
import { getAvatars } from "../../../services/avatar.service";

type CommentsProps = {
	data: CommentType[];
};

const Comments = (props: CommentsProps) => {
	const [avatars, setAvatars] = useState([]);

	useEffect(() => {
		const generateAvatars = async (limit: number) => {
			try {
				const avatars = await (await getAvatars(limit)).data;
				setAvatars(avatars.map((a: { url: string }) => a.url));
			} catch (error) {
				console.log(error);
			}
		};
		console.log(props.data);
		props.data.length > 0 && generateAvatars(props.data.length);
	}, []);

	return (
		<div className="Comments">
			{props.data.map((c, i) => {
				return (
					<Comment
						key={`comment-${c.id}`}
						avatarSrc={avatars[i]}
						comment={c}
					></Comment>
				);
			})}
		</div>
	);
};

export default Comments;
