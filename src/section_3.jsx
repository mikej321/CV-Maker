import { useState } from "react";
import "./section_3.css";
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

const Section_3 = () => {
  return (
    <motion.div
     className="form_container section_3_container"
     variants={containerVariants}
     initial="initial"
     animate="animate"
     exit="exit"
     >
      <div className="section_3_intro_container">
        <div className="section_title">Employment History</div>
        <div className="employer_name_input_container">
          <label htmlFor="employer_name">Employer Name</label>
          <input type="text" name="employer_name" id="employer_name" />
        </div>
        <div className="employer_location_input_container">
          <label htmlFor="employer_location">Employer Location</label>
          <input type="text" name="employer_location" id="employer_location" />
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
        <div className="job_duties_container">
          <label htmlFor="job_duties">Job Duties</label>
          <textarea
            name="job_duties"
            id="job_duties"
            rows="5"
            cols="33"
            placeholder="What are some of the duties performed in your role?"
          ></textarea>
        </div>
        <div className="form_button_container">
          <Link to="/CV-Maker/section_2" className="left_arrow_container">
            <div className="left_arrow">&#8592;</div>
          </Link>
          <Link to="/CV-Maker/section_4" className="right_arrow_container">
            <div className="right_arrow">&#8594;</div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export { Section_3 };
