const Authreducer = (
  state = { authData: null, loading: false, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: false };
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      localStorage.removeItem("error");
      return { ...state, authData: action.data, loading: false, error: false };
    case "AUTH_ERROR":
      localStorage.setItem("error", JSON.stringify({ ...action?.error }));
      return { ...state, loading: false, error: true };
    case "LOG_OUT":
      localStorage.clear();
      return { ...state, authData: null, loading: false, error: false };
    case "UPDATE_START" :
      return {...state, uploading:true, error:false}
    case "UPDATE_SUCCESS" :
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {...state, authData: action.data, uploading: false, error: false}
    case "UPDATE_ERROR" :
      return { ...state, uploading: false, error: true };
    case "FOLLOW_USER" :
      localStorage.setItem("test", JSON.stringify({ ...action?.data }))
    default:
      return state;
  }
};

export default Authreducer;
