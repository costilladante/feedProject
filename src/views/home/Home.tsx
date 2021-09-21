import { useState, useEffect } from "react";
import HomeBody from "./homeBody/HomeBody";
import Pagination from "../../components/pagination/Pagination";
import { getPosts } from "../../services/posts.service";
import "./Home.scss";
import { PostType } from "../../types/post.type";
import { PaginationType } from "../../types/pagination.type";

const Home = () => {
	const maxPost = 9;
	const [isLoading, setIsLoading] = useState(false);
	const [postList, setPostList] = useState<PostType[]>([]);
	const [paginationData, setPaginationData] = useState<PaginationType>({
		currentPage: 1,
		totalPages: 1,
	});

	const onPageChanged = async (page: number) => {
		setPaginationData({ ...paginationData, currentPage: page });

		/* setIsLoading(true);
		try {
			const result = await getPosts(paginationData.currentPage, maxPost);
			console.log("🟣 result", result);
			const posts: [PostType] = result.data;
			setPostList(posts);
		} catch (error) {
			console.log("Could not get Posts");
		} finally {
			setIsLoading(false);
		} */
	};

	useEffect(() => {
		const fetchPosts = async () => {
			setIsLoading(true);
			try {
				const result = await getPosts(paginationData.currentPage, maxPost);
				//console.log("🟢 result", result);
				const posts: [PostType] = result.data;
				const totalPages = Math.ceil(result.headers["x-total-count"] / maxPost);

				setPaginationData({ currentPage: 1, totalPages });
				//setPaginationData({ ...paginationData, totalPages });
				setPostList(posts);
			} catch (error) {
				console.log("Could not get Posts");
			} finally {
				setIsLoading(false);
			}
		};
		fetchPosts();
	}, []);

	useEffect(() => {
		const fetchPosts = async () => {
			setIsLoading(true);
			try {
				const result = await getPosts(paginationData.currentPage, maxPost);
				//console.log("🟣 result", result);
				const posts: [PostType] = result.data;
				setPostList(posts);
			} catch (error) {
				console.log("Could not get Posts");
			} finally {
				setIsLoading(false);
			}
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
