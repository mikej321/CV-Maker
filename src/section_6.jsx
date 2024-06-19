import { useState } from "react";
import "./section_6.css";
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

const Section_6 = () => {

  const MotionLink = motion(Link);

  return (
    <motion.div
     className="form_container section_6_container"
     variants={containerVariants}
     initial="initial"
     animate="animate"
     exit="exit"
     >
      <div className="section_6_intro_container">
        <div className="section_title">Skills</div>
        <div className="skill_name_input_container">
          <label htmlFor="skill_name">Skill Name</label>
          <input type="text" id="skill_name" name="skill_name" />
        </div>
        <div className="proficiency_input_container">
          <label htmlFor="proficiency">Proficiency</label>
          <input type="text" name="proficiency" id="proficiency" />
        </div>
        <div className="form_button_container">
          <MotionLink
           to="/CV-Maker/section_5" 
           className="left_arrow_container"
           variants={arrowVariants}
           initial="initial"
           whileHover="hover"
           >
            <div className="left_arrow">&#8592;</div>
          </MotionLink>
          <MotionLink
           to="/CV-Maker/section_7" 
           className="right_arrow_container"
           variants={arrowVariants}
           initial="initial"
           whileHover="hover"
           >
            <div className="right_arrow">&#8594;</div>
          </MotionLink>
        </div>
      </div>
    </motion.div>
  );
};

export { Section_6 };
