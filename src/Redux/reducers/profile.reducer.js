import { profileTypes } from "../types/profile.types";

const initialState = {
	favData: [],
	vdFavData: [],
};

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case profileTypes.ADD_FAV:
			return {
				...state,
				favData: action.payload.isFavData
					? state.favData.filter((item) => item.id !== action.payload.info.id)
					: [...state.favData, action.payload.info],
			};

		case profileTypes.ADD_VD:
			return {
				...state,
				vdFavData: action.payload.isVdFavData
					? state.vdFavData.filter((item) => item.id !== action.payload.info.id)
					: [...state.vdFavData, action.payload.info],
			};

		default:
			return state;
	}
};
