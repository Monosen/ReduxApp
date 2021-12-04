import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//Actions
import { handleLogoutAction } from "../../../Redux/actions/login.action";

//Icos
import { FaUserCircle } from "react-icons/fa";

const Navegation = () => {
	//Redux
	const dispatch = useDispatch();

	return (
		<nav className="flex justify-between items-center bg-black text-white w-full fixed inset-0 h-20 px-5 md:px-20 z-40">
			<p className="text-4xl">Logo</p>
			<ul className="flex items-center">
				<li>
					<Link className="py-3 px-2" to="/">
						Home
					</Link>
				</li>
				<li>
					<Link className="py-3 px-2" to="/img">
						Img
					</Link>
				</li>
				<li>
					<Link className="py-3 px-2" to="/videos">
						Videos
					</Link>
				</li>
				<li>
					<button
						className="py-3 px-2"
						onClick={() => dispatch(handleLogoutAction())}
					>
						Login
					</button>
				</li>
				<li>
					<Link className="py-3 px-2" to="/register">
						Register
					</Link>
				</li>
				<li className="ml-3.5">
					<Link className="py-3 px-2" to="/profile">
						<FaUserCircle />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navegation;
