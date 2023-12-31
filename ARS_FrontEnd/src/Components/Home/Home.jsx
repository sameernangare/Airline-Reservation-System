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

const Home = () => {
  return (
    <>
      <section
        id="home-hero"
        style={{
          height: "95vh",
          borderRadius: "0 0 3rem 3rem",
        }}
      >
        <div className="container my-5">
          <MDBTypography
            variant="h1"
            className="text-center gap-1 text-white mt-2 fw-bold"
          >
            Create Ever-Lasting <br />
            &nbsp;&nbsp;Memories With Us
          </MDBTypography>

          <MDBCard className="pt-5 px-3 bgCol">
            <div className="d-flex m-auto">
              <div>
                <button className="btn btn-secondary btn-lg p-3 px-5 rounded-left  button-left">
                  economy
                </button>
              </div>
              <div>
                <button className="btn btn-secondary btn-lg p-3 px-5 rounded-0">
                  Business Class
                </button>
              </div>
              <div>
                <button className="btn btn-secondary btn-lg p-3 px-5 rounded-right  button-right">
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
                  label="Source"
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
                <MDBBtn rounded className="px-5 py-2 mt-2 mx-5">
                  Search Flights
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
      </section>
      <section
        style={{ height: "100vh", backgroundColor: "rgba(255, 0, 0, 0.1)" }}
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
