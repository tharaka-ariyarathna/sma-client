import axios from "axios" ;

const API = axios.create({ baseURL: "https://sma-server.vercel.app/" });

export const getTimelinePosts = (id) => API.get(`post/${id}/timeline`) ;

export const likePost = (postId, userId) => API.put(`post/${postId}/like`, {userId: userId}) ;

