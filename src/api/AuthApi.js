import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/" });

export const login = (formData) => API.post("/auth/login", formData);

export const signUp = (formData) => API.post("/auth/register", formData);

//App URL - https://sma-server.vercel.app/
//Local URL - http://localhost:5000/
