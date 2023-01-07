import {initializeApp} from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqCJ9NrswPu3b_2tFZjB00KPwVn8MfgvQ",
  authDomain: "social-media-app-fdaed.firebaseapp.com",
  projectId: "social-media-app-fdaed",
  storageBucket: "social-media-app-fdaed.appspot.com",
  messagingSenderId: "919637130747",
  appId: "1:919637130747:web:b3e4c5b29318a1e76cdf5e",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app) ;
export default storage;
