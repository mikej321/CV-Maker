import { useState } from "react";
import "./section_4.css";
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

const Section_4 = () => {
  return (
    <motion.div
     className="form_container section_4_container"
     variants={containerVariants}
     initial="initial"
     animate="animate"
     exit="exit"
     >
      <div className="section_4_intro_container">
        <div className="section_title">Education History</div>
        <div className="school_name_input_container">
          <label htmlFor="school_name">School Name</label>
          <input type="text" name="school_name" id="school_name" />
        </div>
        <div className="school_location_input_container">
          <label htmlFor="school_location">School Location</label>
          <input type="text" name="school_location" id="school_name" />
        </div>
        <div className="dates_worked_container">
          <div className="start_date_container">
            <label htmlFor="start_date">Start Date</label>
            <input type="date" name="start_date" id="start_date" />
          </div>
          <div className="end_date_container">
            <label htmlFor="end_date">End Date</label>
            <input type="date" name="end_date" id="end_date" />
          </div>
        </div>
        <div className="degree_container">
          <label htmlFor="degree">Degree</label>
          <input type="text" name="degree" id="degree" />
        </div>
        <div className="field_of_study_container">
          <label htmlFor="field_of_study">Field of Study</label>
          <input type="text" name="field_of_study" id="field_of_study" />
        </div>
        <div className="accomplishments_container">
          <label htmlFor="accomplishments">Accomplishments</label>
          <textarea
            name="accomplishments"
            id="accomplishments"
            cols="33"
            rows="5"
            placeholder="What are some things that you are proud of accomplishing in this establishment?"
          ></textarea>
        </div>
        <div className="form_button_container">
          <Link to="/CV-Maker/section_3" className="left_arrow_container">
            <div className="left_arrow">&#8592;</div>
          </Link>
          <Link to="/CV-Maker/section_5" className="right_arrow_container">
            <div className="right_arrow">&#8594;</div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export { Section_4 };
