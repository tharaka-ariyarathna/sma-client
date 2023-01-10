import axios from "axios";

const API = axios.create({ baseURL: "https://sma-server.vercel.app/" });

API.interceptors.request.use(req => {
    if(localStorage.getItem("profile")){
        //console.log(JSON.parse(localStorage.getItem("profile")).token) ;
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
    }
    return req ;
})

export const getUser = (userId) => API.get(`user/${userId}`) ;

export const updateUser = (userId, data) => API.put(`user/${userId}`, data) ;

export const getAllUsers = () => API.get(`user/`) ;

export const followUser = (id, user) => API.put(`user/${id}/follow`, user)

export const unfollowUser = (id, user) => API.put(`user/${id}/unfollow`, user) ;
