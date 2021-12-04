import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
	return (
		<div className="h-screen w-full flex justify-center items-center flex-col">
			<h1 className="text-9xl">404</h1>
			<p className="capitalize my-3.5">the page not fount</p>
			<Link
				className=" px-4 py-2.5 bg-black text-white hover:bg-white hover:text-black border-2 border-black"
				to="/"
			>
				Home
			</Link>
		</div>
	);
};

export default Page404;
