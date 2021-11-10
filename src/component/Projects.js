import React from "react";
import image from "../img/logo-clean3000.png"

export const Projects = () => {
  return (
    <div id="projects">
      <div className="container">
        <h1>Mes projets</h1>
        <div className="flex-container">
            <div className="projet">
                <a href="https://lfrlulu.github.io/Clean3000-app/#/" target="_blank">
                    <img src={image} alt="" />
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};
