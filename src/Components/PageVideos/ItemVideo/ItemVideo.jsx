import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

//Action
import { handleAddVDFavDataAction } from "../../../Redux/actions/profile.action";

//Styles
import "./ItemVideo.styles.css";

const ItemVideo = ({ data, isVdFavData }) => {
	//Redux hook
	const dispatch = useDispatch();

	const handleAddVdFavData = () => {
		dispatch(handleAddVDFavDataAction(data, isVdFavData));
	};

	return (
		<>
			<video src={data.link} className="box-video w-3/5 mx-auto mt-10" controls>
				<source src="movie.mp4" type="video/mp4" />
				<source src="movie.ogg" type="video/ogg" />
			</video>

			{isVdFavData ? (
				<FaHeart
					className=" text-red cursor-pointer mx-auto z-30"
					onClick={handleAddVdFavData}
				/>
			) : (
				<AiOutlineHeart
					className="cursor-pointer mx-auto z-30"
					onClick={handleAddVdFavData}
				/>
			)}
		</>
	);
};

export default ItemVideo;
