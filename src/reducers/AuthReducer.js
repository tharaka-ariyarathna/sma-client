const Authreducer = (
  state = { authData: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: false };
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      localStorage.removeItem("error") ;
      console.log(action.data.data) ;
      return { ...state, authData: action.data, loading: false, error: false };
    case "AUTH_ERROR":
      localStorage.setItem("error", JSON.stringify({ ...action?.error }));
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default Authreducer;
