"use client"

import Sidebar from "../components/Sidebar"
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import PaymentsIcon from '@mui/icons-material/Payments';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useState } from "react";

const Incomes = () => {

  const [incomeInput, setIncomeInput] = useState({
    "title":"",
    "amount":"",
    "date":"",
    "category":"Salary",
    "reference":""
  })

  const handleChange = (e: { target: { name: String; value: String; }; })=>{
    setIncomeInput({ ...incomeInput, [e.target.name as unknown as string]: e.target.value })
  }

  const submitIncomeInput = ()=>{
    console.log(incomeInput)
    
    setIncomeInput(
      {
        "title":"",
        "amount":"",
        "date":"",
        "category":"Salary",
        "reference":""
      }
    )
  }

  return (
    <div className='flex flex-row justify-between p-[30px] flex-wrap bg-gradient-to-r from-[#ded3ed] to-[#8a6bb5]'>
      <Sidebar/>
      <div className="flex flex-col rounded-[30px] bg-[#EFEAE2] p-[20px] h-[90vh] w-[1200px] gap-y-[40px] text-[30px] text-[#231f82] border-8 border-white">
        <p className="font-bold text-[40px]">Incomes</p>
        <p className="text-center font-bold border-[8px] border-[#b9cceb] rounded-[20px] p-[10px]">Total Income : <span className="text-[#82BB2E]">₹1600</span></p>
        <div className="flex flex-row justify-between">
          <div className="w-[35%] flex flex-col justify-between gap-y-[15px]">
            <input placeholder="Salary Title" type="text" className="p-[10px] text-[20px] rounded-[10px] rounded-[10px] border-[4px] border-[#b9cceb]" name="title" value={incomeInput.title} onChange={handleChange} />
            <input placeholder="Salary Amount" type="text" className="p-[10px] text-[20px] rounded-[10px] border-[4px] border-[#b9cceb]" name="amount" value={incomeInput.amount} onChange={handleChange}/>
            <input placeholder="Enter a Date" type="date" className="p-[10px] text-[20px] rounded-[10px] border-[4px] border-[#b9cceb]" name="date" value={incomeInput.date} onChange={handleChange}/>
            <select className="p-[10px] text-[20px] rounded-[10px] border-[4px] border-[#b9cceb]" name="category" value={incomeInput.category} onChange={handleChange}>
              <option value="Salary">Salary</option>
              <option value="Freelancing">Freelancing</option>
              <option value="Investments">Investments</option>
              <option value="Stocks">Stocks</option>
              <option value="Bitcoin">Bitcoin</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Youtube">Youtube</option>
              <option value="Others">Others</option>
            </select>
            <textarea placeholder="Enter a Reference" className="p-[10px] text-[20px] rounded-[10px] w-full h-[150px] resize-none border-[4px] border-[#b9cceb]" name="reference" value={incomeInput.reference} onChange={handleChange}>
            </textarea>
            <button className="p-[10px] text-[20px] rounded-[30px] bg-[#f294ad] text-white font-bold hover:bg-[#ed668a]" onClick={submitIncomeInput}> + Add Income</button>
          </div>
          <div className="w-[63%]">
            <ul className="flex flex-col gap-y-[20px]">
              <li className=" flex flex-row justify-between items-center p-[20px] w-full border-[4px] border-[#b9cceb] h-[100px] rounded-[20px] bg-[#FFFFFF]">
                <div className="p-[5px]">
                  <PaymentsIcon className="w-10 h-10"/>
                </div>
                <div className="flex flex-col justofy-between items-center text-[20px] gap-y-[12px]">
                  <p className="text-[#81BA2E] font-bold">Developer Salary</p>
                  <div className="flex flex-row justify-between items-center gap-x-[30px]">
                    <p>₹ 1600</p>
                    <div className="flex flex-row justify-between items-center gap-x-[5px]">
                      <CalendarTodayIcon/> 
                      <p>25/11/2023</p>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-x-[5px]">
                      <ChatBubbleIcon/>
                      <p>This is monthly salary</p>
                    </div>
                  </div>
                </div>
                <div>
                  <DeleteRoundedIcon className="w-10 h-10"/>
                </div>
              </li>
              <li className=" flex flex-row justify-between items-center p-[20px] w-full border-[4px] border-[#b9cceb] h-[100px] rounded-[20px] bg-[#FFFFFF]">
                <div className="p-[5px]">
                  <PaymentsIcon className="w-10 h-10"/>
                </div>
                <div className="flex flex-col justofy-between items-center text-[20px] gap-y-[12px]">
                  <p className="text-[#81BA2E] font-bold">Developer Salary</p>
                  <div className="flex flex-row justify-between items-center gap-x-[30px]">
                    <p>₹ 1600</p>
                    <div className="flex flex-row justify-between items-center gap-x-[5px]">
                      <CalendarTodayIcon/> 
                      <p>25/11/2023</p>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-x-[5px]">
                      <ChatBubbleIcon/>
                      <p>This is monthly salary</p>
                    </div>
                  </div>
                </div>
                <div>
                  <DeleteRoundedIcon className="w-10 h-10"/>
                </div>
              </li>
              <li className=" flex flex-row justify-between items-center p-[20px] w-full border-[4px] border-[#b9cceb] h-[100px] rounded-[20px] bg-[#FFFFFF]">
                <div className="p-[5px]">
                  <PaymentsIcon className="w-10 h-10"/>
                </div>
                <div className="flex flex-col justofy-between items-center text-[20px] gap-y-[12px]">
                  <p className="text-[#81BA2E] font-bold">Developer Salary</p>
                  <div className="flex flex-row justify-between items-center gap-x-[30px]">
                    <p>₹ 1600</p>
                    <div className="flex flex-row justify-between items-center gap-x-[5px]">
                      <CalendarTodayIcon/> 
                      <p>25/11/2023</p>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-x-[5px]">
                      <ChatBubbleIcon/>
                      <p>This is monthly salary</p>
                    </div>
                  </div>
                </div>
                <div>
                  <DeleteRoundedIcon className="w-10 h-10"/>
                </div>
              </li>
              <li className=" flex flex-row justify-between items-center p-[20px] w-full border-[4px] border-[#b9cceb] h-[100px] rounded-[20px] bg-[#FFFFFF]">
                <div className="p-[5px]">
                  <PaymentsIcon className="w-10 h-10"/>
                </div>
                <div className="flex flex-col justofy-between items-center text-[20px] gap-y-[12px]">
                  <p className="text-[#81BA2E] font-bold">Developer Salary</p>
                  <div className="flex flex-row justify-between items-center gap-x-[30px]">
                    <p>₹ 1600</p>
                    <div className="flex flex-row justify-between items-center gap-x-[5px]">
                      <CalendarTodayIcon/> 
                      <p>25/11/2023</p>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-x-[5px]">
                      <ChatBubbleIcon/>
                      <p>This is monthly salary</p>
                    </div>
                  </div>
                </div>
                <div>
                  <DeleteRoundedIcon className="w-10 h-10"/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Incomes