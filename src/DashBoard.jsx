import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Pichart from './Pichart'
import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SendIcon from '@mui/icons-material/Send';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import { Progress } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export function DashBoard() {
  return (
    <div className='pt-[25px] px-[25] bg-[#f7f4f4] '>
      <div className='flex items-center justify-between'>
        <h1 className='text-[#343333] text-[30px] leading-[34px] font-normal cursor-pointer'>DashBoard</h1>
        <button className='bg-[blue] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer'>Generate Report</button>
      </div>
      <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
        <div className='h-[100px] rounded-[8px] bg-white flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in-out'>
            <div>
              <h2  className='text-[blue] text-[11px] leading-[17px] font-bold'>EARNINGS(MONTHLY)</h2>
              <h1 className='text-[20px] leading-[24px] font-bold text-[gray] mt-[5px]'>$40,000</h1>
            </div>
            <CalendarTodayIcon/>
        </div>
        <div className='h-[100px] rounded-[8px] bg-white flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in-out'>
            <div>
              <h2  className='text-[#09ff00] text-[11px] leading-[17px] font-bold'>EARNINGS (ANNUAL)</h2>
              <h1 className='text-[20px] leading-[24px] font-bold text-[gray] mt-[5px]'>$215,000</h1>
            </div>
            <AttachMoneyIcon/>
        </div>
        <div className='h-[100px] rounded-[8px] bg-white flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in-out'>
            <div>
              <h2  className='text-[#37e7db] text-[11px] leading-[17px] font-bold'>TASKS</h2>
              <h1 className='text-[20px] leading-[24px] font-bold text-[gray] mt-[5px]'>50%</h1>
            </div>
            <AssignmentIcon />
        </div>
        <div className='h-[100px] rounded-[8px] bg-white flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in-out'>
            <div>
              <h2  className='text-[#e1d336] text-[11px] leading-[17px] font-bold'>PENDING REQUESTS</h2>
              <h1 className='text-[20px] leading-[24px] font-bold text-[gray] mt-[5px]'>18</h1>
            </div>
            <SendIcon/>
        </div>
      </div>
      
      
      <div className='flex mt-[22px] w-full gap-[30px]'>
        <div className='basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
          <div className='bg-[#f8f8f8] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
            <h2 className='text-blue-500 font-bold'>Earnings Overview</h2>
            < MoreVertIcon className='cursor-pointer text-blue-500'/>
          </div>
          <div>
            <LineChart
                    width={1050}
                    height={500}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
              >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
             </LineChart>
          </div>
        </div>
        
        
        <div className='basis-[30%] border bg-[white] shadow-md cursor-pointer rounded-[4px]'>
          <div className='bg-[#f8f8f8] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
            <h2 className='text-blue-500 font-bold'>Revenue Sources</h2>
            < MoreVertIcon className='cursor-pointer text-blue-500'/>
          </div>

          <div className='pl-[15px]'>
              <Pichart />
          </div>
        
        </div>
      
      </div>
          <div className='flex mt-[22px] w-full gap-[30px]'>
               <div className='basis-[55%] border bg-[white] shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#f8f8f8] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
                      <h2 className='text-blue-500 text-[16px] leading-[19px] font-bold'>Project Overview</h2>
                      < MoreVertIcon className='cursor-pointer text-blue-500'/>
                    </div>
                    <div className='px-[20px] space-y-[15px] py-[15px]'>
                    <div>
                      <h2>Server Migration</h2>
                      <Progress percent={20} strokeColor="red" />
                    </div>
                    <div>
                      <h2>Sales Tracking</h2>
                      <Progress percent={40} strokeColor="dark yellow" />
                    </div>
                    <div>
                      <h2>Customer Database</h2>
                      <Progress percent={60} strokeColor="blue" />
                    </div>
                    <div>
                      <h2>Payout Details</h2>
                      <Progress percent={80} strokeColor="skyblue" />
                    </div>
                    <div>
                      <h2>Account Setup</h2>
                      <Progress percent={100} strokeColor="green" />
                    </div>
                    </div>
               </div>
               <div className='basis-[45%] border bg-[white] shadow-md cursor-pointer rounded-[4px]'>
                      <div className='bg-[#f8f8f8] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
                        <h2 className='text-blue-500 font-bold'>Illustrations</h2>
                        < MoreVertIcon className='cursor-pointer text-blue-500'/>
                      </div>
                      <div>
                        <div>
                          <img src="/src/photo.png" alt="Not Found" className='' />
                        </div>
                        <div>
                        Add some quality, svg illustrations to your project courtesy of unDraw, 
                        a constantly updated collection of beautiful svg images that 
                        you can use completely free and without attribution!
                        </div>
                      </div>
               </div>           
          </div>
    
    </div>
  );
}
