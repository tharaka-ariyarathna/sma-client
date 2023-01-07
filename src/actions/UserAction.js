import { async } from '@firebase/util';
import * as userApi from '../api/UserApi' ;

export const updateUser = (id, userData) => async(dispatch) => {
    dispatch({type: "UPDATE_START"})
    try {
        const data = await userApi.updateUser(id, userData) 
        dispatch({type:"UPDATE_SUCCESS", data:data})
    } catch (error) {
        dispatch({type:"UPDATE_ERROR"})
    }
}

export const followUser = (id, user) => async(dispatch) => {
    dispatch({type: "FOLLOW_USER", userId : id})
    await userApi.followUser(id, user) ;
}