// Footer.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 ">
      <div className="container p-3">
        <div className="row">
          <div className="col-md-4">
            {/* Contact-inform mation */}
            <h5>Contact Us</h5>
            <p>Email: mi@gmail.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <p>Facebook | Twitter | Instagram</p>
          </div>
          <div className="col-md-4">
            <h5>Subscribe to our Newsletter</h5>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                aria-label="Your Email"
                aria-describedby="basic-addon2"
              />
              {/* Subscribe button */}
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Mi Store. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
