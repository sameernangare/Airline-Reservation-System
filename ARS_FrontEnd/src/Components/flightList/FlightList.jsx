import React from "react";
import {
  MDBInputGroup,
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

const FlightList = () => {
  return (
    <div className="container d-flex flex-column">
      <MDBInputGroup className="height">
        <input className="form-control" placeholder="Origin" type="text" />
        <input className="form-control" placeholder="Destination" type="text" />
        <input className="form-control" placeholder="Departure" type="text" />
        <input className="form-control" placeholder="Return" type="text" />
        <input className="form-control" type="text" />
      </MDBInputGroup>
      <br />
      <hr />
      <br />
      <br />

      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Airline</th>
            <th scope="col">Departure</th>
            <th scope="col">Arrival</th>
            <th scope="col">Duration</th>
            <th scope="col">Price</th>
            <th></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                {/* <img
                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                /> */}
                <div className="ms-3">
                  <p className="fw-bold mb-1">Air India</p>
                  <p className="text-muted mb-0">AI-816</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">21:10</p>
              <p className="text-muted mb-0">Mumbai (BOM)</p>
            </td>
            <td>
              <p className="fw-normal mb-1">21:10</p>
              <p className="text-muted mb-0">Mumbai (BOM)</p>
            </td>
            <td>
              <p className="fw-normal mb-1">21:10</p>
              <p className="text-muted mb-0">Mumbai (BOM)</p>
            </td>
            <td>
              <p className="fw-normal mb-1">Rs 5660</p>
            </td>
            <td>
              <MDBBtn color="link" rounded size="sm">
                Book
              </MDBBtn>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                {/* <img
                  src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                /> */}
                <div className="ms-3">
                  <p className="fw-bold mb-1">IndiGo</p>
                  <p className="text-muted mb-0">6E-2224</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">15:20</p>
              <p className="text-muted mb-0">Mumbai (BOM)</p>
            </td>
            <td>
              <p className="fw-normal mb-1">21:10</p>
              <p className="text-muted mb-0">Mumbai (BOM)</p>
            </td>
            <td>
              <p className="fw-normal mb-1">21:10</p>
              <p className="text-muted mb-0">Mumbai (BOM)</p>
            </td>
            <td>
              <p className="fw-normal mb-1">Rs 4999</p>
            </td>
            <td>
              <MDBBtn color="link" rounded size="sm">
                Book
              </MDBBtn>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                {/* <img
                  src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                /> */}
                <div className="ms-3">
                  <p className="fw-bold mb-1">Vistara</p>
                  <p className="text-muted mb-0">UK-944</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">12:05</p>
              <p className="text-muted mb-0">Mumbai (BOM)</p>
            </td>
            <td>
              <p className="fw-normal mb-1">21:10</p>
              <p className="text-muted mb-0">Mumbai (BOM)</p>
            </td>
            <td>
              <p className="fw-normal mb-1">21:10</p>
              <p className="text-muted mb-0">Mumbai (BOM)</p>
            </td>
            <td>
              <p className="fw-normal mb-1">Rs 5000</p>
            </td>
            <td>
              <MDBBtn color="link" rounded size="sm">
                Book
              </MDBBtn>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default FlightList;

{
  /* <div className="card">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Airline</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Duration</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Air India</td>
                <td>21:00</td>
                <td>23:!0</td>
                <td>2h 10m</td>
                <td>Rs 5000</td>
                <td>
                  <button>Book</button>
                </td>
              </tr>

              <tr>
                <td>Air India</td>
                <td>21:00</td>
                <td>23:!0</td>
                <td>2h 10m</td>
                <td>Rs 5000</td>
                <td>
                  <button>Book</button>
                </td>
              </tr>

              <tr>
                <td>Air India</td>
                <td>21:00</td>
                <td>23:!0</td>
                <td>2h 10m</td>
                <td>Rs 5000</td>
                <td>
                  <button>Book</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */
}
