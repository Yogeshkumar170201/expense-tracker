import Sidebar from "../components/Sidebar"

const Incomes = () => {
  return (
    <div className='flex flex-row justify-between p-[30px] flex-wrap bg-gradient-to-r from-[#ded3ed] to-[#8a6bb5]'>
      <Sidebar/>
      <div className="flex flex-col rounded-[30px] bg-[#EFEAE2] p-[20px] h-[90vh] w-[1200px] gap-y-[40px] text-[30px] text-[#231f82] border-8 border-white">
        <p className="font-bold text-[40px]">Incomes</p>
        <p className="text-center font-bold border-[8px] border-[#b9cceb] rounded-[20px] p-[10px]">Total Income : <span className="text-[#82BB2E]">₹1600</span></p>
        <div className="flex flex-row justify-between">
          <div className="w-[35%] flex flex-col justify-between gap-y-[15px]">
            <input placeholder="Salary Title" type="text" className="p-[10px] text-[20px] rounded-[10px] rounded-[10px] border-[4px] border-[#b9cceb]"/>
            <input placeholder="Salary Amount" type="text" className="p-[10px] text-[20px] rounded-[10px] border-[4px] border-[#b9cceb]"/>
            <input placeholder="Enter a Date" type="date" className="p-[10px] text-[20px] rounded-[10px] border-[4px] border-[#b9cceb]"/>
            <select className="p-[10px] text-[20px] rounded-[10px] border-[4px] border-[#b9cceb]">
              <option value="1">Salary</option>
              <option value="2">Freelancing</option>
              <option value="3">Investments</option>
              <option value="4">Stocks</option>
              <option value="5">Bitcoin</option>
              <option value="6">Bank Transfer</option>
              <option value="7">Youtube</option>
              <option value="8">Others</option>
            </select>
            <textarea name="reference" placeholder="Enter a Reference" className="p-[10px] text-[20px] rounded-[10px] w-full h-[150px] resize-none border-[4px] border-[#b9cceb]">
            </textarea>
            <button className="p-[10px] text-[20px] rounded-[30px] bg-[#f294ad] text-white font-bold"> + Add Income</button>
          </div>
          <div>
            <ul>
              <li>l1</li>
              <li>l2</li>
              <li>l3</li>
              <li>l4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Incomes