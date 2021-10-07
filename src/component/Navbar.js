import React from "react";
import { Component } from "react";

console.log(window.location)
export class Navbar extends Component {


  state={
    autoplay: false,
    text: "hello"
  }

  // changeToSpan(){
  //   let div = document.querySelector(".letterMe");
  //   let str = div.innerText;
  //   div.innerText= "";
  //   for (let i = 0; i < str.length; i++) {
  //     let span = document.createElement("span");
  //     span.innerText = str[i];
  //     div.appendChild(span);
  //   }

  // }

  render(){
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
                      <a href="/">
                        Home
                      </a>
                    </li>
                  
                    <li>
                      <a href="#about">
                        About
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
  }
};
