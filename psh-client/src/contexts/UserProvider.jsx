import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
export const AuthContext = createContext();

export const UserProvider = ({ children }) => {
  const MySwal = withReactContent(Swal);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  }, [user, token]);

  const loginUser = async (email, password) => {
    try {
      const response = await axios.post(
        "https://api.psh.com.bd/api/users/login",
        { email, password }
      );

      if (response.status === 200) {
        const { data } = response;
        setUser(data?.user);
        setToken(data?.token);

        setLoading(false);
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const errorMessage = error.response.data.message;
        MySwal.fire({
          icon: "error",
          title: "Login Error",
          text: errorMessage || "Invalid email or password. Please try again.",
        });
        toast.error(errorMessage);
      } else if (error.response && error.response.status === 404) {
        const errorMessage = error.response.data.message;
        MySwal.fire({
          icon: "error",
          title: "Login Error",
          text: errorMessage || "Invalid email or password. Please try again.",
        });
      } else {
        MySwal.fire({
          icon: "error",
          title: "Login Error",
          text: "An error occurred. Please try again later.",
        });
      }
    }
  };

  const registerUser = async (
    firstName,
    email,
    phone,
    password,
    refferCode,
    photos,
    role
  ) => {
    try {
      const response = await axios.post("https://api.psh.com.bd/api/users", {
        firstName,
        email,
        phone,
        password,
        refferCode,
        photos,
      });

      if (response.status === 200) {
        const { data } = response;
        setUser(data.user);
        setToken(data.token);
        setLoading(false);
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const errorMessage = error.response.data.message;
        MySwal.fire({
          icon: "error",
          title: "Login Error",
          text: errorMessage || "Invalid email or password. Please try again.",
        });
      } else if (error.response && error.response.status === 404) {
        const errorMessage = error.response.data.message;
        MySwal.fire({
          icon: "error",
          title: "Login Error",
          text: errorMessage || "Invalid email or password. Please try again.",
        });
      } else {
        MySwal.fire({
          icon: "error",
          title: "Login Error",
          text: "An error occurred. Please try again later.",
        });
      }
    }
  };

  const logoutUser = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loginUser, registerUser, logoutUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
