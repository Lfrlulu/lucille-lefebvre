import video from "./vid/bg-video-HD.mp4";
import "./sass/App.scss";
import Typewriter from "typewriter-effect";
import { Navbar } from "./component/Navbar";
import { About } from "./component/About";
import { Contact } from "./component/Contact";
import image from "./img/jungle-white-2.png";
import image2 from "./img/photo-mobile.jpg";
import { Projects } from "./component/Projects";
import { React, useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log(isMobile);
  });

  const VideoOrImage = () => {
    if (isMobile) {
      return(
        <img src={image2} alt="" className="bg-image" />
      );
    } else {
      return(
        <video
        loop={true}
        autoPlay={true}
        muted={true}
        className="fullscreen-bg-video"
      >
        <source src={video} type="video/mp4" />
      </video>
      );
    }

  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className="header-content">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Bienvenue sur mon portofolio !")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Venez decouvrir")
                .pauseFor(2000)
                .typeString(" mon travail")
                .pauseFor(2500)
                .deleteChars(11)
                .pauseFor(3500)
                .typeString("ma personnalité")
                .deleteAll()
                .start();
            }}
            options={{
              loop: true,
            }}
          />
        </div>
        <div className="container-image">
          <img src={image} alt="" srcSet="" />
        </div>
        {/* <video
          loop={true}
          autoPlay={true}
          muted={true}
          className="fullscreen-bg-video"
        >
          <source src={video} type="video/mp4" />
        </video> */}
        <VideoOrImage />
        <div className="header-content-icon">
          <i className="fa fa-3x fa-arrow-down"></i>
        </div>
      </header>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
