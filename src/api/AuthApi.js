import axios from 'axios' ;

const API = axios.create({baseURL: "https://sma-server.vercel.app/"}) ;

export const login = (formData) => API.post('/auth/login', formData) ;

export const signUp = (formData) => API.post('/auth/register', formData) ;