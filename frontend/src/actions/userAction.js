import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants";
import backend_url from "../components/url.js";
import axios from "axios";

// Common config for axios
const getConfig = (contentType = "application/json") => ({
  headers: { "Content-Type": contentType },
  withCredentials: true,
});

// Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = getConfig();

    const { data } = await axios.post(
      `${backend_url}/api/v1/login`,
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    const errorMsg = error.response?.data?.message || "Login failed";
    dispatch({ type: LOGIN_FAIL, payload: errorMsg });
  }
};

// Register
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = getConfig("multipart/form-data");

    const { data } = await axios.post(
      `${backend_url}/api/v1/register`,
      userData,
      config
    );

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error) {
    const errorMsg = error.response?.data?.message || "Registration failed";
    dispatch({ type: REGISTER_USER_FAIL, payload: errorMsg });
  }
};

// Load User // Get User Details
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(`${backend_url}/api/v1/me`, {
      withCredentials: true,
    });
    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    const errorMsg = error.response?.data?.message || "Failed to load user";
    dispatch({ type: LOAD_USER_FAIL, payload: errorMsg });
  }
};

// Logout
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`${backend_url}/api/v1/logout`, {
      withCredentials: true,
    });

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    const errorMsg = error.response?.data?.message || "Logout failed";
    dispatch({ type: LOGOUT_FAIL, payload: errorMsg });
  }
};

// Update Profile
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const config = getConfig("multipart/form-data");

    const { data } = await axios.put(
      `${backend_url}/api/v1/me/update`,
      userData,
      config
    );

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    const errorMsg = error.response?.data?.message || "Update failed";
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: errorMsg,
    });
  }
};

// Update Password
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const config = getConfig("application/json");

    const { data } = await axios.put(
      `${backend_url}/api/v1/password/update`,
      passwords,
      config
    );

    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    const errorMsg = error.response?.data?.message || "Update failed";
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: errorMsg,
    });
  }
};

// Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const config = getConfig("application/json");

    const { data } = await axios.post(
      `${backend_url}/api/v1/password/forgot`,
      email ,
      config
    );
    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Reset Password
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    const config = getConfig("application/json");

    const { data } = await axios.put(
      `${backend_url}/api/v1/password/reset/${token}`,
      passwords,
      config
    );

    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
