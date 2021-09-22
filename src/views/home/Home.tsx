import { useState, useEffect } from "react";
import HomeBody from "./homeBody/HomeBody";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/hooks";
import { getAllPosts, setCurrentPage } from "../../redux/actions/post.actions";
import "./Home.scss";

const Home = () => {
	const maxPost = 9;
	const dispatch = useDispatch();
	const { posts: postList, paginationData } = useTypedSelector(
		(state) => state.postReducer
	);
	const [isLoading, setIsLoading] = useState(false);

	const onPageChanged = async (page: number) => {
		dispatch(setCurrentPage(page));
	};

	useEffect(() => {
		const fetchPosts = async () => {
			setIsLoading(true);
			await dispatch(getAllPosts(paginationData.currentPage, maxPost));
			setIsLoading(false);
		};
		fetchPosts();
	}, [paginationData.currentPage]);

	return isLoading ? (
		<div>Loading...</div>
	) : (
		<>
			<span className="Home-Pagination">
				<Pagination
					paginationData={paginationData}
					onPageChanged={onPageChanged}
				></Pagination>
			</span>
			<HomeBody posts={postList}></HomeBody>
		</>
	);
};

export default Home;
