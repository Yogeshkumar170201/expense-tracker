"use client"
import "./page.css";

import DashboardLeft from "../components/DashboardLeft"
import RightbarTransactions from "../components/RightbarTransactions";

const Transactions = () => {
  return (
    <div className='flex flex-row justify-between h-[100vh] bg-gradient-to-r from-[#DED2EC] to-[#8A6BB5] p-[3%] main-resp-850px'>
      <div className='w-[30%] left-sidebar-850px'>
        <DashboardLeft/>
      </div>
      <div className='w-[70%] right-sidebar-850px'>
        <RightbarTransactions/>
      </div>
    </div>
  )
}

export default Transactions