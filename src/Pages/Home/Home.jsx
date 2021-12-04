import React, { useState, useEffect } from "react";

//Compoenetes
import Navegation from "../../Components/Custom/Navigation/Navegation";
import ImageContainer from "../../Components/Containers/ImageContainer/ImageContainer";

const Home = () => {
	//Ref
	// const containerRef = useRef();

	//State
	const [data, setData] = useState(null);
	// const [nextPage, setNextPage] = useState("");

	//Functions

	// Your API key: 563492ad6f917000010000019bde9a8730a84c55abc8808d8cda42dc

	useEffect(() => {
		const query = ["nature", "office", "movies", "animals", "space"];
		const random = Math.floor(Math.random() * (query.length - 1)) + 1;
		const keyword = query[random];
		const handleFetchToken = async () => {
			const request = await fetch(
				`https://api.pexels.com/v1/search?query=${keyword}&per_page=20`,
				{
					headers: {
						Authorization:
							"563492ad6f917000010000019bde9a8730a84c55abc8808d8cda42dc",
					},
				}
			);
			const result = await request.json();
			setData(result.photos);
			// setNextPage(result.next_page);
		};
		handleFetchToken();
	}, []);

	// useEffect(() => {
	// 	window.addEventListener("scroll", () => {
	// 		if (
	// 			window.scrollY + window.innerHeight >=
	// 			document.documentElement.scrollHeight
	// 		) {
	// 			handleFetchDataNextPage();
	// 			// console.log("si funciona");
	// 		}
	// 	});
	// }, [nextPage]);

	// const handleFetchDataNextPage = async () => {
	// 	const request = await fetch(nextPage, {
	// 		headers: {
	// 			Authorization:
	// 				"563492ad6f917000010000014a76ca74704d41e9b50df0fbdb677b24",
	// 		},
	// 	});
	// 	const result = await request.json();
	// 	setNextPage(result.next_page);
	// 	setData([...data, ...result.photos]);
	// };

	return (
		<>
			<Navegation />
			<div className="mt-24">
				<ImageContainer data={data} />
			</div>
		</>
	);
};

export default Home;
