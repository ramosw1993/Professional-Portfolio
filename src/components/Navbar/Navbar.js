import React, { useEffect, useState } from "react";
import "./Navbar.css";
import bars from "../../img/menu-symbol-of-three-parallel-lines-svgrepo-com.svg";
import linkedin from "../../img/iconmonstr-linkedin-3.svg";
import github from "../../img/github-mark.svg";
import email from "../../img/icons8-mail.svg";
import close from "../../img/211652_close_icon.svg";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="Navbar">
      <nav>
        <div className="logo">
          <span className="logo__span">William</span>Ramos Rosario
        </div>
        {(toggleMenu || screenWidth > 1024) && (
          <ul className="list">
            <li className="links">
              <a href="#about">About</a>
            </li>
            <li className="links">
              <a href="#projects">Projects</a>
            </li>
            <li className="links">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )}
        <div className="menuIcons">
          {toggleMenu ? (
            <img
              src={close}
              className="menu__icon"
              onClick={() => setToggleMenu(false)}
              alt=""
            />
          ) : (
            <img
              src={bars}
              className="menu__icon"
              onClick={() => setToggleMenu(true)}
              alt=""
            />
          )}
        </div>
        <div className="navbar__socials">
          <div className="navbar__linkedinDiv">
            <img src={linkedin} alt="linkedin" />
            <p>LinkedIn</p>
          </div>
          <div className="navbar__githubDiv">
            <img src={github} alt="githubDiv" />
            <p>Github</p>
          </div>
          <a href="#contact">
            <img src={email} className="navbar__email" alt="email" />
          </a>
        </div>
      </nav>
    </div>
  );
};
