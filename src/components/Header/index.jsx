import React from "react";
import RightIcon from "../../assets/icons/right-icon.png";
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
        <button>
          Contact us <img src={RightIcon} alt="right-icon" />
        </button>
      </div>
    </div>
  );
};

export default Header;
