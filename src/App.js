import video from './vid/bg-video-HD.mp4'
import './sass/App.scss';
import Typewriter from 'typewriter-effect';
import { Navbar } from './component/Navbar';
import { About } from './component/About';
import { Contact } from './component/Contact';
import image from "./img/jungle-white-2.png"
import { Projects } from './component/Projects';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <div className="header-content">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Bienvenue sur mon portofolio !')
              .pauseFor(2500)
              .deleteAll()
              .callFunction(()=> {
                console.log("All strings were deleted");
              }).typeString("Venez decouvrir")
              .pauseFor(2000).typeString(" mon travail").pauseFor(2500)
              .deleteChars(11).pauseFor(3500).typeString("ma personnalité")
              .deleteAll()
              .start();
            }}
            options={{
              loop:true,
            }}
          />
          
        </div>
        <div className="container-image">
          <img src={ image } alt="" srcset="" />
        </div>
        <video loop={true} autoPlay={true} muted={true} className="fullscreen-bg-video">
          <source src={video} type="video/mp4" />
        </video>
        <div class="header-content-icon"><i class="fa fa-3x fa-arrow-down"></i></div>
      </header>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
