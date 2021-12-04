import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//Action
import {
	handleGoogleLoginAction,
	handleLoginWithEmailAction,
} from "../../Redux/actions/login.action";

//Styles
import "./Login.styles.css";

//Icons
import { AiOutlineGooglePlus } from "react-icons/ai";

const Login = () => {
	const [values, setValues] = useState({ mail: "", password: "" });
	const { message } = useSelector((store) => store.error);
	const dispatch = useDispatch();

	const handleGoogleLogin = (e) => {
		e.preventDefault();
		dispatch(handleGoogleLoginAction());
	};

	const handleLoginWithEmail = (e) => {
		e.preventDefault();
		dispatch(handleLoginWithEmailAction(values));
	};

	return (
		<div className="box-login flex flex-col items-center w-screen h-screen mx-auto md:flex-row md:w-11/12">
			<div className="box-text bg-black flex justify-center items-center w-full h-2/5 relative z-10 lg:h-3/5">
				<h1 className="text-5xl text-white">Hello</h1>
			</div>
			<div className="box-sign bg-white mx-4 md:m-0 w-10/12 h-2/5 py-4 px-10 text-center relative z-0 flex justify-center md:justify-start md:items-center md:pl-0 lg:h-3/5">
				<form
					action=""
					onSubmit={handleLoginWithEmail}
					className="box-form py-2 px-5 lg:h-full w-full flex flex-col justify-center"
				>
					<h2 className="text-5xl mb-3 font-bold">Login</h2>
					<p>With Google</p>
					<div className="border-2 rounded-full h-10 w-10 flex items-center justify-center mx-auto">
						<AiOutlineGooglePlus
							className="text-3xl"
							onClick={handleGoogleLogin}
						/>
					</div>
					{message && (
						<p className="text-center text-red mb-5">Message Error</p>
					)}
					<p>Or use your account</p>
					<input
						className="w-full border-2 p-2 mt-3 mb-7"
						type="text"
						name=""
						placeholder="EMAIL ADDERSS"
						onChange={(e) => setValues({ ...values, mail: e.target.value })}
					/>
					<input
						className="w-full border-2 p-2"
						type="password"
						name=""
						placeholder="PASSWORD"
						onChange={(e) => setValues({ ...values, password: e.target.value })}
					/>
					<div className="my-6 text-white mx-auto grid grid-cols-2 gap-x-3">
						<input
							className="py-3 px-5 rounded bg-black"
							type="submit"
							value="Login"
						/>
						<Link className="py-3 px-5 rounded bg-black" to="/register">
							Register
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
