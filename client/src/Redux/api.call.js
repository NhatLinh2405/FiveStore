import { loginFailure, loginStart, loginSuccess } from "./user.redux";
import { pubRequest } from "../utils/request";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await pubRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
