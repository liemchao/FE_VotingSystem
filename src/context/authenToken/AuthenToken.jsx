import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
// import { handleGetCandidateByIdCampaign } from "context/redux/action/action";
// import { handleGetCampaignById } from "context/redux/action/action";

//----------------------------------------------------------------
export const Authen = createContext();
export const ProviderToken = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [decode, setDecode] = useState([]);

  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    if (token) {
      const decoded = jwt_decode(token);
      setDecode(decoded);
    } else {
      navigate("/");
    }
  }, [dispatch, id]);

  return <Authen.Provider value={{ token, decode }}>{children}</Authen.Provider>;
};
