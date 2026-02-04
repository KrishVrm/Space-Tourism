import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  document.body.style.overflow = isOpen ? "hidden" : "";

  return (
    <header>
      <div
        style={{ display: isOpen ? "flex" : "none" }}
        className="hamburger_menu"
      ></div>
      <nav
        style={{ display: isOpen ? "flex" : "none" }}
        className="mobile_menu"
      >
        <NavLink onClick={(e) => setOpen(false)} to="/" className="nav_links">
          <strong>00</strong>
          <div>HOME</div>
        </NavLink>
        <NavLink
          onClick={(e) => setOpen(false)}
          to="/destination"
          className="nav_links"
        >
          <strong>01</strong>
          <div>DESTINATION</div>
        </NavLink>
        <NavLink
          onClick={(e) => setOpen(false)}
          to="/crew"
          className="nav_links"
        >
          <strong>02</strong>
          <div>CREW</div>
        </NavLink>
        <NavLink
          onClick={(e) => setOpen(false)}
          to="/technology"
          className="nav_links"
        >
          <strong>03</strong>
          <div>TECHNOLOGY</div>
        </NavLink>
      </nav>
      <nav className="header_nav">
        <Link to="/">
          <svg
            className="logo"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
          >
            <g fill="none" fill-rule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </Link>
        <Hamburger
          distance="lg"
          rounded
          color="#d0d6f9"
          size={32}
          className="hamburger"
          toggled={isOpen}
          toggle={setOpen}
        />
        <nav className="desktop_menu">
          <NavLink to="/" className="nav_links">
            <strong>00</strong>
            <div>HOME</div>
          </NavLink>
          <NavLink to="/destination" className="nav_links">
            <strong>01</strong>
            <div>DESTINATION</div>
          </NavLink>
          <NavLink to="/crew" className="nav_links">
            <strong>02</strong>
            <div>CREW</div>
          </NavLink>
          <NavLink to="/technology" className="nav_links">
            <strong>03</strong>
            <div>TECHNOLOGY</div>
          </NavLink>
        </nav>
      </nav>
    </header>
  );
};
