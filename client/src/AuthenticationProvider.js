import React, { useEffect } from "react";
import { useState } from "react";
import AuthenticationContext from "./AuthenticationContext";

const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const getLoggedInUser = async () => {
  //     const response = await fetch(`/api/member/loggedInUser`);
  //     const loggedInUser = await response.json();
  //     if (loggedInUser) {
  //       logIn(loggedInUser.user);
  //     }
  //   };
  //   getLoggedInUser();
  // }, []);

  useEffect(() => {
    if (!user) {
      fetch(`/api/member/loggedInUser`)
        .then((response) => response.json())
        .then((userData) => {
          if (userData) {
            setUser(userData);
          }
        });
    }
  }, []);

  const logIn = async (values) => {
    const response = await fetch(`/api/member/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (response.ok) {
      const userData = await response.json();
      console.log("user data", userData);
      setUser(userData);
      return true;
    } else {
      return false;
    }
  };

  const logOut = () => {
    fetch(`/api/member/login`);
    setUser(null);
  };

  const authContext = {
    user,
    logIn,
    logOut,
  };

  return (
    <AuthenticationContext.Provider value={authContext}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
