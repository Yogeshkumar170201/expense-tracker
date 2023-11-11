import Sidebar from "../components/Sidebar"

const Transactions = () => {
  return (
    <div className='flex flex-row justify-between p-[30px] flex-wrap bg-gradient-to-r from-[#ded3ed] to-[#8a6bb5]'>
    <Sidebar/>
    <div className="flex flex-col rounded-[30px] bg-[#EFEAE2] p-[20px] h-[90vh] w-[1200px] gap-y-[70px] text-[30px] text-[#231f82] border-8 border-white">
      Transactions
    </div>
  </div>
  )
}

export default Transactions