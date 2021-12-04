import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//Reducers
import { loginReducer } from "../reducers/login.reducer";
import { errorReducer } from "../reducers/error.reducer";
import { profileReducer } from "../reducers/profile.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
	session: loginReducer,
	error: errorReducer,
	profile: profileReducer,
});

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);
