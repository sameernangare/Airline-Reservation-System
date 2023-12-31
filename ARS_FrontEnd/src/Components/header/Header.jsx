import { Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div>
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between px-4">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            <img src={logo} width="40" height="40" alt="LOGO"></img>
          </a>
        </nav>
        <div className="d-flex">
          <nav className="navbar navbar-dark text-light  my-2 my-sm-0 px-2">
            <span>SignUp</span>
          </nav>
          <nav className="navbar navbar-dark text-light px-2">
            <span>SignIn</span>
          </nav>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
