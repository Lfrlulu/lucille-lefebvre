import React from "react";
import image from "../img/about-photo.png";
import image2 from "../img/leaves1.png";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// En bref ????
const words = [
  "Je suis une developpeuse web junior à la recherche d'un stage.",
  "Possédant de bonnes bases en React et Javascript,",
  "je m'adapte à tous types de projets et d'équipes.",
  "J'ai de plus quelques connaissances en Python.",
  "La logique de programmation me passionne.",
];


let wordVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
  hidden: { opacity: 0, scale: 0 },
};

// console.log(wordVariants.visible.transition.duration);

const tileVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

function Word({ word, className }) {
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
      className={className}
      initial="hidden"
      variants={wordVariants}
    >
      {word}
    </motion.div>
  );
}

function TileQualities() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 1 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const displayWords = words.map((word, i) => {
    // demander à Fred pourquoi ça s'incremente tout seule???
    // for (let j = 0; j < words.length; j++) {
    //   wordVariants.visible.transition.duration ++
    //   console.log(wordVariants.visible.transition.duration)
    // }

    if (i % 2 === 0) {
      return <Word key={i} word={word} className="even" />;
    } else {
      return <Word key={i} word={word} className="odd" />;
    }
  });

  return (
    <motion.div
      className="tile"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={tileVariants}
    >
      {/* {displayWords} */}
      <Word 
        word={words}
      />
    </motion.div>
  );
}


export const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div id="about">
      {/* Allows the image to appear more quickly. Observe the div sign and not the motion.div(which is the image) */}
      <div className="sign" ref={ref}></div>
      <motion.div
        className="container-image"
        animate={controls}
        initial="hidden"
        variants={tileVariants}
      >
        <img src={image} alt="" />
      </motion.div>
      <div className="container ">
        <TileQualities />
      </div>
      <img src={image2} alt="" className="leave1"/>
    </div>
  );
};
