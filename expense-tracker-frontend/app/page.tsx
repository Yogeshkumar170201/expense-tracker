import { LeftSidebar } from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import "./page.css";


export default function Home() {
  return (
    <div className='flex flex-row justify-between h-[100vh] bg-gradient-to-r from-[#DED2EC] to-[#8A6BB5] p-[3%] main-resp-850px'>
      <div className='w-[30%] left-sidebar-850px'>
        <LeftSidebar/>
      </div>
      <div className='w-[70%] right-sidebar-850px'>
        <RightSidebar/>
      </div>
    </div>
  )
}
