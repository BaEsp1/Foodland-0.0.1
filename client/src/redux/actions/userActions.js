import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  GET_USERS,
  USER_BAN,
  SET_USERS,
  SORT_USER,
  USER_DELETE,
} from "../constants/userConstants";
import Axios from "axios";

// const URL = process.env.REACT_APP_URL ?? "http://localhost:5000";
const URL = "https://foodland-production.up.railway.app";

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: email, password });
  try {
    const { data } = await Axios.post(`${URL}/api/users/signin`, {
      email,
      password,
    });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_SIGNOUT });
};

export const signIn = (user) => (dispatch) => {
  if (user.name && user.email) {
    dispatch({
      type: USER_SIGNIN_REQUEST,
      payload: { email: user.email, password: user.email },
    });
    Axios.post(`${URL}/api/users/signin`, {
      email: user.email,
      password: user.email,
    })
      .then(({ data }) => {
        if (data._id) {
          dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
          localStorage.setItem("userInfo", JSON.stringify(data));
        }
      })
      .catch((error) => {
        Axios.post(`${URL}/api/users/signup`, {
          name: user.name,
          email: user.email,
          password: user.email,
        })
          .then(({ data }) => {
            dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
            localStorage.setItem("userInfo", JSON.stringify(data));
          })
          .catch((error) =>
            dispatch({
              type: USER_SIGNIN_FAIL,
              payload:
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
            })
          );
      });
  } else {
    dispatch({ type: USER_SIGNIN_FAIL, payload: "Third party login failure" });
  }
};

//Acción para crear un usuario
export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: name, email, password });
  try {
    const { data } = await Axios.post(`${URL}/api/users/signup`, {
      name,
      email,
      password,
    });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//action para obtener la lista de usuarios:
export const get_users = (token) => {
  return async (dispatch) => {
    try {
      const response = await Axios.get(`${URL}/api/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch({
        type: GET_USERS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_USERS,
        payload: error,
      });
    }
  };
};

export const put_user = ({ id, token, isAdmin = false, active = true }) => {
  return async (dispatch) => {
    try {
      const updateUser = await Axios.put(
        `${URL}/api/users/${id}`,
        { isAdmin, active },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch({
        type: GET_USERS,
        payload: updateUser.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_USERS,
        payload: error,
      });
    }
  };
};

export const set_users = (payload) => {
  return {
    type: SET_USERS,
    payload,
  };
};

export const sort_user = ({ value, users }) => {
  let datasort;

  if (value === "all") {
    datasort = users;
  } else if (value === "NameAsc") {
    datasort = users?.slice().sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (value === "NameDsc") {
    datasort = users?.slice().sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      } else if (a.name > b.name) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (value === "bann") {
    datasort = users.filter((u) => u.active === false);
  } else if (value === "EmailAsc") {
    datasort = users?.slice().sort(function (a, b) {
      if (a.email < b.email) {
        return -1;
      } else if (a.email > b.email) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (value === "EmailDsc") {
    datasort = users?.slice().sort(function (a, b) {
      if (a.email < b.email) {
        return 1;
      } else if (a.email > b.email) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (value === "Users") {
    datasort = users
      ?.slice()
      ?.sort(function (a, b) {
        return a.isAdmin === b.isAdmin ? 0 : a.isAdmin ? -1 : 1;
      })
      ?.filter(function (u) {
        return !u.isAdmin;
      });
  } else if (value === "Admin") {
    datasort = users
      ?.slice()
      ?.sort(function (a, b) {
        return a.isAdmin === b.isAdmin ? 0 : a.isAdmin ? -1 : 1;
      })
      ?.filter(function (u) {
        return u.isAdmin;
      });
  }
  return {
    type: SORT_USER,
    payload: datasort,
  };
};

export const update_users = (_id, isAdmin, user, token) => {
  return async (dispatch) => {
    try {
      const updateUser = await Axios.put(
        `${URL}/api/users/profile/${_id}`,
        { user, isAdmin },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch({
        type: GET_USERS,
        payload: updateUser.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_USERS,
        payload: error,
      });
    }
  };
};

export const ban_user = ({ id, token, isAdmin = false, active = false }) => {
  return async (dispatch) => {
    try {
      const updateActive = await Axios.put(
        `${URL}/api/users/${id}`,
        { isAdmin, active },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch({
        type: USER_BAN,
        payload: updateActive.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: USER_BAN,
        payload: error,
      });
    }
  };
};
