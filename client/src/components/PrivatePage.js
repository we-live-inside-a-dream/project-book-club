import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthenticationContext from "../AuthenticationContext";

function PrivatePage({ children }) {
  const authContext = useContext(AuthenticationContext);
  console.log("user is logged in", authContext.user);

  return authContext.user ? children : <Navigate to={"/signIn"} />;
  // if (authContext.user) {
  //   return <>{children}</>;
  // }
  // return <Navigate to={"/signIn"} />;
}

export default PrivatePage;