import React from "react";

export default function Contact() {
  return (
    <div className="vh-100 py-5" style={{ backgroundColor: "#e3f2fd", display: "flex", flexDirection: "column" }}>
      <div className="container" style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <h1 className="text-decoration-underline">Contact Us</h1>
          <h4 className="fw-bold">Prof. Linjiang Chen</h4>
          <h5>School of Chemistry</h5>
          <h5>University of Birmingham, Edgbaston</h5>
          <h5>Birmingham B15 2TT</h5>
          <h5>United Kingdom</h5>
          <h5 className="fw-semibold mx-1">Email: <a href="mailto:l.j.chen@bham.ac.uk">l.j.chen@bham.ac.uk</a></h5>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src="/maps.jpeg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>
      <div className="container">
        {/* Rest of the content */}
      </div>
    </div>
  );
}
