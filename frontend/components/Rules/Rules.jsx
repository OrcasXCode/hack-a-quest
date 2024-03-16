import React from 'react';
import success from "../../src/assets/bgglitch.mp4";


const faq = [
  {
    "ans": "1. For practice CTF team registration is diabled."
  },
  {
    "ans": "2. Don't share the flags with anyone."
  },
  {
    "ans": "3. There will be Four types of Challendes in different Categories Easy, Medium, Hard,Insane."
  },
  {
    "ans": "4. For technical doubts reffer to CTF Administration team."
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
