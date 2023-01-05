import { combineReducers } from "redux";
import Authreducer from "./AuthReducer";
import PostReducer from "./PostReducer";

export const reducers = combineReducers({ Authreducer, PostReducer });
