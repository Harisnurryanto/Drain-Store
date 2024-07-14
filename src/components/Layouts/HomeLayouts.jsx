import React, { useState, useEffect } from "react";
import Navbar from "../Fragments/Navbar";
import Profil from "../Fragments/Profil";
import ProductHome from "../Fragments/Product-Home";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import imgProfil from "/user.png";

const HomeLayouts = (props) => {
  const { children } = props;
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [token, setToken] = useState("");
  const [expire, setExpired] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/users/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken); // Use jwtDecode correctly
      setName(decoded.name);
      setId(decoded.id);
      setExpired(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/login");
      }
    }
  };

  const axiosJwt = axios.create();

  axiosJwt.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get(
          "http://localhost:3000/api/users/token"
        );
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken); // Use jwtDecode correctly
        setName(decoded.name);
        setExpired(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <div className="flex justify-stretchs">
      <Navbar />
      <div>
        <Profil srcimg={imgProfil} name={name} />
        {React.cloneElement(children, {
          Token: token,
          axiosJwt: axiosJwt,
          Id: id,
        })}
      </div>
      <ProductHome />
    </div>
  );
};

export default HomeLayouts;
