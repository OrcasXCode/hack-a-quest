import React, { useEffect, useRef } from 'react'
import success from "../../src/assets/bgglitch.mp4";

export function Resources(props) {

    const containerRef = useRef(null);

    useEffect(() => {
        // Update container height based on content height
        if (containerRef.current) {
            const contentHeight = containerRef.current.scrollHeight;
            containerRef.current.style.height = `${contentHeight}px`;
        }
    }, []);
    

    return (
        <>
            <div className='relative max-w-9xl h-100%'  ref={containerRef}  style={{ minHeight: '100vh' }}>
                 <video autoPlay muted loop className="absolute inset-0 object-cover z-0 w-full h-full">
                    <source src={success} type="video/mp4" />
                </video>
                <div className='absolute max-w-7xl mt-10 z-10 text-white inset-0 mx-auto' style={{fontFamily:'hack'}}>
                    <div id="wrap" className='text-white text-center'>
                     <div id="glitch" className="text-2xl lg:text-4xl" style={{ fontFamily: 'hack' }}>
                        ⚔️ CTF Challenge Handbook ⚔️
                    </div>
                </div>

                    <div className='text-xl text-center mt-5 text-gray-400'>Welcome to the Cybersecurity Capture The Flag (CTF) challenge! This comprehensive handbook will serve as your guide to navigating the competition and leveraging essential resources to excel in the challenges ahead.</div>

                    <div className='text-3xl mt-5 text-red-600'>Table of Contents : </div>


                    <div className='mt-5'>🛠️ Essential Toolbox</div>

                   <div> 🔗 CyberToolkit</div>
                    <div>🔍 DecipherIt Cypher Database</div>
                  <div>  📘 Hacker's Vault</div>
                   <div> 📦 SecureWord Lists</div>
                    <div>🔍 StegExplorer</div>
                   <div> 🌐 NetworkSpy</div>
                   <div> 🔐 Cryptic Resources</div>
                   <div> 🔄 Reverse Engineer's Toolbox</div>
                   <div> 🌐 Web Warrior Resources</div>

                    <div>📏 Rules and Etiquette</div>

                   <div> 📊 Scoring System</div>

                   <div> 📌 Strategic Tips and Techniques</div>
                    

                    <div className='mt-5 text-3xl text-red-600'>Introduction</div>

                    <div className='text-l mt-5 text-gray-400'>Prepare for an exhilarating CTF experience where your cybersecurity prowess will be put to the test. This handbook aims to equip you with the necessary knowledge and tools to tackle a variety of challenges and emerge victorious.
                    Familiarize yourself with the rules and guidelines to ensure fair play and maximize your enjoyment of the competition.</div>

                    <div className='text-3xl mt-5 text-red-600'>Essential Toolbox</div>

                    <div className='text-2xl mt-5'>1. CyberToolkit Logo CyberToolkit</div>
                    <div className='mt-4 text-gray-400'> The CyberToolkit is your go-to resource for data analysis and manipulation. Unleash its power to decode and analyze data effectively, providing critical insights for solving complex challenges.</div>

                    <div  className='text-2xl mt-5'>2. DecipherIt Cypher Database</div>
                    <div className='mt-4 text-gray-400'> Unlock the secrets of encryption with DecipherIt, a comprehensive database of encryption algorithms and ciphers. Master the art of decryption and gain an edge in cryptography challenges.</div>

                    <div  className='text-2xl mt-5'>3. Hacker's Vault Icon Hacker's Vault</div>
                    <div className='mt-4 text-gray-400'> The Hacker's Vault is a treasure trove of hacking techniques and strategies. Dive deep into its repository of knowledge to uncover valuable insights and solutions to a wide range of challenges.</div>

                    <div  className='text-2xl mt-5'>4. SecureWord Lists' GitHub Repo</div>
                    <div className='mt-4 text-gray-400'>Explore the vast collection of security-related wordlists on SecureWord Lists' GitHub repository. These lists are indispensable for password cracking and fuzzing exercises.</div>

                    <div  className='text-2xl mt-5'>5. StegExplorer</div>
                    <div className='mt-4 text-gray-400'>Uncover hidden data within images and files using StegExplorer, a powerful tool for steganography challenges. Sharpen your skills in extracting concealed information to gain an advantage.</div>


                    <div  className='text-2xl mt-5'>6. NetworkSpy Icon NetworkSpy</div>
                    <div className='mt-4 text-gray-400'> NetworkSpy is your ultimate ally for analyzing network traffic and dissecting packet data. Harness its capabilities to navigate network-related challenges with ease.</div>

                    <div  className='text-3xl mt-5 text-red-600'>Cryptic Resources</div>

                    <div  className='text-2xl mt-5'> Enhance your cryptographic capabilities with additional resources such as:</div>

                    <div  className='text-2xl mt-5'>1. HashCrack Icon HashCrack</div>
                    <div className='mt-4'>A formidable password-cracking tool for various hash algorithms.</div>
                    <div className='text-gray-400 mt-2'> CipherSolve Icon CipherSolve: An online toolkit for deciphering encrypted messages using various cryptographic techniques.</div>
                    <div className='text-gray-400'>CryptoMaster: A comprehensive guide to mastering cryptography, covering both theory and practical applications.</div>

                    <div className='text-2xl mt-5'>2. Reverse Engineer's Toolbox</div>
                    <div className='mt-4'>For reverse engineering challenges, leverage resources like:</div>
                    <div className='text-gray-400 mt-2'>Ghidra Icon Ghidra: A sophisticated software reverse engineering framework for dissecting binaries.</div>
                    <div className='text-gray-400'>IDA Pro Icon IDA Pro: A leading disassembler and debugger for analyzing executable files.</div>
                    <div className='text-gray-400'>ILSpy Icon ILSpy: An open-source .NET assembly browser and decompiler for examining .NET applications.</div>

                   <div className='text-2xl mt-5'>3. Web Warrior Resources</div>
                   
                    <div className='mt-4'> Equip yourself with tools such as:</div>
                    <div className='text-gray-400 mt-2'> WebGuard Icon WebGuard: A web application security testing tool for identifying vulnerabilities and security flaws.</div>
                    <div className='text-gray-400'>WebQuery Icon WebQuery: A command-line utility for interacting with web services and APIs during testing.</div>
                    <div className='text-gray-400'>WebGenie Icon WebGenie: A browser extension for detecting technologies and frameworks used in web applications.</div>
                </div>
            </div>
        </>
    )
}
