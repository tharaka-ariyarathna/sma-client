import { async } from "@firebase/util";
import * as userApi from "../api/UserApi";

export const updateUser = (id, userData) => async (dispatch) => {
  dispatch({ type: "UPDATE_START" });
  try {
    const data = await userApi.updateUser(id, userData);
    dispatch({ type: "UPDATE_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "UPDATE_ERROR" });
  }
};

export const followUser = (id, user) => async (dispatch) => {
  const data = await userApi.followUser(id, user);
  dispatch({ type: "FOLLOW_USER", data: data });
};

export const unfollowUser = (id, user) => async (dispatch) => {
  const { data } = await userApi.unfollowUser(id, user);
  dispatch({ type: "UNFOLLOW_USER", data: data });
};

export const getProfileUser = (id) => async (dispatch) => {
  dispatch({type: "RETRIEVE_USER_START"})
  const data = await userApi.getUser(id);
  dispatch({ type: "RETRIEVE_USER_SUCCESS", data: data.data });
};
