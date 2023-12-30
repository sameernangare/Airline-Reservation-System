import React, { useState } from "react";
import plane from "../../assets/AirplaneLogo.jpg";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBRadio,
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

export default function Login() {
  return (
    <>
      <MDBContainer className="bg[#e9ebee]">
        <MDBCard
          className="text-black m-5 bg-gra"
          style={{ borderRadius: "25px" }}
        >
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage src={plane} fluid />
              </MDBCol>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Login
                </p>

                <div className="d-flex flex-row align-items-center mb-4 w-75">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput label="Your Email" id="form2" type="email" />
                </div>

                <div className="d-flex flex-row align-items-center mb-4 w-75">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput label="Password" id="form3" type="password" />
                </div>

                <div className="mb-4">
                  <MDBRadio
                    name="inlineRadio"
                    id="inlineRadio1"
                    value="option1"
                    label="User"
                    inline
                  />
                  <MDBRadio
                    name="inlineRadio"
                    id="inlineRadio2"
                    value="option2"
                    label="Admin"
                    inline
                  />
                  <MDBRadio
                    name="inlineRadio"
                    id="inlineRadio3"
                    value="option3"
                    label="Vendor"
                    inline
                  />
                </div>

                <MDBBtn className="mb-4" size="lg">
                  Login
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}
