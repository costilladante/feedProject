import { Dispatch } from "redux";
import { getPosts } from "../../services/posts.service";
import { PostType } from "../../types/post.type";
import { PaginationType } from "../../types/pagination.type";

export enum ActionType {
	GET_POSTS = "GET_POSTS",
	GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
	GET_POSTS_FAILED = "GET_POSTS_FAILED",
	SET_SELECTED_POST = "SET_SELECTED_POST",
}

interface getPostsAction {
	type: ActionType.GET_POSTS;
}

interface getPostsSuccessAction {
	type: ActionType.GET_POSTS_SUCCESS;
	payload: {
		posts: PostType[];
		paginationData: PaginationType;
	};
}

interface getPostsFailedAction {
	type: ActionType.GET_POSTS_FAILED;
	payload: {
		error: unknown;
	};
}

interface setSelectedPostAction {
	type: ActionType.SET_SELECTED_POST;
	payload: number | undefined;
}

export const getAllPosts = (currentPage: number, limit: number) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.GET_POSTS,
		});
		try {
			const { data, headers } = await getPosts(currentPage, limit);
			const totalPages = Math.ceil(headers["x-total-count"] / limit);
			getAllPostsSuccess(data, totalPages);
		} catch (error) {
			getAllPostsFailed(error);
		}
	};
};

export const getAllPostsSuccess = (posts: PostType[], totalPages: number) => {
	return (dispatch: Dispatch<getPostsSuccessAction>) => {
		dispatch({
			type: ActionType.GET_POSTS_SUCCESS,
			payload: {
				posts,
				paginationData: {
					currentPage: 0,
					totalPages,
				},
			},
		});
	};
};

export const getAllPostsFailed = (error: unknown) => {
	return (dispatch: Dispatch<getPostsFailedAction>) => {
		dispatch({
			type: ActionType.GET_POSTS_FAILED,
			payload: {
				error,
			},
		});
	};
};

export const setSelectedPost = (postId: number) => {
	return (dispatch: Dispatch<setSelectedPostAction>) => {
		dispatch({
			type: ActionType.SET_SELECTED_POST,
			payload: postId,
		});
	};
};

export type Action =
	| getPostsAction
	| getPostsSuccessAction
	| getPostsFailedAction
	| setSelectedPostAction;
