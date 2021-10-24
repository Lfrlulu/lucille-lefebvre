import { React, useState } from "react";

export const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  return (
    <div
      className="navbar"
      style={
        isClick
          ? { backgroundColor: "rgba(0, 0, 0, 0.5)" }
          : { backgroundColor: "transparent" }
      }
    >
      <div className="container">
        <nav>
          <div className="flex-nav">
            <div className="logo">
              <div>Lucille Lefebvre</div>
            </div>
            <div className="links">
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#projects">Projets</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div
              onClick={() => {
                setisClick(isClick ? false : true);
              }}
              className="hamburger-btn"
            >
              <i className="fas fa-bars"></i>
            </div>
          </div>
          <div
            className="hamburger-links"
            style={isClick ? { display: "block" } : { display: "none" }}
          >
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projets</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
