import "./styles/RightSidebar.css"
import Image from 'next/image';
import backgroundImage from '../assets/background.png';

const RightSidebar = () => {
  return (
    <div className="flex flex-col justify-center border-[10px] h-[100%] ml-[2%] bg-[#EFEAE2] border-[#FFFFFF] rounded-[20px] text-[#2C2987] right-resp-850px p-[20px]">
        <Image
            src={backgroundImage}
            alt="Expense Tracker Image"
            className="w-[80%] self-center rounded-[10px]"
        />
    </div>
  )
}

export default RightSidebar