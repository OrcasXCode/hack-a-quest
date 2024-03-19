import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from "axios";
import { BarLoader } from 'react-spinners';

export function Scoreboard(props) {
  const [options] = useState({
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006]
    },
    colors: ['#FF0000'], 
    dataLabels: {
      style: {
        fontSize: '14px', 
        fontWeight: '600', 
        colors: ['#FFFFFF'] 
      }
    }
  });

  const [series] = useState([{
    name: 'series-1',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 150, 200, 40, 39, 70, 1, 500]
  }]);

   const chartOptions = {
    chart: {
      toolbar: {
        show: false 
      }
    }
  };

   const [challenges, setChallenges] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/user/getleaderboard");
            const wargroups = response.data;
            setChallenges(wargroups.teams);
            setLoading(false);
            console.log(challenges)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className='bg-black h-screen max-w-9xl'>
      <div className='flex items-center justify-center bg-white h-full'>
        <Chart options={{...options,...chartOptions}} series={series} type="bar" width="1500px" height="60%" />
      </div>
      <div className='bg-black text-white max-w-9xl h-screen'>
        <div className='grid text-center grid-cols-1 gap-6 md:grid-cols-3' style={{fontFamily:'hack'}}>
          <div className='border-b border-dotted text-2xl p-4' style={{ borderBottomColor: 'red' }}>No. </div>
          <div className='border-b border-dotted text-2xl p-4' style={{ borderBottomColor: 'red' }}>Teams</div>
          <div className='border-b border-dotted text-2xl p-4' style={{ borderBottomColor: 'red' }}>Points</div>
        </div>
        <div className='grid text-center grid-cols-1 gap-6 md:grid-cols-1' style={{fontFamily:'hack'}}>
          {loading ? (<div className='text-white text-4xl h-screen max-w-9xl bg-black flex items-center justify-center'>
                        <BarLoader color="#ff0000" height={1} width={300} />
                    </div>) : (<>
          {challenges.map((challenge, index) => (
            <div key={index} className='grid grid-cols-3'>
              <div className=' text-l p-4'>{index+1}</div>
              <div className=' text-l p-4'> {challenge.teamName}</div>
              <div className=' text-l p-4'>{challenge.points} 💎</div>
            </div>
          ))}</>)}
      </div>
      </div>
    </div>
  );
}
