import axios from "axios";
import { SearchData } from "../data/searchData";

const API = axios.create({ baseURL: "http://localhost:5000/" });

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

export const followUser = (id, user) => API.put(`user/${id}/follow`, user) ;

export const unfollowUser = (id, user) => API.put(`user/${id}/unfollow`, user) ;

export const getSearchResults = (data) => API.get('user/search/result',{params : {username: data}}) ;