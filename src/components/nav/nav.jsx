import React, { useState } from "react";
import "./nav.css";
import { AiFillHome , AiOutlineUser, AiOutlineBook, AiOutlineMessage} from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { HashLink as NavLink } from "react-router-hash-link";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  return (
    <nav>
      <NavLink
        smooth
        to="/#header"
        onClick={() => handleNavClick("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiFillHome />
      </NavLink>

      <NavLink
        smooth
        to="/#about"
        onClick={() => handleNavClick("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </NavLink>
      <NavLink
        smooth
        to="/#experience"
        onClick={() => handleNavClick("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <AiOutlineBook />
      </NavLink>

      <NavLink
        smooth
        to="/#services"
        onClick={() => handleNavClick("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </NavLink>

      <NavLink
        smooth
        to="/#contact"
        onClick={() => handleNavClick("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </NavLink>
    </nav>
  );
};

export default Nav;
