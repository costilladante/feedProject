import axios from "axios";

const getComments = async (page: number, limit: number) => {
	const response = await axios.get(
		`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`
	);
	return response;
};

export { getComments };
