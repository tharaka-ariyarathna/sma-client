import axios from 'axios' ;

const API = axios.create({baseURL: "https://sma-server.vercel.app/"}) ;

export const uploadImage = (data) => API.post("/upload/", data);

export const uploadPost = (data) => API.post('/post/', data) ;