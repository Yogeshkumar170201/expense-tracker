import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

export default function Home() : JSX.Element{
  return (
    <div className='flex flex-row justify-between p-[30px] flex-wrap bg-gradient-to-r from-[#ded3ed] to-[#8a6bb5]'>
      <Sidebar/>
      <Dashboard/>
    </div>
  )
}
