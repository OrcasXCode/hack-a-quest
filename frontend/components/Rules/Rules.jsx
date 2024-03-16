import React from 'react';
import success from "../../src/assets/bgglitch.mp4";


const faq = [
  {
    "ans": "1. Team registration for practice CTF sessions is currently disabled to streamline the main event.Participants can still join as individuals and compete independently."
  },
  {
    "ans": "2. Sharing flags or answers with anyone, including teammates, is strictly prohibited .Collaboration within registered teams is encouraged, but sharing solutions with non-participants is not allowed."
  },
  {
    "ans": "3. Challenges will be categorized into Easy, Medium, Hard, and Insane difficulty levels. Participants can select challenges based on their skill level, with higher difficulty challenges offering greater rewards."
  },
  {
    "ans": "4. Participants can seek technical assistance from the CTF Administration team for any doubts or questions related to the challenges.The Administration team will provide prompt support to ensure a smooth experience for all participants."
  }
];


export function Rules() {
  return (
    <div className="relative max-w-9xl h-screen bg-black overflow-hidden" style={{fontFamily:'hack'}}>
      <video autoPlay muted loop className="absolute h-full w-full object-cover z-0">
        <source src={success} type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex justify-center items-center z-10">
       <section className=" px-2 py-10 md:px-0 ">
      <div>
        <div className="mx-auto mt-5 max-w-2xl text-center lg:text-center">
          <div id="wrap">
              <div id="glitch" className='text-[40px] lg:text-[50px]' data-text="GLITCH" style={{fontFamily:'hack'}}>Guidlines</div> 
            </div>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-400 lg:mx-auto">
              Welcome to the Capture The Flag (CTF) challenge! Here are the rules you need to follow:
            </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-6 sm:text-center  md:mt-16 md:grid-cols-2">
          {faq.map((faqs,index) => (
            <div key={index}>
              <p className="mt-6 text-sm text-white leading-6 tracking-wide">
                {faqs.ans}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
      
    </div>
  );
}
