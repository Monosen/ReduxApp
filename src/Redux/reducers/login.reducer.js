import { loginTypes } from "../types/login.types";

const initialState = {
	user: null,
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case loginTypes.LOGIN_GOOGLE:
			return {
				...state,
				user: action.payload,
			};
		case loginTypes.LOGOUT:
			return {
				user: null,
			};

		default:
			return state;
	}
};
