import React, { useEffect, useState } from 'react'
import axios from "axios"
import { ArrowRight} from 'lucide-react';
import { BarLoader } from 'react-spinners'


export function Warground(props) {
    const [challenges,setChallenges]=useState([]);
    const [loading,setLoading]=useState(true);

    const fetchData=async ()=>{
       try {
            const response = await axios.get("http://localhost:3000/user/challenges");
            const  wargroups = response.data;
            console.log(wargroups.challenges);
            setChallenges(wargroups.challenges);
            setLoading(false);
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
                {loading ? <div className='text-white text-4xl h-screen w-screen bg-black flex items-center justify-center'><BarLoader
  color="#ff0000"
  height={1}
  width={300}
/></div> : <div className='max-w-7xl text-white mx-auto mt-7'>
                    <div className='p-2 border w-[120px] mt-[150px] text-center mb-5 rounded-full'>Crytpgraphy</div>
                    <div className='text-white  text-center flex flex-wrap gap-6 max-w-7xl'>
                        {challenges.map((challenge,index)=>(
                            <div key={index} className="w-[300px] rounded-md border">
                                <div className="p-4">
                                <h1 className="inline-flex text-white items-center text-[20px] font-semibold">
                                   {challenge.title}
                                </h1>
                                <p className="mt-3 text-[25px] text-gray-400">
                                    {challenge.description}💎
                                </p>
                                <button type='button' id="btn-two" class="btn" style={{fontFamily:'hack',marginTop:'30px'}}>Read <ArrowRight className='ml-2' size={16} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='p-2 border w-[200px] mt-[150px]  text-center mb-5 rounded-full'>Reverse Enginering</div>
                    <div className='text-white  text-center flex flex-wrap gap-6 max-w-7xl'>
                        {challenges.map((challenge,index)=>(
                            <div key={index} className="w-[300px] rounded-md border">
                                <div className="p-4">
                                <h1 className="inline-flex text-white items-center text-[20px] font-semibold">
                                   {challenge.title}
                                </h1>
                                <p className="mt-3 text-[25px] text-gray-400">
                                    {challenge.description}💎
                                </p>
                                <button type='button' id="btn-two" class="btn" style={{fontFamily:'hack',marginTop:'30px'}}>Read <ArrowRight className='ml-2' size={16} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>}
            </div>
        </>
    )
}
