import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Buttons from "../Elements/Button";
import Inputs from "../Elements/Input";

const FormLogin = () => {
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response);
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data);
        console.log(error.response.data);
      }
    }
  };

  return (
    <form
      className="w-full max-w-md p-8 bg-white rounded shadow-md"
      onSubmit={Login}
    >
      <div className="flex justify-center">
        {
          <p className="text-red-500 text-xs italic items-center">
            {errorMessage.errors}
          </p>
        }
      </div>
      <Inputs
        id="email"
        name="email"
        type="username"
        placeholder="Enter your email"
        label="Email"
        value={email}
        onChange={(e) => setUserEmail(e.target.value)}
      ></Inputs>
      <Inputs
        id="password"
        name="password"
        type="password"
        placeholder="Enter your password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></Inputs>
      <Buttons type="submit" margin={"mt-4"}>
        Sign In
      </Buttons>
    </form>
  );
};

export default FormLogin;
