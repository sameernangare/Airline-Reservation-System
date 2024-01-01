import React from "react";
import { MDBInputGroup } from "mdb-react-ui-kit";

const FlightList = () => {
  return (
    <div className="container">
      <MDBInputGroup>
        <input className="form-control" placeholder="Origin" type="text" />
        <input className="form-control" placeholder="Destination" type="text" />
        <input className="form-control" placeholder="Departure" type="text" />
        <input className="form-control" placeholder="Return" type="text" />
        <input className="form-control" type="text" />
      </MDBInputGroup>
    </div>
  );
};

export default FlightList;
