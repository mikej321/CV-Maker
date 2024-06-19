import { useState } from "react";
import "./section_2.css";
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

const Section_2 = () => {

  const MotionLink = motion(Link);

  return (
    <motion.div
     className="form_container section_2_container"
     variants={containerVariants}
     initial="initial"
     animate="animate"
     exit="exit"
     >
      <div className="section_2_intro_container">
        <p className="section_title">Personal Info</p>
        <div className="first_row_inputs">
          <div className="first_name_container">
            <label htmlFor="first_name">First Name</label>
            <input type="text" name="first_name" id="first_name" />
          </div>
          <div className="home_number_container">
            <label htmlFor="home_number">Home Number</label>
            <input type="text" name="home_number" id="first_name" />
          </div>
        </div>
        <div className="second_row_inputs">
          <div className="last_name_container">
            <label htmlFor="last_name">Last Name</label>
            <input type="text" name="last_name" id="last_name" />
          </div>
          <div className="mobile_number_container">
            <label htmlFor="mobile_number">Mobile Number</label>
            <input type="text" name="mobile_number" id="mobile_number" />
          </div>
        </div>
        <div className="third_row_inputs">
          <div className="personal_website_container">
            <label htmlFor="personal_website">Personal Website</label>
            <input type="text" name="personal_website" id="personal_website" />
          </div>
          <div className="office_number_container">
            <label htmlFor="office_number">Office Number</label>
            <input type="text" name="office_number" id="office_number" />
          </div>
        </div>
        <div className="form_button_container">
          <MotionLink
           to="/CV-Maker/section_1" 
           className="left_arrow_container"
           variants={arrowVariants}
           initial="initial"
           whileHover="hover"
           >
            <div className="left_arrow">&#8592;</div>
          </MotionLink>
          <MotionLink
           to="/CV-Maker/section_3" 
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

export { Section_2 };
