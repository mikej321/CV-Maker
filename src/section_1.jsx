import { useState, useEffect, useRef } from "react";
import "./section_1.css";
import { Nav_bar } from "./nav_bar";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
    initial: {
        x: "100vw",
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1,
            ease: "easeIn",
        }
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: .5,
            ease: "easeOut",
        }
    },
    exit: {
        x: "-100vw",
        opacity: 0,
        transition: {
            type: "spring",
            duration: .5,
            ease: "easeIn"
        }
    }
}

const arrowVariants = {
  initial: {
    scale: 1
  },
  hover: {
    scale: [.95, 1.1],
    transition: {
      type: "spring",
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      duration: 1,
      stiffness: 120,
      mass: 1,
      damping: 20,
    } 
  }
}

const errorVariants = {
  initial: {
    opacity: 0,
    transition: {
      type: "spring",
      ease: "easeOut",
      duration: .5,
      delay: .25,
    }
  },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      ease: "easeOut",
      duration: .5,
      delay: .25,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      type: "spring",
      ease: "easeIn",
      duration: .5,
    }
  }
}

const Section_1 = ({ sectionStatus, setSectionStatus }) => {
  const MotionLink = motion(Link);
  const [sectionComplete, setSectionComplete] = useState(false);
  const textAreaRef = useRef();

  const checkIntroSection = (e) => {
    if (e.target.value !== "") {
      e.target.dataset.error = "false";
      setSectionComplete(true);
    } else {
      e.target.dataset.error = "true";
      setSectionComplete(false);
    }
  }

  const setIntroSectionData = (e) => {
    if (e.target.classList.contains("right_arrow_container")) {
      setSectionStatus((prev) => ({
        ...prev,
        section_1: {
          complete: true,
          intro_data: textAreaRef.current.value,
        }
      }))
    }
  }

  
  return (
    <motion.div
     className="form_container section_1_container"
     variants={containerVariants}
     initial="initial"
     animate="animate"
     exit="exit"
     >
      <div className="section_1_intro_container">
        <h1 className="section_title">Intro Section</h1>
        <div className="intro_input_container">
          <label htmlFor="intro_text_area">
            Introduce yourself to employers
          </label>
          <motion.textarea
            name="intro_text_area"
            id="intro_text_area"
            ref={textAreaRef}
            rows="5"
            cols="33"
            maxLength="500"
            placeholder="Describe yourself in up to 5 sentences"
            autoFocus
            onChange={(e) => checkIntroSection(e)}
          ></motion.textarea>
          <AnimatePresence mode="wait">
          {
            !sectionComplete && (
                <motion.p
                 className="error"
                 variants={errorVariants}
                 initial="initial"
                 exit="exit"
                 >Please fill out this area
                </motion.p>
                )
              }
          </AnimatePresence>
        </div>
        <div className="form_button_container">
          <MotionLink
           to="/CV-Maker" 
           className="left_arrow_container"
           variants={arrowVariants}
           initial="initial"
           whileHover="hover"
           >
            <div className="left_arrow">&#8592;</div>
          </MotionLink>
          <MotionLink
           to="/CV-Maker/section_2" 
           className={!sectionComplete ? "right_arrow_container" : "right_arrow_container proceed"}
           variants={arrowVariants}
           initial="initial"
           whileHover="hover"
           onClick={(e) => setIntroSectionData(e)}
           >
            <motion.div
             className="right_arrow"
             >&#8594;</motion.div>
          </MotionLink>
        </div>
      </div>
    </motion.div>
  );
};

export { Section_1 };
