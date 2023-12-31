"use client"

import './styles/DashboardLeft.css'

import ShowChartIcon from '@mui/icons-material/ShowChart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import Link from 'next/link';
import axios from 'axios';
import {useRouter} from 'next/navigation';


const DashboardLeft = () => {
    const router  = useRouter();
    const logout = async()=>{
        const cookies = document.cookie.split('=')
        const token = cookies.at(1);
    
        const pastDate = new Date(0); // Create a date in the past
        document.cookie = 'token=; expires=' + pastDate.toUTCString() + '; path=/';
        router.push('/login');

        // console.log(token);
        const res = await axios.post('http://localhost:8082/auth/logout', {
            headers:{
                "Authorization": "Bearer "+token
            }
        });
        console.log(res)
    }

  return (
    <div className="flex flex-col rounded-[30px] bg-[#EFEAE2] p-[20px] h-[100%] gap-y-[70px] text-[30px] text-[#231f82] border-8 border-white left-resp-850px">
        <div className='flex flex-row gap-x-[35px] items-center'>
        <div>
        <AccountCircleRoundedIcon className="text-[#231f82] h-20 w-20"/>
        </div>
        <div className='self-center'>
          <p className='font-bold text-[40px]'>Yogesh</p>
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
      <div className='flex flex-row mt-[80px] gap-x-[15px] cursor-pointer' onClick={logout}>
          <ExitToAppRoundedIcon className="text-[#231f82] h-20 w-20"/>
          <p className='self-center font-bold'>Signout</p>
      </div>
    </div>
  )
}

export default DashboardLeft