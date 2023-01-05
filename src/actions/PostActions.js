import * as postApi from '../api/PostApi' ;

export const getTimelinePosts = (id) => async (dispatch) => {
    dispatch({type : "RETRIEVING_START"})
    try {
        const {data} = await postApi.getTimelinePosts(id) ;
        dispatch({type: "RETRIEVING_SUCCESS", data: data}) ;
        console.log(data) ;
    } catch (error) {
        dispatch({type: "RETRIEVING_FAILED"}) ;
        console.log(error) ;
    }
}