import React from "react";
import Footer from "../footer/Footer";

import "./Home.css";

import {
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBTypography,
  MDBCarousel,
  MDBCarouselItem,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section
        id="home-hero"
        style={{
          height: "95vh",
          borderRadius: "0 0 4rem 4rem",
        }}
      >
        <div className="container my-5">
          <MDBTypography
            variant="h1"
            className="text-center gap-1 text-white m-5 fw-bold"
          >
            <br />
            Create Ever-Lasting <br />
            &nbsp;&nbsp;Memories With Us
          </MDBTypography>

          <MDBCard className="pt-5 px-3 bgCol cardBg">
            <div className="d-flex m-auto">
              <div>
                <button className="btn btn-secondary btn-lg p-3 px-5 rounded-left text-dark button-left">
                  economy
                </button>
              </div>
              <div>
                <button className="btn btn-secondary btn-lg p-3 px-5 rounded-0 text-dark">
                  Business Class
                </button>
              </div>
              <div>
                <button className="btn btn-secondary btn-lg p-3 px-5 rounded-right text-dark button-right">
                  First Class
                </button>
              </div>
            </div>
            <MDBCardBody className="d-flex mx-1 my-3 px-2 gap-2 ">
              <div className="d-flex flex-column">
                <label>
                  <h3>From</h3>
                </label>
                <MDBInput
                  label="Origin"
                  id="source"
                  type="text"
                  name="source"
                />
              </div>
              <div>
                <label>
                  <h3>To</h3>
                </label>
                <MDBInput
                  label="Destination"
                  id="source"
                  type="text"
                  name="destination"
                />
              </div>
              <div>
                <label>
                  <h3>Check In</h3>
                </label>
                <MDBInput
                  label="Add Date"
                  id="checkIn"
                  type="text"
                  name="checkIn"
                />
              </div>
              <div>
                <label>
                  <h3>Check Out</h3>
                </label>
                <MDBInput
                  label="Add Date"
                  id="checkOut"
                  type="text"
                  name="checkOut"
                />
              </div>
              <div className="">
                <Link to={"/flights"}>
                  <MDBBtn rounded className="px-5 py-3 mt-3 mx-3">
                    <span className="searchBtn">Search</span>
                  </MDBBtn>
                </Link>
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
      </section>
      <section
        style={{
          height: "100vh",
          // backgroundColor: "rgba(255, 0, 0, 0.1)",
          marginTop: "-3rem",
          zIndex: -1,
        }}
      ></section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default Home;

// <div className="search container section">
//   <div className="sectionContainer grid">
//     <div className="btns d-flex">
//       <div className="singleBtn">
//         <span>Economy</span>
//       </div>
//       <div className="singleBtn">
//         <span>Business Class</span>
//       </div>
//       <div className="singleBtn">
//         <span>First Class</span>
//       </div>
//     </div>

//     <div className="searchInputs flex">
//       <div className="singleInput flex">
//         <div className="iconDiv"></div>
//       </div>
//     </div>
//   </div>
// </div>
