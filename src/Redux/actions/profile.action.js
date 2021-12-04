import { profileTypes } from "../types/profile.types";

export const handleAddFavDataAction = (info, isFavData) => {
	return {
		type: profileTypes.ADD_FAV,
		payload: { info, isFavData },
	};
};

export const handleAddVDFavDataAction = (info, isVdFavData) => {
	return {
		type: profileTypes.ADD_VD,
		payload: { info, isVdFavData },
	};
};
