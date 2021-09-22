import axios from "axios";

const getAvatars = async (limit: number) => {
	const response = await axios.get(
		`https://tinyfac.es/api/data?limit=${limit}`
	);
	return response;
};

export { getAvatars };
