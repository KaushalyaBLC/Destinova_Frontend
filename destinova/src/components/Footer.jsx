import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Logo from "../assets/coloredlogo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-dark text-light pt-4">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Branding Section */}
          <div className="col-md-4 d-flex align-items-center">
          <img src={Logo} alt="" style={{height:"100px"}}/>
            <div>
            <h5 className="fw-bold">Destinova</h5>
            <p className="text-secondary">Your Guid Star to a Brighter Future.</p>
            </div>
            
           
          </div>

          {/* Quick Links */}
          <div className="col-md-4  border-start border-secondary d-flex justify-content-center align-items-center">
            <div>
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="text-light text-decoration-none" onClick={()=>{navigate('/career-vision')}}>Career Insights</li>
              <li className="text-light text-decoration-none" onClick={()=>{navigate('/meet-nova')}}>Meet Nova</li>
              <li className="text-light text-decoration-none" onClick={()=>{navigate('/wisdom-gateway')}}>Wisdom Gateway</li>
            </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4  border-start border-secondary d-flex justify-content-center align-items-center">
            <div>
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="#" className="text-light"><FaFacebookF size={20} /></a>
              <a href="#" className="text-light"><FaTwitter size={20} /></a>
              <a href="#" className="text-light"><FaLinkedinIn size={20} /></a>
              <a href="#" className="text-light"><FaInstagram size={20} /></a>
            </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-secondary border-secondary mt-4 border-top pt-3">
          <p className="pb-3 mb-0 text-center ">© {new Date().getFullYear()} Destinova. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
