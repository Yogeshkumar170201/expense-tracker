"use client";

import './styles/RightbarIncome.css'
import { useEffect, useState } from "react";
import IncomeImage from '../assets/IncomeImage.png';
import Image from 'next/image';
import axios from 'axios';



const RightbarIncome = () => {

  const cookies = document.cookie.split('=');
  const token = cookies.at(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/user/income/${token}`,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setRes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

  }, []); 


  const [res, setRes] = useState();


    const [incomeInput, setIncomeInput] = useState({
        "title":"",
        "amount":"",
        "dateOfIncome":"",
        "source":"Salary",
        "reference":""
      })

    
      const handleChange = (e: { target: { name: String; value: String; }; })=>{
        setIncomeInput({ ...incomeInput, [e.target.name as unknown as string]: e.target.value })
      }
    
      const submitIncomeInput = async()=>{

        console.log(incomeInput);
        try {
            const res = await axios.post("http://localhost:8082/transaction/addIncome", incomeInput, {
                headers:{
                    "Authorization": "Bearer "+token
                }
            })
            alert(res.data.message);
            // console.log(res.data.message);
        } catch (error:any) {
            alert(error.message);
        }finally{
            setIncomeInput(
                {
                  "title":"",
                  "amount":"",
                  "dateOfIncome":"",
                  "source":"Salary",
                  "reference":""
                }
            )
        }
        
      }

  return (
    <div className="flex flex-col rounded-[30px] bg-[#EFEAE2] p-[20px] h-[90vh] ml-[2%] text-[30px] text-[#231f82] border-8 border-white right-resp-850px">
        <p className="font-bold text-[40px]">Incomes</p>
        <p className="text-center font-bold border-[8px] border-[#b9cceb] rounded-[20px] p-[10px]">Total Income : <span className="text-[#82BB2E]">₹{res}</span></p>
        <div className="flex flex-row justify-between mt-[2%] right-body-resp-850px">
          <div className="w-[40%] flex flex-col justify-between gap-y-[15px] right-form-resp-850px">
            <input placeholder="Salary Title" type="text" className="p-[10px] text-[20px] rounded-[10px] rounded-[10px] border-[4px] border-[#b9cceb]" name="title" value={incomeInput.title} onChange={handleChange} />
            <input placeholder="Salary Amount" type="text" className="p-[10px] text-[20px] rounded-[10px] border-[4px] border-[#b9cceb]" name="amount" value={incomeInput.amount} onChange={handleChange}/>
            <input placeholder="Enter a Date" type="date" className="p-[10px] text-[20px] rounded-[10px] border-[4px] border-[#b9cceb]" name="dateOfIncome" value={incomeInput.dateOfIncome} onChange={handleChange}/>
            <select className="p-[10px] text-[20px] rounded-[10px] border-[4px] border-[#b9cceb]" name="source" value={incomeInput.source} onChange={handleChange}>
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
            <div className='w-[40%] self-center mr-[3%] right-icon-resp-850px'>
                <Image
                    src={IncomeImage}
                    alt="Expense Tracker Image"
                    className="w-[100%] rounded-[10px]"
                />
            </div>
        </div>
    </div>
  )
}

export default RightbarIncome