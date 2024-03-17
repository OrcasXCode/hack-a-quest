import React, { useEffect, useState } from 'react'
import axios from "axios"
import { ArrowUpRight } from 'lucide-react';

export function Warground(props) {
    const [challenges,setChallenges]=useState([]);

    const fetchData=async ()=>{
       try {
            const response = await axios.get("http://localhost:3000/user/challenges");
            const  wargroups = response.data;
            console.log(wargroups.challenges);
            setChallenges(wargroups.challenges);
        } 
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
   
    

    return (
        <>
            <div className='bg-black h-100%' style={{fontFamily:'hack'}}>
                <div id="wrap" className='text-white text-center pt-5'>
                    <div id="glitch" className="text-2xl lg:text-4xl" style={{ fontFamily: 'hack' }}>
                        ☠️ CTF BattleZone ☠️
                    </div>
                </div>
                <div className='max-w-7xl text-white mx-auto mt-7'>
                    <div className='text-white  text-center flex flex-wrap gap-5 max-w-7xl'>
                        {challenges.map((challenge,index)=>(
                            <div key={index} className="w-[300px] rounded-md border">
                                <div className="p-4">
                                <h1 className="inline-flex text-white items-center text-lg font-semibold">
                                   {challenge.title}
                                </h1>
                                <p className="mt-3 text-sm text-gray-400">
                                    {challenge.description}
                                </p>
                                <button
                                    type="button"
                                    className="mt-4 w-full flex items-center justify-center rounded-sm bg-red-600 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Read <ArrowUpRight className="h-4 w-4" />
                                </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
