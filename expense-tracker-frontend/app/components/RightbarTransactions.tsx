"use client";
import "./styles/RightbarTransactions.css"
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import PaymentsIcon from '@mui/icons-material/Payments';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";

const RightbarTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const cookies = document.cookie.split('=');
  const token = cookies.at(1);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/user/transactions/${token}`,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const trans = response.data;
        if(trans.length > 6){
          trans.slice(0,5);
        }
        console.log(trans);
        console.log(trans[0])
        setTransactions(trans);
      } catch (error:any) {
        alert(error.message);
      }
    }
    fetchTransactions();
  }, []);

  const deleteTransactionById = async(id : bigint)=> {
    try{
      const res = await axios.delete(`http://localhost:8082/transaction/deleteTransaction/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
      });
      console.log(res);
      alert(res.data.message);
    }catch(error:any){
      alert(error.message);
    }
  }

  return (
    <div className="flex flex-col border-[10px] h-[100%] ml-[2%] bg-[#EFEAE2] border-[#FFFFFF] rounded-[20px] text-[#2C2987] right-resp-850px p-[20px]">
        <p className="text-[40px] font-bold">Transactions</p>
        <div className="flex flex-col mt-[1%]">
          <ul>
            {transactions.map((transaction:any) => (
              
              <li key={transaction['id']} className=" flex flex-row justify-between items-center p-[20px] w-full border-[4px] border-[#b9cceb] h-[100px] rounded-[20px] bg-[#FFFFFF] mt-[1%]">
                <div className="p-[5px]">
                  <PaymentsIcon className="w-10 h-10"/>
                </div>
                <div className="flex flex-col justofy-between items-center text-[20px] gap-y-[12px]">
                  {
                    transaction['type'] === 'Income'?
                    <p className="text-[#81BA2E] font-bold">{transaction['title']}</p> : 
                    <p className="text-[#C32D30] font-bold">{transaction['title']}</p>
                  }
                  <div className="flex flex-row justify-between items-center gap-x-[30px]">
                    {
                      transaction['type'] === 'Income'?
                      <p className="text-[#81BA2E]">₹ {transaction['amount']}</p> : 
                      <p className="text-[#C32D30]">₹ {transaction['amount']}</p>
                    }
                    <div className="flex flex-row justify-between items-center gap-x-[5px]">
                      <CalendarTodayIcon/> 
                      <p>{transaction['dateOfTransaction']}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-x-[5px]">
                      <ChatBubbleIcon/>
                      <p>{transaction['reference']}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Button className="pointer-cursor text-[#2C2987]" onClick={()=>deleteTransactionById(transaction['id'])}>
                    <DeleteRoundedIcon className="w-10 h-10"/>
                  </Button>
                </div>
              </li>
            
            ))}
          </ul>
        </div>
    </div>
  )
}

export default RightbarTransactions