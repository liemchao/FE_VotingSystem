/// gọi axios
import * as PathAction from "./../PathAction";
import jwt_decode from "jwt-decode";

import { URL_API } from "../../axios/Url/URL";
import API from "../../axios/API/API";
import { CustomizedToast } from "../../components/toast/ToastCustom";

export const createAction = ({ type, payload }) => {
  return { type, payload };
};

export const LoginAthen = (user, navigate) => {
  return async (dispatch) => {
    try {
      const res = await API("POST", URL_API + `/api/Authen/login`, user);
      localStorage.setItem("token", res.data.data.token);
      const detoken = jwt_decode(res.data.data.token);
      dispatch(
        createAction({
          type: PathAction.LOGIN_USER,
          payload: res.data.data,
        })
      );
      if (detoken.RoleName === "admin") {
        navigate("/dashboard/user");
        CustomizedToast({
          message: "Thành công rồi nha",
          type: "SUCCESS",
        });
      } else if (detoken.RoleName === "user") {
        navigate("/dashboard/hihi");
        CustomizedToast({
          message: "Thành công rồi nha",
          type: "SUCCESS",
        });
      }
    } catch (error) {
      CustomizedToast({
        message: "Tên đăng nhập hoặc mật khẩu sai",
        type: "ERROR",
      });
    }
  };
};
