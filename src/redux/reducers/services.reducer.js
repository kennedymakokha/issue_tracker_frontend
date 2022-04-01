const initialState = {
  service: {},
  errors: [],
  error: "",
  services: [],
  loading: true,
};

export default function store(state = initialState, action) {
  switch (action.type) {
    case "POST_SERVICE":
      return {
        ...state,
        loading: true,
      };
    case "POST_SERVICE_SUCCESSFUL":
      return {
        ...state,
        loading: false,
      };
    case "POST_SERVICE_FAIL":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    // FETCH_MORE_BLOGS
    case "FETCH_SERVICES":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SERVICES_SUCCESSFUL":
      return {
        ...state,
        loading: false,
        services: action.payload,
      };
    case "FETCH_SERVICES_FAIL":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
}
