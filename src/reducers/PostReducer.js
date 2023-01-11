const PostReducer = (
  state = { posts: [], loading: false, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    case "UPLOAD_START":
      return { ...state, uploading: true, error: false };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        posts: [action.data, ...state.posts],
        error: false,
        uploading: false,
      };
    case "UPLOAD_FAIL":
      return { ...state, error: true, uploading: false };
    case "RETRIEVING_START":
      return { ...state, loading: true, error: false };
    case "RETRIEVING_SUCCESS":
      console.log(action.data) ;
      return {
        ...state,
        posts: action.data,
        loading: false,
        error: false,
      };
    case "RETRIEVING_FAILED":
      return { ...state, error: true, loading: false };
    case "LOG_OUT":
      localStorage.clear();
      return { ...state, posts: [], loading: false, error: false };
    default:
      return state;
  }
};

export default PostReducer;
