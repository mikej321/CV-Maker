import { useState } from "react";
import "./section_7.css";
import { Nav_bar } from "./nav_bar";
import { motion } from "framer-motion";
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

const Section_7 = () => {

  const MotionLink = motion(Link);

  return (
    <motion.div
     className="form_container section_7_container"
     variants={containerVariants}
     initial="initial"
     animate="animate"
     exit="exit"
     >
      <div className="section_7_intro_container">
        <div className="section_title">Hobbies</div>
        <div className="hobbies_input_container">
          <label htmlFor="hobbies">What are some of your hobbies?</label>
          <textarea name="hobbies" id="hobbies" cols="33" rows="5"></textarea>
        </div>
        <div className="form_button_container">
          <MotionLink
           to="/CV-Maker/section_6" 
           className="left_arrow_container"
           variants={arrowVariants}
           initial="initial"
           whileHover="hover"
           >
            <div className="left_arrow">&#8592;</div>
          </MotionLink>
          {/* <MotionLink
           className="right_arrow_container"
           variants={arrowVariants}
           initial="initial"
           whileHover="hover"
           >
            <div className="right_arrow">&#8594;</div>
          </MotionLink> */}
        </div>
      </div>
    </motion.div>
  );
};

export { Section_7 };
