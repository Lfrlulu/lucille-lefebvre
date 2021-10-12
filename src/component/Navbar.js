import React from "react";

export const Navbar = ()=> {

    return (
      <div className="navbar">
          <div className="container">
            <nav>
              <div className="flex-nav">
                <div className="logo">
                  <div>Lucille Lefebvre</div>
                </div>
                <div className="links">
                  <ul>
                  
                    <li>
                      <a href="#about">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#projects">
                        Projets
                      </a>
                    </li>
                    <li>
                      <a href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
      </div>
    );
};
