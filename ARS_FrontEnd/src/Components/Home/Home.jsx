import React from "react";
import "./Home.css";
import { MDBInput, MDBCard, MDBCardBody, MDBBtn } from "mdb-react-ui-kit";

const Home = () => {
  return (
    <div className="container my-5">
      <MDBCard className="pt-5">
        <MDBCardBody className="d-flex mx-1 px-2 gap-2">
          <div className="d-flex flex-column">
            <label>
              <h3>From</h3>
            </label>
            <MDBInput label="Source" id="source" type="text" name="source" />
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
