import axios, { setAuthToken } from "./axiosService";

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_USERS" });
    let payload = [];
    const response = await axios.get(`/api/users`);
    const { data } = response;
    const { users } = data;

    payload = users;

    dispatch({ type: "FETCH_USERS_SUCCESSFUL", payload });
    return;
  } catch (error) {
    console.log(error);
  }
};

export const postuser = (data) => async (dispatch) => {
  try {
    dispatch({ type: "POST_USER" });
    await setAuthToken(axios);

    const response = await axios.post(`/api/users`, data);
    let payload = [];
    payload = response;

    dispatch({ type: "POST_USER_SUCCESSFUL", payload });
    return payload;
  } catch (error) {
    let payload = "";
    if (error.response === undefined) {
      payload = "timeout";
      dispatch({ type: "POST_USER_FAIL", payload });
      throw error;
    } else {
      console.log(error);
      // dispatch({ type: "POST_USER_FAIL", payload });
      // throw ;
    }
  }
};

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: "POST_USER" });
    await setAuthToken(axios);

    const response = await axios.post(`/api/login`, data);
    let payload = [];
    payload = response.data;
    alert(JSON.stringify(payload));

    dispatch({ type: "POST_USER_SUCCESSFUL", payload });
    localStorage.setItem("token", JSON.stringify(payload.token));
    return payload;
  } catch (error) {
    let payload = "";
    if (error.response === undefined) {
      payload = "timeout";
      dispatch({ type: "POST_USER_FAIL", payload });
      throw error;
    } else {
      console.log(error);
      // dispatch({ type: "POST_USER_FAIL", payload });
      // throw ;
    }
  }
};
