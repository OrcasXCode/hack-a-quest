import React, { useEffect, useState } from "react";
import "./Modal.css";
import { ArrowRight } from 'lucide-react';
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

export  function Modal({ title, points }) { 
  const [modal, setModal] = useState(false);
  const [flag, setFlag] = useState("");
  const [id,setId]=useState("");
  const [completed,setCompleted]=useState(false);
  const storedId = localStorage.getItem('id');

   useEffect(() => {
    if (storedId) {
        setId(storedId);
    }
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

   const handleSubmit=async()=>{
       const dataToSend={
          teamId: id,
          title: title,
          flag : flag
        }
        let loadingToast;
      try{
        loadingToast = toast.loading("Verifying Flag");
        const res=await axios.post("http://localhost:3000/user/validflag",dataToSend);
        if(res){
          console.log(res);
          setCompleted(true);
          toast.success("Success !");
        }
        else{
          console.log(res);
          toast.error("Failed");
        }
      }
      catch(error){
        console.log(error);
        toast.error("Failed");
      }
      finally {
            if (loadingToast) {
              toast.dismiss(loadingToast); 
            }
        }
   }

   const checkSolved = async () => {
      const dataToSend = {
        teamId: storedId,
        title: title
      };
      try {
        const res = await axios.get("http://localhost:3000/user/isdone", { data: dataToSend });
        setCompleted(true);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };


    useEffect(() => {
      checkSolved();
    }, []);

  if (modal) {
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
          <Toaster></Toaster>
          <div onClick={toggleModal} className="overlay"></div>
          {completed==true ?  <><div className="modal-content">
            <h2>Completed !</h2>
            <p>
              {points}💎 <span className="text-xl text-green-600">+</span>
            </p>
            <p>Congratulations! You have successfully captured the flag. Your points have been updated on the scoreboard.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div></> :  <><div className="modal-content">
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
                onChange={(e) => {
                  setFlag(e.target.value);
                }}
                className="flag"
              />
              <button className="submit-button" onClick={handleSubmit}>Submit</button>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div></>}
        </div>
      )}
    </>
  );
}
