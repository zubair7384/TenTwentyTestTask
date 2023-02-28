import React from "react";
import RightIcon from "../../assets/icons/right-icon.svg";
import Hamburger from "../../assets/icons/hamburger.svg";
import "./header.scss";

const navList = [
  {
    title: "About",
    link: "/",
  },
  {
    title: "News",
    link: "/",
  },
  {
    title: "Services",
    link: "/",
  },
  {
    title: "Our Team",
    link: "/",
  },
  {
    title: "Make Enquiry",
    link: "/",
  },
];

const Header = () => {
  return (
    <div className="navebar">
      <div className="navbar-wrapper">
        <ul>
          {navList.map((item) => {
            return (
              <li key={item.title}>
                <a src={item.link}>{item.title}</a>
              </li>
            );
          })}
        </ul>
        <button className="contact-button">
          Contact us
          <img className="left-icon" src={RightIcon} alt="right-icon" />
        </button>
        <button className="hamburger-button">
          <img className="hamburger" src={Hamburger} alt="hamburger" />
        </button>
      </div>
    </div>
  );
};

export default Header;
