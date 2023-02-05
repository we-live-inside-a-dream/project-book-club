import { useSelector } from "react-redux";
import { selectUser } from "../redux/slice/userSlice";

function MustBeLoggedIn({ children }) {
  const userData = useSelector(selectUser);
  console.log("userData-mustBeLoggedIn", userData);

  return userData ? children : null;
}

export default MustBeLoggedIn;
