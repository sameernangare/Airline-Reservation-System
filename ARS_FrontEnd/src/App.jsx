import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./App.css";
import SignUp from "./Components/registration/SignUp";
import Header from "./Components/header/Header";
import Login from "./Components/authentication/Login";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
        </Routes>
      </Router>
    </>
    // <div><SignUp /></div>
  );
}

export default App;
