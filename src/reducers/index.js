import { combineReducers } from "redux";
import Authreducer from "./AuthReducer";
import PostReducer from "./PostReducer";
import ProfileReducer from "./ProfileReducer";

export const reducers = combineReducers({ Authreducer, PostReducer, ProfileReducer });
