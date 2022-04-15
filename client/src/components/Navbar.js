import './Navbar.css'

function Navbar() {
  return (
    <>
      <div class='navBar'>
        <NavbarItem title={'Home'} address={'/'}/>
        <NavbarItem title={'Members'} address={'/members'}/>
        <NavbarItem title={'Schedule'} address={'/schedule'}/>
        <NavbarItem title={'Resources'} address={'/resources'}/>
        <NavbarItem title={'SignupForm'} address={'/signupForm'}/>
      </div>
    </>
  );
}

export function NavbarItem(props) {
    const {title, address} = props;

    return(
        
        <div class='navbar-item'>
            <a href={address} class='navbar-title'>{title}</a>
        </div>
        
    )
}

export default Navbar