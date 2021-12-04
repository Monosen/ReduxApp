import React, { useState } from "react";
import { useSelector } from "react-redux";

//Components
import Navegation from "../../Components/Custom/Navigation/Navegation";
import ItemVideo from "../../Components/PageVideos/ItemVideo/ItemVideo";

const PageVideos = () => {
	//State
	const [name, setName] = useState("");
	const [value, setValue] = useState("");

	//Redux hooks
	const { vdFavData } = useSelector((store) => store.profile);

	//Functions
	const handleArtistName = (e) => {
		setName(e.target.value);
	};
	// Your API key: 563492ad6f917000010000014a76ca74704d41e9b50df0fbdb677b24

	const handleFetchToken = async (e) => {
		e.preventDefault();
		try {
			const request = await fetch(
				`https://api.pexels.com/videos/search?query=${name}&per_page=1`,
				{
					headers: {
						Authorization:
							"563492ad6f917000010000014a76ca74704d41e9b50df0fbdb677b24",
					},
				}
			);
			const result = await request.json();
			setValue(result.videos[0].video_files[1]);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Navegation />
			<div className="mb-28 mx-auto text-center">
				<h2 className="mt-20 mb-10 text-center font-bold text-3xl">Videos</h2>
				<form action="" onSubmit={handleFetchToken}>
					<input
						className="rounded-l-md py-2.5 px-3 w-5/12 max-w-xs border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent shadow-md"
						type="text"
						placeholder="Search Video"
						onChange={handleArtistName}
					/>

					<input
						className="rounded-r-md py-2.5 px-3 bg-black text-white hover:bg-white hover:text-black border hover:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
						type="submit"
						value="Search"
					/>
				</form>
				{value && (
					<ItemVideo
						data={value}
						isVdFavData={vdFavData.some((photo) => photo.id === value.id)}
					/>
				)}
			</div>
		</>
	);
};

export default PageVideos;
