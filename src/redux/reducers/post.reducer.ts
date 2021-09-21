import { Action, ActionType } from "../actions/post.actions";
import { PostType } from "../../types/post.type";
import { PaginationType } from "../../types/pagination.type";

interface State {
	posts: PostType[];
	selectedPostId?: number;
	paginationData: PaginationType;
	error: unknown;
}

const initialState = {
	posts: [],
	selectedPostId: undefined,
	paginationData: {
		currentPage: 1,
		totalPages: 1,
	},
	error: "",
};

const postReducer = (state: State = initialState, action: Action): State => {
	switch (action.type) {
		case ActionType.RESET_STATE:
			return initialState;
		case ActionType.GET_POSTS:
			return state;
		case ActionType.GET_POSTS_SUCCESS:
			return {
				posts: action.payload.posts,
				selectedPostId: undefined,
				paginationData: action.payload.paginationData,
				error: "",
			};
		case ActionType.GET_POSTS_FAILED:
			return { ...initialState, error: action.payload.error };
		case ActionType.SET_SELECTED_POST:
			return {
				...state,
				selectedPostId: action.payload,
			};
		case ActionType.SET_CURRENT_PAGE:
			return {
				...state,
				paginationData: {
					...state.paginationData,
					currentPage: action.payload,
				},
			};
		default:
			return state;
	}
};

export default postReducer;
