"use client"

import ShowChartIcon from '@mui/icons-material/ShowChart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';

const Sidebar = () => {

  const [registerRequest, setRegisterRequest] =  useState(
    {
      // "name":"",
      "email":"",
      "password":""
    }
  )

  const handleChange = (e: { target: { name: any; value: any; }; })=>{
    setRegisterRequest({...registerRequest, [e.target.name]:e.target.value})
  }
  

  const registerUser = async ()=>{
  
    // const {data} = await axios.post("http://localhost:8082/auth/register", registerRequest)
    const {data} = await axios.post("http://localhost:8082/auth/authenticate", registerRequest)
    console.log(data['token']);
    const res = await axios.get("http://localhost:8082/demo/hello",
      {
        headers: {
          'Authorization': `Bearer ${data['token']}`
        }
      }
    )
    console.log(res)
    setRegisterRequest(
      {
        // "name":"",
        "email":"",
        "password":""
      }
    )
  }

  return (
    <div className="flex flex-col rounded-[30px] bg-[#EFEAE2] p-[20px] h-[90vh] w-[400px] gap-y-[70px] text-[30px] text-[#231f82] border-8 border-white">
      <div className='flex flex-col gap-y-[20px]'>
        <p>Register</p>
      <div className="flex flex-col justify-between gap-y-[15px]">
            {/* <input placeholder="Enter your name" type="text" className="p-[10px] text-[20px] rounded-[10px] rounded-[10px] border-[4px] border-[#b9cceb]" name="name" value={registerRequest.name} onChange={handleChange}/> */}
            <input placeholder="Enter your email" type="email" className="p-[10px] text-[20px] rounded-[10px] border-[4px] border-[#b9cceb]" name="email" value={registerRequest.email} onChange={handleChange}/>
            <input placeholder="Enter your password" type="password" className="p-[10px] text-[20px] rounded-[10px] border-[4px] border-[#b9cceb]" name="password" value={registerRequest.password} onChange={handleChange} />
            <button className="p-[10px] text-[20px] rounded-[30px] bg-[#f294ad] text-white font-bold hover:bg-[#ed668a]" onClick={registerUser}> Register</button>
          </div>
      </div>
      {/* <div className='flex flex-row gap-x-[35px] items-center'>
        <div>
        <AccountCircleRoundedIcon className="text-[#231f82] h-20 w-20"/>
        </div>
        <div className='self-center'>
          <p className='font-bold text-[40px]'>Yogesh Kr</p>
          <p>Your Money</p>
        </div>
      </div>
      
      <div className='flex flex-col gap-y-[15px]'>
        <Link href={'/'}>
          <div className='flex flex-row gap-x-[35px] hover:border-l-8 hover:border-[#231f82]'>
            <ShowChartIcon className="text-[#231f82] h-20 w-20"/>
            <p className='self-center'>Dashboard</p>
          </div>
        </Link>
        <Link href={'/transactions'}>
          <div className='flex flex-row gap-x-[35px] hover:border-l-8 hover:border-[#231f82]'>
            <ReceiptIcon className="text-[#231f82] h-20 w-20"/>
            <p className='self-center'>View Transactions</p>
          </div>
        </Link>
        <Link href={'/incomes'}>
          <div className='flex flex-row gap-x-[35px] hover:border-l-8 hover:border-[#231f82]'>
            <CurrencyRupeeIcon className="text-[#231f82] h-20 w-20"/>
            <p className='self-center'>Incomes</p>
          </div>
        </Link>
        <Link href={'/expenses'}>
          <div className='flex flex-row gap-x-[35px] hover:border-l-8 hover:border-[#231f82]'>
            <TrendingDownIcon className="text-[#231f82] h-20 w-20"/>
            <p className='self-center'>Expenses</p>
          </div>
        </Link>
      </div>
      <div className='flex flex-row mt-[80px] gap-x-[15px]'>
          <ExitToAppRoundedIcon className="text-[#231f82] h-20 w-20"/>
          <p className='self-center font-bold'>Signout</p>
      </div> */}
    </div>
  )
}

export default Sidebar