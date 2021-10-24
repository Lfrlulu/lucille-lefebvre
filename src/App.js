import video from "./vid/bg-video-HD.mp4";
import "./sass/App.scss";
import Typewriter from "typewriter-effect";
import { Navbar } from "./component/Navbar";
import { About } from "./component/About";
import { Contact } from "./component/Contact";
import image from "./img/jungle-white-2.png";
import image2 from "./img/photo-mobile.jpg";
import { Projects } from "./component/Projects";
import { React, useState, useEffect, useRef } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const [isLoadding, setIsLoadding] = useState(true);

  const videoEl = useRef(null);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      setIsLoadding(false);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    console.log(isLoadding);
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    // console.log(videoEl.current);
    // console.log(isMobile);
    // console.log(isLoadding);
  });

  useEffect(() => {
    videoEl.current.addEventListener("loadeddata", () => {
      console.log(videoEl.current.readyState);
      if (videoEl.current.readyState >= 3){
        setIsLoadding(false);
      }
    });
  });

  const VideoOrImage = () => {
    if (isMobile) {
      return <img src={image2} alt="" ref={videoEl} className="bg-image" />;
    } else {
      return (
        <video
          ref={videoEl}
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

  if (isLoadding) {
    return (
      <div className="App">
        <div className="loading">
          <div className="wrapper-box">
            <div className="box"></div>
          </div>
          <div className="water"></div>
        </div>
        <div className="hidden">
          <VideoOrImage 
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <div className="header-content">
            <div className="container">
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
          </div>
          <div className="container-image">
            <img src={image} alt="" srcSet="" />
          </div>
          {/* <video
            loop={true}
            autoPlay={true}
            ref={videoEl}
            muted={true}
            className={isMobile ? "hidden" : "fullscreen-bg-video"}
            // className="fullscreen-bg-video"
          >
            
            <source src={video} type="video/mp4" />
          </video>
          <img src={image2} alt="" className={isMobile ? "bg-image" : "hidden"} /> */}
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
}

export default App;
