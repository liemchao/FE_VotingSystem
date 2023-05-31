/// gọi axios
import * as PathAction from "./../PathAction";
import jwt_decode from "jwt-decode";
import API from "axios/API/API";
import { URL_API } from "axios/Url/URL";
import { CustomizedToast } from "components/toast/ToastCustom";

export const createAction = ({ type, payload }) => {
  return { type, payload };
};

export const LoginAthen = (user, navigate) => {
  return async (dispatch) => {
    try {
      const res = await API("POST", URL_API + `/auths/login`, user);
      //   localStorage.setItem("token", res.data.result.access_token);
      //   const detoken = jwt_decode(res.data.result.access_token);
      dispatch(
        createAction({
          type: PathAction.LOGIN_USER,
          payload: res.data.result,
        })
      );
      if (detoken.role === "admin") {
      } else if (detoken.role === "manager") {
      } else if (detoken.role === "kitchen") {
      } else {
        CustomizedToast({
          message: "Tài khoản không có quyền truy cập",
          type: "ERROR",
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
