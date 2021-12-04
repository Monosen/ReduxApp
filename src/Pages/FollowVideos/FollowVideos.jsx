import React from "react";
import { useSelector } from "react-redux";

//Components
import Navegation from "../../Components/Custom/Navigation/Navegation";
import ItemVideo from "../../Components/PageVideos/ItemVideo/ItemVideo";

const FollowVideos = () => {
	const { vdFavData } = useSelector((store) => store.profile);

	return (
		<>
			<Navegation />
			<h1 className="text-4xl mt-28 text-center">Follow Videos</h1>
			<div className="mt-20">
				{vdFavData?.map((item) => (
					<ItemVideo
						key={item.id}
						data={item}
						isVdFavData={vdFavData.some((photo) => photo.id === item.id)}
					/>
				))}
			</div>
		</>
	);
};

export default FollowVideos;
