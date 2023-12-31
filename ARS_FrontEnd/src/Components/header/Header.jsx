import { Navbar } from "react-bootstrap";
import logo from "../../assets/AirplaneLogo.png";

const Header = () => {
  return (
    <div style={{ height: "6vh" }} className="bgCol">
      <Navbar className="navbar navbar-expand-lg navbar-light d-flex justify-content-between px-4">
        <nav className="navbar-light bg-light">
          <a href="#">
            <img src={logo} width="40" height="40" alt="LOGO"></img>
          </a>
        </nav>
        <div className="d-flex">
          <nav className=" navbar-loght text-dark  my-2 my-sm-0 px-2">
            <span>SignUp</span>
          </nav>
          <nav className="navbar-light text-dark px-2">
            <span>SignIn</span>
          </nav>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
