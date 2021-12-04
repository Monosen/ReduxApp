import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navegation from "../../Components/Custom/Navigation/Navegation";

//Img
import userDefault from "../../img/userDefault.png";

const Profile = () => {
	const { session, profile } = useSelector((store) => store);
	const { user } = session;
	const { favData, vdFavData } = profile;
	// console.log(user);

	return (
		<>
			<Navegation />

			<div className="w-96 text-center shadow-md border rounded-md px-4 py-5 mt-32 mx-auto">
				<img
					className="rounded-full h-24 w-24 flex items-center justify-center m-auto mb-4"
					src={user?.photoURL ? user?.photoURL : userDefault}
					alt={user?.displayName}
				/>
				<h2>{user?.displayName}</h2>
				<p>{user?.email}</p>
				<div className="mt-3 flex justify-around text-center">
					<p>
						<Link to="/followImg">
							<span className="text-xl font-bold block">Image:</span>
							<span>{favData.length}</span>
						</Link>
					</p>
					<p>
						<Link to="/followVideos">
							<span className="text-xl font-bold block">Videos:</span>
							<span>{vdFavData.length}</span>
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default Profile;
