import { combineReducers } from "redux";
import Authreducer from "./AuthReducer";
import postReducer from "./PostReducer";

export const reducers = combineReducers({Authreducer, postReducer}) ;