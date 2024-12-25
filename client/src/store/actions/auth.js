import actionTypes from "./actionTypes";
import { apiRegister } from "../../services/auth";

export const register = (payload) => async (dispath) => {
  try {
    const response = await apiRegister(payload);
    console.log(response);
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
