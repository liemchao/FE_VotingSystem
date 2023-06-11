import React, { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

//----------------------------------------------------------------
export const Authen = createContext();
export const Provider = ({ children }) => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
    try {
      const decoded = jwt_decode(token);
      if (decoded.RoleName === "admin") {
        navigate("/dashboard/user");
      } else if (decoded.RoleName === "user") {
      }
    } catch (error) {
      navigate("/");
    }
  }, []);

  return <Authen.Provider value={{ token }}>{children}</Authen.Provider>;
};
