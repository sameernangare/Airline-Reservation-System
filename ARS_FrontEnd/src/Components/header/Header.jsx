import { Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import logo from "../../assets/AirplaneLogo.png";


const Header = () => {
  return (
    <div style={{ height: "10vh" }} className="bgCol">
      <Navbar className="navbar navbar-expand-lg navbar-light d-flex justify-content-between px-4">
        <nav className="navbar-light">
          <a href="#">
            <img src={logo} width="40" height="40" alt="LOGO"></img>
          </a>
        </nav>
        <div className="d-flex">
          <nav className=" navbar-loght text-dark  my-2 my-sm-0 px-2">
            <span>SignUp</span>
          </nav>
          <nav className="navbar navbar-dark text-light px-2">
          <a href="/login">SignIn</a>
          <nav className="navbar-light text-dark px-2">
            <span>SignIn</span>
          </nav>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
