import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";

///Firebase
import { firebase } from "./firebase/firebase.config";

//Pages
import Home from "./Pages/Home/Home";
import Page404 from "./Pages/404/Page404";
import PageImg from "./Pages/PageImg/PageImg";
import PageVideos from "./Pages/PageVideos/PageVideos";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import FollowVideos from "./Pages/FollowVideos/FollowVideos";
import FollowImg from "./Pages/FollowImg/FollowImg";
//Action
import { handleFillUserInfoAction } from "./Redux/actions/login.action";
import { useState } from "react";
import Profile from "./Pages/Profile/Profile";

function App() {
	// const navigate = useNavigate();
	//State
	const [isInSession, setIsInSession] = useState(false);

	//Redux Hooks
	const dispatch = useDispatch();

	firebase.auth().onAuthStateChanged((user) => {
		if (user?.uid) {
			dispatch(
				handleFillUserInfoAction({
					displayName: user.displayName,
					email: user.email,
					uid: user.uid,
					photoURL: user.photoURL,
				})
			);
			setIsInSession(true);
		} else {
			setIsInSession(false);
		}
	});

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						isInSession ? (
							<>
								<Home />
							</>
						) : (
							<Navigate replace to="/login" />
						)
					}
				/>
				<Route
					path="/img"
					element={
						isInSession ? (
							<>
								<PageImg />
							</>
						) : (
							<Navigate replace to="/login" />
						)
					}
				/>
				<Route
					path="/videos"
					element={
						isInSession ? (
							<>
								<PageVideos />
							</>
						) : (
							<Navigate replace to="/login" />
						)
					}
				/>
				<Route
					path="/login"
					element={
						!isInSession ? (
							<>
								<Login />
							</>
						) : (
							<Navigate replace to="/" />
						)
					}
				/>
				<Route
					path="/register"
					element={
						!isInSession ? (
							<>
								<Register />
							</>
						) : (
							<Navigate replace to="/" />
						)
					}
				/>

				<Route
					path="/profile"
					element={
						isInSession ? (
							<>
								<Profile />
							</>
						) : (
							<Navigate replace to="/login" />
						)
					}
				/>

				<Route
					path="/followImg"
					element={
						isInSession ? (
							<>
								<FollowImg />
							</>
						) : (
							<Navigate replace to="/login" />
						)
					}
				/>
				<Route
					path="/followVideos"
					element={
						isInSession ? (
							<>
								<FollowVideos />
							</>
						) : (
							<Navigate replace to="/login" />
						)
					}
				/>

				<Route path="*" element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
