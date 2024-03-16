import React from 'react';
import success from "../../src/assets/bgglitch.mp4";
import hero from "../../src/assets/hero.mp4";
import upgrad from "../../src/assets/upgrad.png";
import ceo from "../../src/assets/ceo.jpeg";
import lpucircle from "../../src/assets/lpucircle.png"
import aboutlpu from "../../src/assets/about-lpu.png"
import dyc from "../../src/assets/dyc.png"
import lpu from "../../src/assets/lpu.png"
// import x from "../../src/assets/x.png"
import x from "../../src/assets/x.mp4"

export function Home(props) {
    return (
        <>
            {/* Hero Section */}
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
            
            {/* Knowledge Partner */}
            <div className="relative max-w-9xl h-screen bg-black overflow-hidden" style={{ fontFamily: 'hack' }}>
                <video autoPlay muted loop className="absolute inset-0 object-cover z-0 w-full h-full">
                    <source src={success} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex justify-center items-center z-10">
                    <div className="px-2 lg:flex lg:flex-row lg:items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="my-10 lg:my-0 lg:px-10">
                                <h2 className="text-3xl text-center font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                                    Our Knowledge <span className='text-red-600' style={{textDecoration: 'underline' }}>Partners</span>
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

            {/* Guest Speaker */}
            <div className="relative max-w-9xl h-screen bg-black overflow-hidden" style={{ fontFamily: 'hack' }}>
                <video autoPlay muted loop className="absolute inset-0 object-cover z-0 w-full h-full">
                    <source src={success} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex justify-center items-center z-10">
                   <div className="mx-auto max-w-7xl px-2 lg:px-0">
                    <div className="mx-auto text-center max-w-3xl md:text-center ">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                        Our Guest <span className='text-red-600' style={{textDecoration: 'underline' }}>Speakers</span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-400 md:text-xl">
                        We are honored to have the CEO of UpGrad Campus join us for this special event. 
                        </p>
                    </div>
                     <section className="px-2 py-10 md:px-0">
                    <div className="mx-auto max-w-4xl">
                        <div className="md:flex md:items-center md:justify-center md:space-x-14">
                        <div className="relative h-48 w-48 mx-auto flex-shrink-0">
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

            {/* About LPU */}
            <div className="relative max-w-9xl h-screen overflow-hidden" style={{ fontFamily: 'hack' }}>
                <video autoPlay muted loop className="absolute inset-0 object-cover z-0 w-full h-full">
                    <source src={success} type="video/mp4" />
                </video>
                <div className="absolute inset-0 mt-[50px] lg:-mt-10 flex justify-center items-center z-10">
                    <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-center lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
                        <img className='h-[50px] w-[50px]' src={lpucircle}></img>
                        <h1 className="mt-8 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
                            About <span className='text-[#e97b1c]' style={{textDecoration: 'underline' }}>LPU</span>
                        </h1>
                        <p className="mt-8 text-lg text-gray-400">
                        <span className='text-[#e97b1c]'>Lovely Professional University </span> , renowned for its academic excellence, boasts a modern campus and offers over <span className='text-[#e97b1c]'>150 professional programs.</span> With a diverse community from across India and over  <span className='text-[#e97b1c]'>40 countries</span>, LPU is a global melting pot. Highlighting its commitment to quality, LPU has been awarded the prestigious  <span className='text-[#e97b1c]'>NAAC A++</span>  grade with an impressive score of  <span className='text-[#e97b1c]'>3.68/4</span> by the UGC's National Assessment & Accreditation Council, setting it apart as a leading institution in India.
                        </p>
                        </div>
                        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
                        <img
                            className=" object-cover lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9]"
                            src={aboutlpu}
                            alt=""
                        />
                        </div>
                    </div>
                </div>
            </div>

            {/* Organizing Committee */}
             <div className="relative max-w-9xl h-screen bg-black overflow-hidden" style={{ fontFamily: 'hack' }}>
                <video autoPlay muted loop className="absolute inset-0 object-cover z-0 w-full h-full">
                    <source src={success} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex justify-center items-center z-10">
                   <div className="mx-auto max-w-7xl px-2 lg:px-0">
                    <div className="mx-auto text-center max-w-3xl md:text-center ">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                        Organizing <span className='text-red-600' style={{textDecoration: 'underline' }}> Committee</span>
                        </h2>
                    </div>
                     <section className="px-2 py-10 md:px-0">
                    <div className="mx-auto max-w-5xl">
                        <div className="md:flex md:items-center md:justify-center md:space-x-14">
                            <div className="relatives max-sm:-mt-[90px] lg:gap-7 h-48 w-48 lg:w-[700px] mx-auto flex items-center justify-center flex-shrink-0 flex-wrap">
                                <img
                                    className="relative h-60 w-50 object-cover"
                                    src={dyc}
                                    alt=""
                                />
                                <video autoPlay muted loop className='h-[70px]'> <source src={x} type="video/mp4" /></video>
                                <img
                                    className="relative h-[90px] mt-5 object-cover"
                                    src={lpu}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    </section>
                    </div>
                </div>
            </div>

        </>
    );
}
