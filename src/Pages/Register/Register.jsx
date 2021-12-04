import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//Action
import { handleRegisterAction } from "../../Redux/actions/login.action";

//Styles
import "./Register.styles.css";

const Register = () => {
	const { message } = useSelector((store) => store.error);
	const dispatch = useDispatch();

	const [userInfo, setUserInfo] = useState({
		userName: "",
		email: "",
		password: "",
	});

	const handleRegister = (e) => {
		e.preventDefault();
		dispatch(handleRegisterAction(userInfo));
	};

	return (
		<div className="box-login flex flex-col items-center w-screen h-screen mx-auto md:flex-row md:w-11/12">
			<div className="box-text bg-black flex justify-center items-center w-full h-2/5 relative z-10 lg:h-3/5">
				<h1 className="text-5xl text-white">Hello</h1>
			</div>
			<div className="box-sign bg-white mx-4 md:m-0 w-10/12 h-2/5 py-4 px-10 text-center relative z-0 flex justify-center md:justify-start md:items-center md:pl-0 lg:h-3/5">
				<form
					action=""
					onSubmit={handleRegister}
					className="box-form py-2 px-5 lg:h-full w-full flex flex-col justify-center"
				>
					<h2 className="text-5xl mb-3 font-bold">Sign Up</h2>
					{message && (
						<p className="text-center text-red mb-5">Message Error</p>
					)}
					<input
						className="w-full border-2 p-2 mt-3 mb-4"
						type="text"
						name=""
						placeholder="USER NAME"
						onChange={(e) =>
							setUserInfo({ ...userInfo, userName: e.target.value })
						}
					/>
					<input
						className="w-full border-2 p-2 mt-3 mb-7"
						type="text"
						name=""
						placeholder="EMAIL ADDERSS"
						onChange={(e) =>
							setUserInfo({ ...userInfo, email: e.target.value })
						}
					/>
					<input
						className="w-full border-2 p-2"
						type="password"
						name=""
						placeholder="PASSWORD"
						onChange={(e) =>
							setUserInfo({ ...userInfo, password: e.target.value })
						}
					/>
					<div className="my-6 text-white mx-auto grid grid-cols-2 gap-x-3">
						<input
							className="py-3 px-5 rounded bg-black"
							type="submit"
							value="Sign In"
						/>
						<Link className="py-3 px-5 rounded bg-black" to="/login">
							Login
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
