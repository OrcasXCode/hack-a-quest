import React, { useState } from 'react';
import Chart from 'react-apexcharts';

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

  return (
    <div className='bg-black h-screen max-w-9xl'>
      <div className='flex items-center justify-center bg-white h-full'>
        <Chart options={{...options,...chartOptions}} series={series} type="bar" width="1500px" height="60%" />
      </div>
    </div>
  );
}
