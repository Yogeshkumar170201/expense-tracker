"use client";

import './styles/RightbarExpense.css'
import { useState, useEffect } from "react";
import ExpenseImage from '../assets/ExpenseImage.png';
import Image from 'next/image';
import axios from 'axios';


const RightbarExpense = () => {

    const cookies = document.cookie.split('=')
    const token = cookies.at(1);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/user/expense/${token}`,{
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


    const [expenseInput, setExpenseInput] = useState({
        "title":"",
        "amount":"",
        "dateOfExpense":"",
        "source":"Education",
        "reference":""
      })
    
      const handleChange = (e: { target: { name: String; value: String; }; })=>{
        setExpenseInput({ ...expenseInput, [e.target.name as unknown as string]: e.target.value })
      }
    
      const submitExpenseInput = async()=>{
        console.log(expenseInput);
        try {
            const res = await axios.post("http://localhost:8082/transaction/addExpense", expenseInput, {
                headers:{
                    "Authorization": "Bearer "+token
                }
            })
            alert(res.data.message);
            // console.log(res.data.message);
        } catch (error:any) {
            alert(error.message);
        }finally{
            setExpenseInput(
                {
                  "title":"",
                  "amount":"",
                  "dateOfExpense":"",
                  "source":"Education",
                  "reference":""
                }
            )
        }
        
      }

  return (
    <div className="flex flex-col rounded-[30px] bg-[#EFEAE2] p-[20px] h-[90vh] ml-[2%] text-[30px] text-[#231f82] border-8 border-white right-resp-850px">
        <p className="font-bold text-[40px]">Expenses</p>
        <p className="text-center font-bold border-[8px] border-[#b9cceb] rounded-[20px] p-[10px]">Total Expense : <span className="text-[#C32D30]">₹{res}</span></p>
        <div className="flex flex-row justify-between mt-[2%] right-body-resp-850px">
          <div className="w-[40%] flex flex-col justify-between gap-y-[15px] right-form-resp-850px">
            <input placeholder="Expense Title" type="text" className="p-[10px] text-[20px] rounded-[10px] rounded-[10px] border-[4px] border-[#b9cceb]" name="title" value={expenseInput.title} onChange={handleChange} />
            <input placeholder="Expense Amount" type="text" className="p-[10px] text-[20px] rounded-[10px] border-[4px] border-[#b9cceb]" name="amount" value={expenseInput.amount} onChange={handleChange}/>
            <input placeholder="Enter a Date" type="date" className="p-[10px] text-[20px] rounded-[10px] border-[4px] border-[#b9cceb]" name="dateOfExpense" value={expenseInput.dateOfExpense} onChange={handleChange}/>
            <select className="p-[10px] text-[20px] rounded-[10px] border-[4px] border-[#b9cceb]" name="source" value={expenseInput.source} onChange={handleChange}>
              <option value="Education">Education</option>
              <option value="Groceries">Groceries</option>
              <option value="Health">Health</option>
              <option value="Subscription">Subscription</option>
              <option value="Takeaways">Takeaways</option>
              <option value="Clothing">Clothing</option>
              <option value="Travelling">Travelling</option>
              <option value="Others">Others</option>
            </select>
            <textarea placeholder="Enter a Reference" className="p-[10px] text-[20px] rounded-[10px] w-full h-[150px] resize-none border-[4px] border-[#b9cceb]" name="reference" value={expenseInput.reference} onChange={handleChange}>
            </textarea>
            <button className="p-[10px] text-[20px] rounded-[30px] bg-[#f294ad] text-white font-bold hover:bg-[#ed668a]" onClick={submitExpenseInput}> + Add Expense</button>
          </div>
            <div className='w-[40%] self-center mr-[3%] right-icon-resp-850px'>
                <Image
                    src={ExpenseImage}
                    alt="Expense Tracker Image"
                    className="w-[100%] rounded-[10px]"
                />
            </div>
        </div>
    </div>
  )
}

export default RightbarExpense