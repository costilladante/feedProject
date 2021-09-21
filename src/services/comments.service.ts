import axios from "axios";

const getComments = async (postId: string) => {
	const response = await axios.get(
		//`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`
		`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
	);
	return response;
};

export { getComments };
