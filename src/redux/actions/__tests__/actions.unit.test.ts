import { ActionType } from "../../actions/post.actions";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getPosts } from "../../../services/posts.service";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Actions & Async Actions UTest", () => {
	const initialState = {
		posts: [],
		selectedPost: undefined,
		paginationData: {
			currentPage: 1,
			totalPages: 1,
		},
		error: "",
	};

	const getPostSuccess = () => {
		return {
			type: ActionType.GET_POSTS_SUCCESS,
		};
	};

	const fetchPost = (page: number, limit: number) => {
		return (dispatch: (arg0: { type: ActionType }) => any) => {
			return getPosts(page, limit).then(() => dispatch(getPostSuccess()));
		};
	};

	it("should start fetching posts", () => {
		const action = () => ({
			type: ActionType.GET_POSTS,
		});
		const store = mockStore(initialState);

		store.dispatch(action());

		const actions = store.getActions();
		const expectedPayload = { type: ActionType.GET_POSTS };
		expect(actions).toEqual([expectedPayload]);
	});

	it("should change current page", () => {
		const action = () => ({
			type: ActionType.SET_CURRENT_PAGE,
			payload: 5,
		});
		const store = mockStore(initialState);

		store.dispatch(action());

		const actions = store.getActions();
		const expectedPayload = { type: ActionType.SET_CURRENT_PAGE, payload: 5 };
		expect(actions).toEqual([expectedPayload]);
	});

	it("should change selected Post", () => {
		const action = () => ({
			type: ActionType.SET_SELECTED_POST,
			payload: 7,
		});
		const store = mockStore(initialState);

		store.dispatch(action());

		const actions = store.getActions();
		const expectedPayload = { type: ActionType.SET_SELECTED_POST, payload: 7 };
		expect(actions).toEqual([expectedPayload]);
	});

	it("should fetch Post successfully", () => {
		const store = mockStore(initialState);
		return store.dispatch(fetchPost(1, 6)).then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual(getPostSuccess());
		});
	});
});
