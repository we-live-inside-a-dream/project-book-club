import { useContext } from "react";
import AuthenticationContext from "../AuthenticationContext";

function MustBeLoggedIn({ children }) {
  const authContext = useContext(AuthenticationContext);
  console.log("user is logged in", authContext.user);

  return authContext.user ? children : null;
}

export default MustBeLoggedIn;
