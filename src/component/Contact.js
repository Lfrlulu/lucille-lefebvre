import React from "react";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image from "../img/contact-photo2.png";

const tileVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

let wordVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
  hidden: { opacity: 0, scale: 0 },
};

function Word() {
    // Allow the text to come later
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      className="word"
      initial="hidden"
      variants={wordVariants}
    >
      <button
        onClick={() => {
          window.open(
            `${process.env.PUBLIC_URL}../pdf/LucilleLefebvreDev.pdf`
          );
        }}
      >
        <i class="fas fa-cloud-upload-alt"></i>CV{" "}
      </button>
      {/* <a href={process.env.PUBLIC_URL + '../pdf/LucilleLefebvreDev.pdf'} target="_blank"><button><i class="fas fa-cloud-upload-alt"></i>CV </button></a> */}
      <ul>
        Vous pouvez me contacter par :
        <li>
          <a href="mailto:someone@example.com">
            <i class="fas fa-envelope"></i>
          </a>{" "}
          lucille.lefebvre.pro@gmail.com
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lucille-lefebvre-1907a983/">
            <i class="fab fa-linkedin"></i>
          </a>{" "}
          Linkedin
        </li>
      </ul>
    </motion.div>
  );
}

function TileContact() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="tile"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={tileVariants}
    >
      <Word/>
    </motion.div>
  );
}

function ContainerImage() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="tile"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={tileVariants}
    >
      <img src={image} alt="" />
    </motion.div>
  );
}
export const Contact = () => {
  return (
    <div id="contact">
      <ContainerImage />
      <div className="container">
        <TileContact />
      </div>
    </div>
  );
};
