import React from 'react';
import success from "../../src/assets/bgglitch.mp4";
import hero from "../../src/assets/hero.mp4";
import upgrad from "../../src/assets/upgrad.png";
import ceo from "../../src/assets/ceo.jpeg";

export function Home(props) {
    return (
        <>
            <div className="relative max-w-9xl h-screen overflow-hidden">
                <video autoPlay loop className="absolute inset-0 object-cover z-0 w-full h-full">
                    <source src={hero} type="video/mp4" />
                </video>
                 <div id="wrap" className='absolute inset-0 flex justify-center items-center z-10 text-white text-4xl lg:text-7xl'>
                     <div id="glitch" className="absolute inset-0 flex justify-center items-center z-10 text-white text-4xl lg:text-7xl" style={{ fontFamily: 'hack' }}>
                        Hack - Quest
                    </div>
                </div>
                <p className='text-white absolute inset-0 z-10 flex items-center text-2xl font-semibold  justify-center mt-[150px]' style={{ fontFamily: 'hack',textDecoration: 'underline' }}>Let's test your limits</p>
                
                <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>

            <div className="relative max-w-9xl h-screen bg-black overflow-hidden" style={{ fontFamily: 'hack' }}>
                <video autoPlay muted loop className="absolute inset-0 object-cover z-0 w-full h-full">
                    <source src={success} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex justify-center items-center z-10">
                    <div className="px-2 lg:flex lg:flex-row lg:items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="my-10 lg:my-0 lg:px-10">
                                <h2 className="text-3xl text-center font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                                    Our Knowledge <span className='text-red-600'>Partners</span>
                                </h2>
                                <p className="mt-4 text-center text-white">
                                    "UpGrad" is an Indian online higher education platform that offers a variety of programs in collaboration with universities and industry partners.
                                    Their certification programs are designed for college students and freshers. They offer a placement support program that includes:
                                    <span className='text-red-600'> Soft skill training, Aptitude test, Mock interviews, Group discussions, Three guaranteed interviews with companies</span>
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img
                                src={upgrad}
                                alt="ManWith Laptop"
                                className="h-full w-full rounded-md object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative max-w-9xl h-screen bg-black overflow-hidden" style={{ fontFamily: 'hack' }}>
                <video autoPlay muted loop className="absolute inset-0 object-cover z-0 w-full h-full">
                    <source src={success} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex justify-center items-center z-10">
                   <div className="mx-auto max-w-7xl px-2 lg:px-0">
                    <div className="mx-auto text-center max-w-3xl md:text-center ">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                        Our Guest <span className='text-red-600'>Speakers</span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-400 md:text-xl">
                        We are honored to have the CEO of UpGrad Campus join us for this special event. 
                        </p>
                    </div>
                     <section className="px-2 py-10 md:px-0">
                    <div className="mx-auto max-w-4xl">
                        <div className="md:flex md:items-center md:justify-center md:space-x-14">
                        <div className="relative h-48 w-48 flex-shrink-0">
                            <img
                            className="relative h-48 w-48 rounded-full object-cover"
                            src={ceo}
                            alt=""
                            />
                        </div>

                        <div className="mt-10 md:mt-0">
                            <blockquote>
                            <p className="text-xl text-white">
                               "The future belongs to those who believe in the beauty of their dreams. At upGrad Campus, we empower students to dream big and chase those dreams relentlessly."
                            </p>
                            </blockquote>
                            <p className="mt-7 text-lg font-semibold text-white">Amit Mahensaria</p>
                            <p className="mt-1 text-base text-gray-400">CEO (Cheif Executive Officer) - upGrad Campus</p>
                        </div>
                        </div>
                    </div>
                    </section>
                    </div>
                </div>
            </div>
            
            {/* Add more content or duplicate the above code block as needed */}
        </>
    );
}
