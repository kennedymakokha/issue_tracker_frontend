const initialState = {
  issue: {},
  errors: [],
  error: "",
  issues: [],
  resolved: [],
  unresolved: [],
  loading: true,
};

export default function store(state = initialState, action) {
  switch (action.type) {
    case "POST_ISSUE":
      return {
        ...state,
        loading: true,
      };
    case "POST_ISSUE_SUCCESSFUL":
      return {
        ...state,
        loading: false,
      };
    case "POST_ISSUE_FAIL":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    // FETCH_MORE_BLOGS
    case "FETCH_ISSUES":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_ISSUES_SUCCESSFUL":
      return {
        ...state,
        loading: false,
        issues: action.payload.issues,
        raised: action.payload.raised,
        resolved: action.payload.resolved,
        unresolved: action.payload.unresolved,
      };
    case "FETCH_ISSUES_FAIL":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
}
