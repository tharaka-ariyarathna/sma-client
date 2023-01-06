import axios from "axios";

const API = axios.create({ baseURL: "https://sma-server.vercel.app/" });

export const getUser = (userId) => API.get(`user/${userId}`) ;

export const updateUser = (userId, data) => API.put(`user/${userId}`, data) ;