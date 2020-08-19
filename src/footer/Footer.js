import React from "react";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <h4>Contact us</h4>
            <ul className="list-unstyled">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            <h4>Contact us</h4>
            <ul className="list-unstyled">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <h4>Contact us</h4>
            <ul className="list-unstyled">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <h2> Follow us</h2>
            <p>Please follow us on our Social Media Profile to keep updated.</p>
           
              <a href="https://www.facebook.com/cobs.okia" ><i class="fa fa-facebook"></i></a>
             <a href="https://www.facebook.com/cobs.okia" ><i class="fa fa-twitter"></i></a>
              <a href="https://www.facebook.com/cobs.okia"><i class="fa fa-instagram" ></i></a>
              <a href="https://www.linkedin.com/in/jacob-okia-1ba0b8117/"><i class="fa fa-linkedin"></i>linkedin</a>
           
          </div>
        </div>

        <div className="footer-bottom">
            <p className="text-xs-center">
                &copy;{new Date().getFullYear()} Mushi Concepts. All rights reserved.
            </p>

        </div>
      </div>
    </div>
  );
}
export default Footer;
