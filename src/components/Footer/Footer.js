import React from "react";
import linkedin from "../../img/iconmonstr-linkedin-3.svg";
import github from "../../img/github-mark.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer__rights">
        <p className="footer__name">
          <span>William</span> Ramos Rosario
        </p>
        <p className="footer__copyrights">0 All Rights Reserved</p>
      </div>
      <div className="footer__socials">
        <img src={linkedin} alt="linkedin" className="footer__social__icons" />
        <img src={github} alt="github" className="footer__social__icons" />
      </div>
    </div>
  );
};
