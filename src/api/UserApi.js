import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/" });

API.interceptors.request.use(req => {
    if(localStorage.getItem("profile")){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
    }
    return req ;
})

export const getUser = (userId) => API.get(`user/${userId}`) ;

export const updateUser = (userId, data) => API.put(`user/${userId}`, data) ;

export const getAllUsers = () => API.get(`user/`) ;

export const followUser = (id, user) => API.put(`user/${id}/follow`, user)

export const unfollowUser = (id, user) => API.put(`user/${id}/unfollow`, user) ;