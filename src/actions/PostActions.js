import * as postApi from '../api/PostApi' ;

export const getTimelinePosts = (id) => async (dispatch) => {
    dispatch({type : "RETRIEVING_START"})
    try {
        const {data} = await postApi.getTimelinePosts(id) ;
        dispatch({type: "RETRIEVING_SUCCESS", data: data}) ;
    } catch (error) {
        dispatch({type: "RETRIEVING_FAILED"}) ;
        console.log(error) ;
    }
}

export const getAllUserPosts = (id) => async(dispatch) => {
    dispatch({type : "RETRIEVING_START"})
    try {
        const {data} = await postApi.getAllUserPosts(id) ;
        dispatch({type: "RETRIEVING_SUCCESS", data: data}) ;
    } catch (error) {
        dispatch({type: "RETRIEVING_FAILED"}) ;
        console.log(error) ;
    }
}