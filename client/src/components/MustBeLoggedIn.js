import { useContext } from "react";
import AuthenticationContext from "../AuthenticationContext";

function MustBeLoggedIn({ children }) {
  const authContext = useContext(AuthenticationContext);
  return authContext.user ? children : null;
}

export default MustBeLoggedIn;
