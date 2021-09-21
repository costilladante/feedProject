import postReducer from "../post.reducer";
import { ActionType, Action } from "../../actions/post.actions";
import { PostType } from "../../../types/post.type";
import { PaginationType } from "../../../types/pagination.type";

describe("Reducers UTest", () => {
	const initialState = {
		posts: [],
		selectedPost: undefined,
		paginationData: {
			currentPage: 1,
			totalPages: 1,
		},
		error: "",
	};

	const mockPosts: PostType[] = [
		{
			id: 1,
			userId: 1,
			title: "title 1",
			body: "body 1",
		},
		{
			id: 2,
			userId: 2,
			title: "title 2",
			body: "body 2",
		},
	];

	const mockPaginationData: PaginationType = {
		currentPage: 1,
		totalPages: 12,
	};

	it("Has initial state", () => {
		expect(
			postReducer(undefined, {
				type: ActionType.RESET_STATE,
			})
		).toEqual(initialState);
	});

	it("Handles posts load", () => {
		const action: Action = {
			type: ActionType.GET_POSTS_SUCCESS,
			payload: {
				posts: mockPosts,
				paginationData: mockPaginationData,
			},
		};
		expect(postReducer(initialState, action)).toEqual({
			...initialState,
			posts: mockPosts,
			paginationData: mockPaginationData,
		});
	});

	it("Handles posts load failed", () => {
		const action: Action = {
			type: ActionType.GET_POSTS_FAILED,
			payload: {
				error: "Error!",
			},
		};
		expect(postReducer(initialState, action)).toEqual({
			...initialState,
			error: "Error!",
		});
	});

	it("Handles selected post", () => {
		const action: Action = {
			type: ActionType.SET_SELECTED_POST,
			payload: 7,
		};
		expect(postReducer(initialState, action)).toEqual({
			...initialState,
			selectedPostId: 7,
		});
	});

	it("Handles current page changed", () => {
		const action: Action = {
			type: ActionType.SET_CURRENT_PAGE,
			payload: 5,
		};
		expect(postReducer(initialState, action)).toEqual({
			...initialState,
			paginationData: {
				...initialState.paginationData,
				currentPage: 5,
			},
		});
	});
});
