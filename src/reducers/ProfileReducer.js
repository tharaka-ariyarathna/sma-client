const ProfileReducer = (
    state = {user: null, loading: true, error: false},
    action
) => {
    switch(action.type){
        case "RETRIEVE_USER_START" :
            return {...state, user: null , loading: true, error: false}
        case "RETRIEVE_USER_SUCCESS" :
            return {...state, user: action.data, loading: false, error:false}
        default :
            return state 
    }
}
//{...state, user: action.data, loading: false, error: false}
export default ProfileReducer ;

