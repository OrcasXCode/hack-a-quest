import React, { useEffect, useState } from "react";
import "./Modal.css";
import { ArrowRight } from 'lucide-react';
import axios from "axios";

export default function Modal({ title, points, teamId }) {
  const [modal, setModal] = useState(false);
  const [flag,setFlag]=useState("");

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleSubmit = async () => {
    const dataToSend = {
      flag: flag,
      title: title,
      teamId: "363034"
    };
    try {
      const res = await axios.post("http://localhost:3000/user/validflag", dataToSend);
      if (res) {
        alert("Success");
      } else {
        alert("Failed");
      }
    } catch (error) {
      console.log(error);
    }
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
                onChange={(e)=>{
                  setFlag(e.target.value);
                }}
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
