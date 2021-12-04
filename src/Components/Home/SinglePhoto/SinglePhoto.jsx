import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

//Components
import ImgModal from "../../Custom/Modal/ImgModal/ImgModal";

//Actions
import { handleAddFavDataAction } from "../../../Redux/actions/profile.action";

const SinglePhoto = ({ data, isFavData }) => {
	// console.log(isFavData);
	const [imgModal, setImgModal] = useState(false);

	//Redux hook
	const dispatch = useDispatch();

	const handleAddFavData = () => {
		dispatch(handleAddFavDataAction(data, isFavData));
	};

	return (
		<>
			<figure>
				<button onClick={() => setImgModal(true)}>
					<img src={data?.src.large} alt="A windmill" />
				</button>
				<figcaption className="flex items-center">
					{isFavData ? (
						<FaHeart
							className=" text-red cursor-pointer z-30"
							onClick={handleAddFavData}
						/>
					) : (
						<AiOutlineHeart
							className="cursor-pointer z-30"
							onClick={handleAddFavData}
						/>
					)}

					<a
						href={data?.photographer_url}
						target="_blank"
						rel="noreferrer"
						className="ml-2"
					>
						{data?.photographer}
					</a>
				</figcaption>
			</figure>
			{imgModal && <ImgModal data={data} setImgModal={setImgModal} />}
		</>
	);
};

export default SinglePhoto;
