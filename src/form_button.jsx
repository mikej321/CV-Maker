import './form_button.css';
import { useState } from 'react';

const Form_buttons = () => {

    // const arrowControls = (e) => {
    //     if (e.target.className === 'left_arrow_container' && !e.target.parentElement.parentElement.parentElement.classList.contains('section_1_container')) {
    //         console.log(e.target.parentElement.parentElement.parentElement.className);
    //         e.target.parentElement.parentElement.parentElement.classList.remove('container_open');
    //         e.target.parentElement.parentElement.parentElement.classList.add('container_closed');
    //         e.target.parentElement.parentElement.parentElement.previousSibling.classList.remove('container_closed');
    //         e.target.parentElement.parentElement.parentElement.previousSibling.classList.add('container_open');
    //     } else if (e.target.className === 'right_arrow_container' && !e.target.parentElement.parentElement.parentElement.classList.contains('section_7_container')) {
    //         console.log(e.target.parentElement.parentElement.parentElement);
    //         e.target.parentElement.parentElement.parentElement.classList.remove('container_open');
    //         e.target.parentElement.parentElement.parentElement.classList.add('container_closed');
    //         e.target.parentElement.parentElement.parentElement.nextSibling.classList.remove('container_closed');
    //         e.target.parentElement.parentElement.parentElement.nextSibling.classList.add('container_open');
    //     }
    //   }

    return (
        <div className="form_button_container">
            <div className="left_arrow_container" onClick={arrowControls}>
                <div className="left_arrow">&#8592;</div>
            </div>
            <div className="right_arrow_container" onClick={arrowControls}>
                <div className="right_arrow">&#8594;</div>
            </div>
        </div>
    )
}

export { Form_buttons }