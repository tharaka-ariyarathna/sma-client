import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/" });

export const uploadImage = (data) => API.post("/upload/", data);

export const uploadPost = (data) => API.post("/post/", data);

//App URL - https://sma-server.vercel.app/
//Local URL - http://localhost:5000/
