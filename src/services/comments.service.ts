import axios from "axios";

const getComments = async (postId: string) => {
	const response = await axios.get(
		`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
	);
	return response;
};

const postComment = async (
	postId: string,
	userName: string,
	userEmail: string,
	comment: string
) => {
	const data = {
		postId,
		name: userName,
		email: userEmail,
		body: comment,
	};
	const response = await axios.post(
		"https://jsonplaceholder.typicode.com/comments",
		data
	);
	return response;
};

export { getComments, postComment };
