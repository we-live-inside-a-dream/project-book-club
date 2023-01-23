import { createContext } from "react";

const AuthenticationContext = createContext({
  user: "",
  logIn: () => {},
  logOut: () => {},
});

export default AuthenticationContext;
