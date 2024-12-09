import React from "react";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
  <div>
    <a href="https://www.instagram.com/neechaltech" target="_blank" rel="noopener noreferrer">
      <BsInstagram />
    </a>
  </div>
  <div>
    <a href="https://www.linkedin.com/company/neechal" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn />
    </a>
  </div>
  <div>
    <a href="https://www.facebook.com/neechaltech" target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
    </a>
  </div>
  <div>
    <a href="https://www.youtube.com/@neechal" target="_blank" rel="noopener noreferrer">
      <BsYoutube />
    </a>
  </div>
</div>

  );
};

export default SocialMedia;
