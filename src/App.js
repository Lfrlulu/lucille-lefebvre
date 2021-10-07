import video from './vid/bg-video-HD.mp4'
import './App.scss';
import Typewriter from 'typewriter-effect';
import { Navbar } from './component/Navbar';
import { About } from './component/About'
// import image from "./img/jungle-dessinmodif3.png"
import image from "./img/jungle-white-2.png"
import image2 from "./img/feuille-cover-color.png"



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
      </header>
      <About/> 
    </div>
  );
}

export default App;
