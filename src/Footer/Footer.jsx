import React from "react";
import { Container } from "react-bootstrap";
import './Footer.css'

function Footer() {
  return (
    <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4>Our Newsletter</h4>
              <p>Join us in celebrating life's moments with purpose, one plant at a time, as we work towards planting 1 trillion trees by 2050.</p>
            </div>
            <div className="col-lg-6">
              {/* <form action="" method="post">
                <input type="email" name="email"><input type="submit" value="Subscribe"></input>
              </form> */}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="/Home">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/about">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/services">Services</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="">Terms of service</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="">Privacy policy</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Plant Delivery</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Plant Care App</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Occassion Planning</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Eco Friendly Celebrations</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Green Occasion <br />
                Hyderabad, IN 500084<br />
                India <br /><br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
              </p>

            </div>

            <div className="col-lg-3 col-md-6 footer-info">
              <h3>About Green Occasion</h3>
              <p>"At Green Occasion, we're dedicated to promoting eco-friendly celebrations that make a positive impact on the environment. We're driven by a passion for sustainability and a love for greenery, making us your partner in creating meaningful, eco-conscious moments." </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>

          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Green Occasion</span></strong>. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;