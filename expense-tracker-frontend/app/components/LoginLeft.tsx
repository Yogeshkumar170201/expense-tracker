"use client"
import Link from 'next/link'
import './styles/LoginLeft.css'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation';

export const LoginLeft = () => {
    
  const [loginRequest, setLoginRequest] =  useState(
    {
      "email":"",
      "password":""
    }
  )

  const handleChange = (e: { target: { name: any; value: any; }; })=>{
    setLoginRequest({...loginRequest, [e.target.name]:e.target.value})
  }
  
  const router = useRouter();
  const loginUser = async ()=>{
  
    try {
        const {data} = await axios.post("http://localhost:8082/auth/authenticate", loginRequest)
        const jwtToken = data['token']
        setLoginRequest(
            {
                "email":"",
                "password":""
            }
        )
        document.cookie = "token=" + jwtToken + "; path=/; max-age=3600; SameSite=Strict";
        router.push('/dashboard')
    } catch (error) {
        alert("Invalid Credentials")
        setLoginRequest(
            {
                "email":"",
                "password":""
            }
        )
    }
  }
  return (
    <div className=" flex flex-col border-[10px] h-[100%] mr-[2%] bg-[#EFEAE2] border-[#FFFFFF] rounded-[20px] text-[#2C2987] left-resp-850px p-[20px]">
      <div className='flex flex-col gap-y-[20px]'>
        <p className='font-bold text-[50px]'>Login</p>
        <div className="flex flex-col justify-between gap-y-[15px]">
          <input placeholder="Enter your email" type="email" className="p-[10px] text-[20px] rounded-[10px] border-[4px] border-[#b9cceb]" name="email" value={loginRequest.email} onChange={handleChange}/>
          <input placeholder="Enter your password" type="password" className="p-[10px] text-[20px] rounded-[10px] border-[4px] border-[#b9cceb]" name="password" value={loginRequest.password} onChange={handleChange} />
          <button className="p-[10px] text-[20px] rounded-[30px] bg-[#f294ad] text-white font-bold hover:bg-[#ed668a]" onClick={loginUser}> Login</button>
          <div className='self-end text-[15px]'>
            <Link href={'/'}>
              <p>New User?</p>
            </Link>
            <Link href={'/forgotPassword'}>
              <p>Forgot password?</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
