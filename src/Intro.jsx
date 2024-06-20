import { useState } from 'react';
import './intro.css';
import App from './App';
import { motion, animate, stagger, useAnimate, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const buttonVariants = {
    hover: {
        scale: .9,
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

const svgVariants = {
    initial: {
        pathLength: 0
    },
    animate: {
        pathLength: 1,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
}

const Home = ({ homeStatus, setHomeStatus }) => {

    /* Okay...where I am at now, If I animate it with the way it is currently, it is jarring.
    I think to fix it, I'll have to figure out a way to have the pages display with classes and ONLY
    animate opacity via Framer Motion. Everything else will be changed via classes. I want to do it this way because
    too many things are being animated and I only need opacity to be visually seen. I think if I use data attributes,
    I may be able to give a class over to the element that is fading and the element that will come into view. I'll
    use these data attributes to attach the rest of the css that I don't want framer motion to animate, letting it happen
    under the hood. */

    /* Utilize state to change the pages. If I utilize state, I'll be able to dynamically assign
    classNames and render out elements that I don't want visible without using display or classes. */


    /* If I can, see if I can go about animating the title that is located in the SVG...if it is too difficult,
    I may have to create another logo that I can actually animate. */

    return (
        <motion.div
         className="intro_container"
         variants={containerVariants}
         animate="animate"
         exit="exit"
         >
            <motion.svg
             id="Layer_2" 
             xmlns="http://www.w3.org/2000/svg" 
             width= "350" 
             height="80" 
             viewBox="0 0 260.21 64.57"
             variants={svgVariants}
             initial="initial"
             animate="animate"
             >
                <motion.g
                 id="Layer_1-2"
                 variants={svgVariants}
                 initial="initial"
                 animate="animate"
                 >
                    <motion.path 
                    d="M.81,7.89v-3.61c0-.21.04-.42.12-.62L2.14.62C2.29.26,2.64.02,3.03.02h24.33c.44,0,.86.2,1.13.54l1.02,1.28c.27.34.68.54,1.1.54h54.38c.49,0,.93.31,1.09.77l.87,2.5"
                    fill="#fbe2a9" 
                    stroke="#000" 
                    strokeMiterlimit="10" 
                    strokeWidth=".04"
                    variants={svgVariants}
                    initial="initial"
                    animate="animate"
                    />
                    <motion.path
                     d="M.81,7.89h24.13c.54,0,1.05-.25,1.39-.66" 
                     fill="#fbe2a9" 
                     stroke="#000" 
                     strokeMiterlimit="10" 
                     strokeWidth=".04"
                     variants={svgVariants}
                     initial="initial"
                     animate="animate"
                     />
                    <motion.rect
                     id="Paper" 
                     x="2.38" 
                     y="6.48" 
                     width="66.11" 
                     height="47.06" 
                     fill="#fff" 
                     stroke="#000" 
                     strokeMiterlimit="10" 
                     strokeWidth=".03"
                     variants={svgVariants}
                     initial="initial"
                     animate="animate"
                     />
                    <motion.rect
                     id="Paper-2" 
                     x="2.38" 
                     y="6.48" 
                     width="66.11" 
                     height="47.06" 
                     transform="translate(2.14 -2.36) rotate(3.94)" 
                     fill="#fff" 
                     stroke="#000" 
                     strokeMiterlimit="10" 
                     strokeWidth=".03"
                     variants={svgVariants}
                     initial="initial"
                     animate="animate"
                     />
                    <motion.rect
                     id="Paper-3" 
                     x="3.17" 
                     y="6.48" 
                     width="66.11" 
                     height="47.06" 
                     transform="translate(3.11 -3.4) rotate(5.61)" 
                     fill="#fff" 
                     stroke="#000" 
                     strokeMiterlimit="10" 
                     strokeWidth=".03"
                     variants={svgVariants}
                     initial="initial"
                     animate="animate"
                     />
                    <motion.path
                     d="M87.37,6.54v58.02L.02,64.29V8.79c0-.5.4-.9.9-.9h24.02c.54,0,1.05-.25,1.39-.66.07-.08.13-.17.18-.26l.79-1.42c.27-.5.79-.8,1.36-.8h56.43c.46,0,.91.16,1.27.44l.6.47c.27.22.42.54.42.88Z" 
                     fill="#fbe2a9" 
                     stroke="#000" 
                     strokeMiterlimit="10" 
                     strokeWidth=".04"
                     variants={svgVariants}
                     initial="initial"
                     animate="animate"
                     />
                    <motion.path
                     d="M40.89,40.41c-.18,2.53-1.12,4.52-2.8,5.97-1.68,1.45-3.9,2.18-6.66,2.18-3.01,0-5.38-1.01-7.11-3.04-1.73-2.03-2.59-4.81-2.59-8.35v-1.44c0-2.26.4-4.25,1.19-5.97.8-1.72,1.93-3.04,3.41-3.96,1.48-.92,3.2-1.38,5.16-1.38,2.71,0,4.9.73,6.55,2.18,1.66,1.45,2.61,3.49,2.87,6.12h-4.84c-.12-1.52-.54-2.62-1.27-3.3-.73-.68-1.83-1.02-3.32-1.02-1.61,0-2.82.58-3.62,1.73-.8,1.16-1.21,2.95-1.23,5.38v1.78c0,2.54.38,4.39,1.15,5.57.77,1.17,1.98,1.76,3.64,1.76,1.5,0,2.61-.34,3.35-1.03.74-.68,1.16-1.74,1.27-3.17h4.84Z" 
                     fill="none" 
                     stroke="#12355b" 
                     strokeLinecap="round" 
                     strokeLinejoin="round"
                     variants={svgVariants}
                     initial="initial"
                     animate="animate"
                     />
                    <motion.path
                     d="M56.22,42.41l5.33-17.67h5.39l-8.18,23.5h-5.05l-8.15-23.5h5.37l5.29,17.67Z" 
                     fill="none" 
                     stroke="#12355b" 
                     strokeLinecap="round" 
                     strokeLinejoin="round"
                     variants={svgVariants}
                     initial="initial"
                     animate="animate"
                     />
                    <motion.path
                     d="M140.85,49.82v-25.59h8.96c3.11,0,5.46.59,7.07,1.78s2.41,2.93,2.41,5.23c0,1.25-.32,2.36-.97,3.31s-1.54,1.66-2.69,2.1c1.31.33,2.35.99,3.1,1.99s1.13,2.21,1.13,3.66c0,2.46-.79,4.32-2.36,5.59s-3.81,1.91-6.71,1.93h-9.95ZM146.12,34.95h3.9c2.66-.05,3.99-1.11,3.99-3.18,0-1.16-.34-2-1.01-2.5s-1.74-.76-3.19-.76h-3.69v6.45ZM146.12,38.68v6.91h4.52c1.24,0,2.21-.3,2.91-.89s1.05-1.41,1.05-2.45c0-2.34-1.21-3.53-3.64-3.57h-4.83Z" 
                     fill="none" 
                     stroke="#12355b" 
                     strokeLinecap="round" 
                     strokeLinejoin="round"
                     variants={svgVariants}
                     initial="initial"
                     animate="animate"
                     />
                    <motion.path
                     d="M175.96,47.89c-1.25,1.52-2.99,2.29-5.2,2.29-2.04,0-3.59-.59-4.67-1.76s-1.62-2.89-1.64-5.15v-12.46h5.08v12.3c0,1.98.9,2.97,2.71,2.97s2.91-.6,3.55-1.79v-13.48h5.1v19.02h-4.78l-.14-1.93Z" 
                     fill="none" 
                     stroke="#12355b" 
                     strokeLinecap="round" 
                     strokeLinejoin="round"
                     variants={svgVariants}
                     initial="initial"
                     animate="animate"
                     />
                    <motion.path
                     d="M185.76,25.88c0-.76.25-1.39.76-1.88s1.2-.74,2.08-.74,1.56.25,2.07.74.77,1.12.77,1.88-.26,1.41-.78,1.9-1.21.74-2.07.74-1.54-.25-2.07-.74-.78-1.12-.78-1.9ZM191.16,49.82h-5.1v-19.02h5.1v19.02Z" 
                     fill="none" 
                     stroke="#12355b" 
                     strokeLinecap="round" 
                     strokeLinejoin="round"
                     variants={svgVariants}
                     initial="initial"
                     animate="animate"
                     />
                    <motion.path
                     d="M201.78,49.82h-5.1v-27h5.1v27Z" 
                     fill="none" 
                     stroke="#12355b" 
                     strokeLinecap="round" 
                     strokeLinejoin="round"
                     variants={svgVariants}
                     initial="initial"
                     animate="animate"
                     />
                    <motion.path
                     d="M206.25,40.17c0-2.96.67-5.33,2-7.08s3.15-2.64,5.46-2.64c1.85,0,3.38.69,4.59,2.07v-9.7h5.1v27h-4.59l-.25-2.02c-1.27,1.58-2.89,2.37-4.89,2.37-2.24,0-4.03-.88-5.39-2.65s-2.03-4.22-2.03-7.36ZM211.33,40.55c0,1.78.31,3.15.93,4.1.62.95,1.52,1.43,2.71,1.43,1.57,0,2.68-.66,3.32-1.99v-7.52c-.63-1.33-1.73-1.99-3.29-1.99-2.45,0-3.67,1.99-3.67,5.97Z" 
                     fill="none" 
                     stroke="#12355b" 
                     strokeLinecap="round" 
                     strokeLinejoin="round"
                     variants={svgVariants}
                     initial="initial"
                     animate="animate"
                     />
                    <motion.path
                     d="M237.16,50.18c-2.79,0-5.06-.86-6.81-2.57s-2.63-3.99-2.63-6.84v-.49c0-1.91.37-3.62,1.11-5.12s1.78-2.67,3.14-3.48,2.9-1.22,4.63-1.22c2.6,0,4.65.82,6.14,2.46s2.24,3.97,2.24,6.98v2.07h-12.11c.16,1.24.66,2.24,1.49,2.99s1.87,1.12,3.14,1.12c1.96,0,3.49-.71,4.59-2.13l2.5,2.79c-.76,1.08-1.79,1.92-3.09,2.52s-2.74.91-4.32.91ZM236.58,34.55c-1.01,0-1.83.34-2.45,1.02-.63.68-1.03,1.66-1.2,2.93h7.07v-.41c-.02-1.13-.33-2-.91-2.62-.59-.62-1.42-.93-2.5-.93Z" 
                     fill="none" 
                     stroke="#12355b" 
                     strokeLinecap="round" 
                     strokeLinejoin="round"
                     variants={svgVariants}
                     initial="initial"
                     animate="animate"
                     />
                    <motion.path
                     d="M259.64,35.57c-.69-.09-1.3-.14-1.83-.14-1.92,0-3.18.65-3.78,1.95v12.45h-5.08v-19.02h4.8l.14,2.27c1.02-1.75,2.43-2.62,4.24-2.62.56,0,1.09.08,1.58.23l-.07,4.89Z" 
                     fill="none" 
                     stroke="#12355b" 
                     strokeLinecap="round" 
                     strokeLinejoin="round"
                     variants={svgVariants}
                     initial="initial"
                     animate="animate"
                     />
                    <motion.path
                     d="M118.24,24.87l-16.77,18.51c-.86.95-1.69,1.22-2.53,2.47s3.24,3.96,3.74,4.07,1-.45,1-.45c0,0-.13-1.82.71-2.76,0,0,7.94-9.03,9.67-10.75.54-.53,1.05-1.09,1.55-1.65,1.89-2.12,5.3-6.02,5.56-6.78l-2.94-2.66Z" 
                     fill="#7f807a" 
                     strokeWidth="0"
                     variants={svgVariants}
                     initial="initial"
                     animate="animate"
                     />
                    <motion.path
                     d="M118.24,24.87s8.45-8.34,9.32-10.62l1.18-.97,2.94,2.66-1.19,1.31s-8.45,8.34-9.31,10.28" 
                     fill="#f6de57" 
                     strokeWidth="0"
                     variants={svgVariants}
                     initial="initial"
                     animate="animate"
                     />
                    <motion.path
                     d="M131.68,15.94l-2.78-2.52s-.33-.3.01-.67c0,0,2.54-2.8,2.05-3.25,0,0-.33-.54-.98-.55,0,0-3.31-.28-3.81-.05l-2.99.35s-.66.08-.83-.07,2.01-.9,2.01-.9c0,0,5.02-2.26,8.81-1.21,0,0,2.15.58,4.59,3.13,0,0,.11,3.16,3.09,3.48l.98.89s.16.48-.18.86l-2.2,2.43s-.51.56-.83.27l-1.15-1.04s.18-.86-.46-1.78c0,0-1.29-2.19-3.13-1.13l-2.02,1.74-.17.02" 
                     fill="#7f807a" 
                     strokeWidth="0"
                     variants={svgVariants}
                     initial="initial"
                     animate="animate"
                     />
                </motion.g>
            </motion.svg>
            <Link to="/CV-Maker/section_1">
                <motion.button
                 type="button"
                 className="start_button"
                //  variants={buttonVariants}
                //  whileHover="hover"
                >Get Started</motion.button>
            </Link>
        </motion.div>
    )
}

export { Home }