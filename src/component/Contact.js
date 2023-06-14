import React from "react";

export default function Contact() {
  return (
    <div className="vh-100 py-5" style={{ backgroundColor: "#e3f2fd", display: "flex", flexDirection: "column" }}>
      <div className="container" style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <h1 className="text-decoration-underline " style={{ color: '#3cb043' }}>Contact Us</h1>
          <h4 className="fw-bold">Prof. Linjiang Chen</h4>
          <h5>School of Chemistry</h5>
          <h5>University of Birmingham, Edgbaston</h5>
          <h5>Birmingham B15 2TT</h5>
          <h5>United Kingdom</h5>
          <h5 className="fw-semibold mx-1">
            Email: <a className="text-black" href="mailto:l.j.chen@bham.ac.uk">l.j.chen@bham.ac.uk</a>
          </h5>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7846.259622828046!2d-1.9413429286374602!3d52.447127752218314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bdca311bf965%3A0xa3028ea5e5ed3b98!2sSchool%20of%20Chemistry!5e0!3m2!1sen!2suk!4v1686753892378!5m2!1sen!2suk" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="container">
        {/* Rest of the content */}
      </div>
    </div>
  );
}
