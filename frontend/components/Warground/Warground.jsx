import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarLoader } from 'react-spinners';
import {Modal} from '../../Modal/Modal';

export function Warground(props) {
    const [challenges, setChallenges] = useState([]);
    const [loading, setLoading] = useState(true);



    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/user/challenges");
            const wargroups = response.data;
            setChallenges(wargroups.challenges);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <>
            <div className='bg-black h-100%' style={{ fontFamily: 'hack' }}>
                <div id="wrap" className='text-white text-center pt-9'>
                    <div id="glitch" className="text-2xl lg:text-4xl" style={{ fontFamily: 'hack' }}>
                        ☠️ CTF BattleZone ☠️
                    </div>
                </div>
                {loading ? (
                    <div className='text-white text-4xl h-screen max-w-9xl bg-black flex items-center justify-center'>
                        <BarLoader color="#ff0000" height={1} width={300} />
                    </div>
                ) : (
                    <>
                        <div className='max-w-7xl text-white mx-auto mt-7'>
                            <div className='p-2 border w-[120px] mt-[150px] text-center mb-5 rounded-full'>Challenges</div>
                            <div className='text-white  text-center flex flex-wrap gap-6 max-w-7xl'>
                                {challenges.map((challenge, index) => (
                                    <div key={index} className="w-[300px] rounded-md border">
                                        <div className="p-4">
                                            <h1 className="inline-flex text-white items-center text-[20px] font-semibold">
                                                {challenge.title}
                                            </h1>
                                            <p className="mt-3 text-[25px] text-gray-400">
                                                {challenge.points}💎
                                            </p>
                                             <Modal
                                                title={challenge.title}
                                                description={challenge.description}
                                                points={challenge.points}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
