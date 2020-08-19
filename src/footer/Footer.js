import React from "react";
import {MDBFooter,MDBContainer,MDBRow, MDBCol} from 'mdbreact'

function Footer() {
  return (
    <div style={{ backgroundColor: "#D0D3D4", height: "40%" }}>
    <MDBFooter className="font-small pt-4 mt-4 ">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">About Bytehiveguru</h5>
            <p>Bytehiveguru content here, contact, phone</p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Our contacts and location</h5>
            <p>Plot 3309 Koro road. Located opposite old Kabaka's palace</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; Mushi Concepts {new Date().getFullYear()} 
        </MDBContainer>
      </div>
    </MDBFooter>
  </div>
     

        
  );
}
export default Footer;
