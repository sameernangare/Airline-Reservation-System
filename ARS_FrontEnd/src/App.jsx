import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./App.css";
import Header from "./Components/header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/authentication/Login";
import FlightList from "./Components/flightList/FlightList";


function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/flights" exact element={<FlightList />}></Route>
        </Routes>
      </Router>
    </>
    // <div><SignUp /></div>
  );
}

export default App;
