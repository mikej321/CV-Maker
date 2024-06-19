import { useState } from "react";
import "./section_5.css";
import { Nav_bar } from "./nav_bar";
import { Form_buttons } from "./form_button";
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

const Section_5 = () => {
  return (
    <motion.div
     className="form_container section_5_container"
     variants={containerVariants}
     initial="initial"
     animate="animate"
     exit="exit"
     >
      <div className="section_5_intro_container">
        <div className="section_title">References</div>
        <div className="reference_name_input_container">
          <label htmlFor="reference_name">Reference Name</label>
          <input type="text" name="reference_name" id="reference_name" />
        </div>
        <div className="reference_location_input_container">
          <label htmlFor="reference_location">Reference Location</label>
          <input
            type="text"
            name="reference_location"
            id="reference_location"
          />
        </div>
        <div className="relationship_container">
          <label htmlFor="relationship">Relationship</label>
          <input type="text" name="relationship" id="relationship" />
        </div>
        <div className="contact_information_container">
          <label htmlFor="contact_information">Contact Information</label>
          <input
            type="text"
            name="contact_information"
            id="contact_information"
          />
        </div>
        <div className="form_button_container">
          <Link to="/CV-Maker/section_4" className="left_arrow_container">
            <div className="left_arrow">&#8592;</div>
          </Link>
          <Link to="/CV-Maker/section_6" className="right_arrow_container">
            <div className="right_arrow">&#8594;</div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export { Section_5 };
