const initialState = {
  user: {},
  errors: [],
  error: "",
  users: [],
  
  loading: true,
};

export default function store(state = initialState, action) {
  switch (action.type) {
    case "POST_USER":
      return {
        ...state,
        loading: true,
      };
    case "POST_USER_SUCCESSFUL":
      return {
        ...state,
        loading: false,
       
      };
    case "POST_USER_FAIL":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    // FETCH_MORE_BLOGS
    case "FETCH_USERS":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_USERS_SUCCESSFUL":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case "FETCH_USERS_FAIL":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
  
    default:
      return state;
  }
}
