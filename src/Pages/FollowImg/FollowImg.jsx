import React from "react";
import { useSelector } from "react-redux";

//Components
import Navegation from "../../Components/Custom/Navigation/Navegation";
import SinglePhoto from "../../Components/Home/SinglePhoto/SinglePhoto";

const FollowImg = () => {
	const { favData } = useSelector((store) => store.profile);

	return (
		<>
			<Navegation />
			<h1 className="text-4xl mt-28 text-center">Follow Img</h1>
			<div className="container pt-20">
				{favData?.map((item) => (
					<SinglePhoto
						key={item.id}
						data={item}
						isFavData={favData.some((photo) => photo.id === item.id)}
					/>
				))}
			</div>
		</>
	);
};

export default FollowImg;
