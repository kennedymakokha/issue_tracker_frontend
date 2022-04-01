import axios, { setAuthToken } from "./axiosService";

export const getServices = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_SERVICES" });
    let payload = [];
    const response = await axios.get(`/api/services`);
    const { data } = response;
    const { services } = data;
   
    payload = services;

    dispatch({ type: "FETCH_SERVICES_SUCCESSFUL", payload });
    return;
  } catch (error) {
    console.log(error);
  }
};

export const postservice = (data) => async (dispatch) => {
  try {
    dispatch({ type: "POST_USER" });
    await setAuthToken(axios);
    // alert(formData)
    const response = await axios.post(`/api/services`, data);
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
      var obj = error.response.data;
      payload =
        error.response && error.response.data.message
          ? error.response.data.message
          : obj[Object.keys(obj)[0]];
      dispatch({ type: "POST_USER_FAIL", payload });
      throw error;
    }
  }
};
