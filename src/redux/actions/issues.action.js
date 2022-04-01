import axios, { setAuthToken } from "./axiosService";

export const getIssues = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_iSSUES" });
    let payload = [];
    const response = await axios.get(`/api/issues`);
    const { data } = response;

    payload = data;
    dispatch({ type: "FETCH_ISSUES_SUCCESSFUL", payload });
    return;
  } catch (error) {
    // console.log(error);
  }
};

export const postIssues = (data) => async (dispatch) => {
  try {
    dispatch({ type: "POST_ISSUE" });
    await setAuthToken(axios);

    const response = await axios.post(`/api/issues`, data);
    let payload = [];
    payload = response;

    dispatch({ type: "POST_ISSUE_SUCCESSFUL", payload });
    return payload;
  } catch (error) {
    let payload = "";
    if (error.response === undefined) {
      payload = "timeout";
      dispatch({ type: "POST_ISSUE_FAIL", payload });
      throw error;
    } else {
      var obj = error.response.data;
      payload = obj.errors.issue[0];
      dispatch({ type: "POST_ISSUE_FAIL", payload });

      throw error;
    }
  }
};
