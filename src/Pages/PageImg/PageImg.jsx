import React, { useState } from "react";
import ImageContainer from "../../Components/Containers/ImageContainer/ImageContainer";

//Components
import Navegation from "../../Components/Custom/Navigation/Navegation";
import SearchForm from "../../Components/Custom/SearchForm/SearchForm";

const PageImg = () => {
	const [images, setImages] = useState("");
	const [data, setData] = useState(null);

	const handleKeyword = ({ value }) => setImages(value.replace(/ /g, ""));

	const handleSearchData = async (e) => {
		e.preventDefault();
		const response = await fetch(
			`https://api.pexels.com/v1/search?query=${images}&per_page=20`,
			{
				headers: {
					Authorization:
						"563492ad6f917000010000019bde9a8730a84c55abc8808d8cda42dc",
				},
			}
		);
		const result = await response.json();
		setData(result);
	};
	return (
		<div>
			<Navegation />
			<div className="w-3/4 mx-auto mb-28">
				<h2 className="mt-20 text-center font-bold text-3xl">Imagenes</h2>
				<SearchForm
					handleKeyword={handleKeyword}
					handleSearchData={handleSearchData}
				/>
			</div>
			<ImageContainer data={data} />
		</div>
	);
};

export default PageImg;
