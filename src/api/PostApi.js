import axios from "axios" ;

const API = axios.create({ baseURL: "http://localhost:5000/" });

export const getTimelinePosts = (id) => API.get(`post/${id}/timeline`) ;

export const likePost = (postId, userId) => API.put(`post/${postId}/like`, {userId: userId}) ;

export const getAllUserPosts = (id) => API.get(`post/${id}/profile`) ;