import "./Navbar.css";
import { useContext } from "react";
import AuthenticationContext from "../AuthenticationContext";
import MustBeLoggedIn from "./MustBeLoggedIn";

function Navbar() {
  const authContext = useContext(AuthenticationContext);
  return (
    <>
      <div class="signupButton">
        {!authContext.user && (
          <NavbarItem title={"Sign In / Register"} address={"/signIn"} />
        )}
        <MustBeLoggedIn>
          <button className="navbar-item" onClick={authContext.logOut}>
            logOut
          </button>
        </MustBeLoggedIn>
      </div>
      <div class="navBar">
        {authContext.user && <p>Hello {authContext.user.firstName}</p>}
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
