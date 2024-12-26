import actionTypes from "./actionTypes";
import { apiRegister, apiLogin } from "../../services/auth";

export const register = (payload) => async (dispath) => {
  try {
    const response = await apiRegister(payload);
    if (response?.data.err === 0) {
      dispath({
        type: actionTypes.REGISTER_SUCCESS,
        data: response.data.token,
      });
    } else {
      dispath({
        type: actionTypes.REGISTER_FAIL,
        data: response.data.msg,
      });
    }
  } catch (error) {
    dispath({
      type: actionTypes.REGISTER_FAIL,
      data: null,
    });
  }
};
export const login = (payload) => async (dispath) => {
  try {
    const response = await apiLogin(payload);
    if (response?.data.err === 0) {
      dispath({
        type: actionTypes.LOGIN_SUCCESS,
        data: response.data.token,
      });
    } else {
      dispath({
        type: actionTypes.LOGIN_FAIL,
        data: response.data.msg,
      });
    }
  } catch (error) {
    dispath({
      type: actionTypes.LOGIN_FAIL,
      data: null,
    });
  }
};
export const logout = () => ({
  type: actionTypes.LOGOUT,
});
