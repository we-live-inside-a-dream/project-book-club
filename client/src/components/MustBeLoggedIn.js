import { useSelector } from "react-redux";


function MustBeLoggedIn({ children }) {
  const userData = useSelector((state) => state.user);

  return userData ? children : null;
}

export default MustBeLoggedIn;
