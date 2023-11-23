"use client"
import Link from 'next/link'
import './styles/ForgotLeft.css'
import { useState } from 'react'

export const ForgotLeft = () => {
  const [forgotRequest, setforgotRequest] =  useState(
    {
      "email":"",
      "password":"",
      "confirmPassword":""
    }
  )

  const handleChange = (e: { target: { name: any; value: any; }; })=>{
    setforgotRequest({...forgotRequest, [e.target.name]:e.target.value})
  }
  

  const forgotUser = async ()=>{
  
    // const {data} = await axios.post("http://localhost:8082/auth/forgot", forgotRequest)
    // const {data} = await axios.post("http://localhost:8082/auth/authenticate", forgotRequest)
    // console.log(data['token']);
    // const res = await axios.get("http://localhost:8082/demo/hello",
    //   {
    //     headers: {
    //       'Authorization': `Bearer ${data['token']}`
    //     }
    //   }
    // )
    // console.log(res)
    setforgotRequest(
      {
        "email":"",
        "password":"",
        "confirmPassword":""
      }
    )
  }
  return (
    <div className="flex flex-col border-[10px] h-[100%] mr-[2%] bg-[#EFEAE2] border-[#FFFFFF] rounded-[20px] text-[#2C2987] left-resp-850px p-[20px]">
      <div className='flex flex-col gap-y-[20px]'>
        <p className='font-bold text-[50px]'>Forgot Password</p>
        <div className="flex flex-col justify-between gap-y-[15px]">
          <input placeholder="Enter your email" type="email" className="p-[10px] text-[20px] rounded-[10px] border-[4px] border-[#b9cceb]" name="email" value={forgotRequest.email} onChange={handleChange}/>
          <input placeholder="Enter your password" type="password" className="p-[10px] text-[20px] rounded-[10px] border-[4px] border-[#b9cceb]" name="password" value={forgotRequest.password} onChange={handleChange} />
          <input placeholder="Enter your password again" type="password" className="p-[10px] text-[20px] rounded-[10px] border-[4px] border-[#b9cceb]" name="confirmPassword" value={forgotRequest.confirmPassword} onChange={handleChange} />
          <button className="p-[10px] text-[20px] rounded-[30px] bg-[#f294ad] text-white font-bold hover:bg-[#ed668a]" onClick={forgotUser}>Change Password</button>
          <div className='self-end text-[15px]'>
            <Link href={'/'}>
              <p>New User?</p>
            </Link>
            <Link href={'/'}>
              <p>Already Registered?</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
