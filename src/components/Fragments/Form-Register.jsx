import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Buttons from "../Elements/Button";
import Inputs from "../Elements/Input";

const FormRegister = () => {
  const [email, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/users", {
        email: email,
        name: name,
        password: password,
      });
      console.log(response);
      navigate("/login");
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
      onSubmit={Register}
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
        type="email"
        placeholder="Enter your email"
        label="Email"
        value={email}
        onChange={(e) => setUsername(e.target.value)}
      ></Inputs>
      <Inputs
        id="name"
        name="name"
        type="name"
        placeholder="Enter your name"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
        Sign Up
      </Buttons>
    </form>
  );
};

export default FormRegister;
