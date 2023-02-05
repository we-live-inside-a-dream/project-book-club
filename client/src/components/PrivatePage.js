import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivatePage({ children }) {
  const userData = useSelector((state) => state.user);

  return userData ? children : <Navigate to={"/signIn"} />;
}

export default PrivatePage;
