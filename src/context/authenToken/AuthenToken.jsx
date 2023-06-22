import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

//----------------------------------------------------------------
export const Authen = createContext();
export const ProviderToken = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [decode, setDecode] = useState([]);

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
    try {
      const decoded = jwt_decode(token);
      setDecode(decoded);
      if (decoded.RoleName === "admin") {
        navigate("/admin/account");
      } else if (decoded.RoleName === "user") {
        navigate("/user/campaign");
      }
    } catch (error) {
      navigate("/");
    }
  }, []);

  return <Authen.Provider value={{ token, decode }}>{children}</Authen.Provider>;
};
