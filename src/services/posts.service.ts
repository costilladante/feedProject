import axios from "axios";

const getPosts = async (page: number, limit: number) => {
	const response = await axios.get(
		`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
	);
	return response;
};

export { getPosts };
