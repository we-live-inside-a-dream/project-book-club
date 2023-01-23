import "./Navbar.css";
import { useState } from "react";
import { useContext } from "react";
import AuthenticationContext from "../AuthenticationContext";

function Navbar() {
  const authContext = useContext(AuthenticationContext);
  return (
    <>
      <div class="signupButton">
        <NavbarItem title={"Sign In / Register"} address={"/signIn"} />
      </div>
      <div class="navBar">
        {authContext.user && <p>{authContext.user.firstName}</p>}
        <NavbarItem title={"Home"} address={"/"} />
        <NavbarItem title={"Members"} address={"/members"} />
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
