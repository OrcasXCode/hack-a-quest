import React, { useState } from "react";
import "./Modal.css";
import { ArrowRight } from 'lucide-react';

export default function Modal({ title, points, closeModal }) {
  const [modal, setModal] = useState(false);
  const [inputValue, setInputValue] = useState(""); // State to store input value

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update input value state
  };

  const handleSubmit = () => {
    // Handle submission here
    // For example, you can check if inputValue matches the flag
    // If it matches, perform some action
    // Otherwise, display an error message
    console.log("Submitted value:", inputValue);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <div className="read-btn">
        <button onClick={toggleModal} className="btn-modal">
            Read 
            <ArrowRight className='arrow ml-2' size={16} /> 
        </button>
      </div>


      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{title}</h2>
            <p>
             {points}💎
            </p>
            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi optio voluptates tempore laudantium 
             necessitatibus amet quas quibusdam quisquam molestias, incidunt autem quod cupiditate mollitia iste perspiciatis harum minima vero suscipit!
            </p>
            <button className="download-button"><a href="demo.zip" download="demo.zip">Download</a></button>
            <div className="flag-submit">
              <input
                type="text"
                placeholder="Enter flag here..."
                value={inputValue}
                onChange={handleInputChange}
                className="flag"
              />
              <button className="submit-button" onClick={handleSubmit}>Submit</button>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
