import React from "react";
// import {
//   Button,
//   CardActions,
//   CardContent,
//   Card,
//   Typography,
// } from "@material-ui/core/";
// import { makeStyles } from "@material-ui/core/styles";

export default function Services() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="services">
        <p style={{ color: "yellow", textAlign: "center" }}>Services</p>
        <p style={{ color: "yellow", textAlign: "center" }}>
          We can serve you better
        </p>
      </div>

      <div style={{ marginTop: "2%" }}>
        <p style={{ textAlign: "center", fontWeight: "bold" }}>Why Choose Us</p>
        <p style={{ textAlign: "center" }}>
          IformByte or Bytehiveguru offers cool services
        </p>
      </div>
      <div className="serve">
        <p style={{ color: "yellow", textAlign: "center" }}>Services</p>
        <p style={{ color: "yellow", textAlign: "center" }}>
          We can serve you better
        </p>
      </div>
      <div className="serve">
        <p style={{ color: "yellow", textAlign: "center" }}>Services</p>
        <p style={{ color: "yellow", textAlign: "center" }}>
          We can serve you better
        </p>
      </div>
    </div>
  );
}
