import "./Navbar.css";
import MustBeLoggedIn from "./MustBeLoggedIn";
import { useSelector } from "react-redux";
import { logOut } from "../api/user";
import { selectUser } from "../redux/slice/userSlice";

function Navbar() {
  const userData = useSelector(selectUser);
  console.log("userData", userData);
  return (
    <>
      <div class="signupButton">
        {!userData ? (
          <NavbarItem title={"Sign In / Register"} address={"/signIn"} />
        ) : (
          <button className="navbar-item" onClick={logOut}>
            logOut
          </button>
        )}
        {/* <MustBeLoggedIn>
          <button className="navbar-item" onClick={logOut}>
            logOut
          </button>
        </MustBeLoggedIn> */}
      </div>
      <div class="navBar">
        {userData && <p>Hello {userData.firstName}</p>}
        <NavbarItem title={"Home"} address={"/"} />
        <MustBeLoggedIn>
          <NavbarItem title={"Members"} address={"/members"} />
        </MustBeLoggedIn>
        <NavbarItem title={"Schedule"} address={"/schedule"} />
        <NavbarItem title={"Resources"} address={"/resources"} />
      </div>
    </>
  );
}

export function NavbarItem(props) {
  const { title, address } = props;

  return (
    <div class="navbar-item">
      <a href={address} class="navbar-title">
        {title}
      </a>
    </div>
  );
}

export default Navbar;
