import { useState, useEffect } from "react";
import { logIn } from "../api/user";

// Hook is a function that starts with "use..." and we can use hooks inside the function such as: useState, useEffect, useRef...
export const useLogIn = () => {
  const [credentials, setCredentials] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (credentials) {
      setIsLoading(true);
      logIn(credentials.user, credentials.pass)
        .then((res) => {
          setUserData(res);
          setIsLoading(false);
        })
        .catch((error) => {
          setError("User does not exist", error);
        });
    }
  }, [credentials]);

  return { setCredentials, isLoading, userData, error };
};
