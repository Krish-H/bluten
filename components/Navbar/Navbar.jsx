import Image from 'next/image';
import { assets } from '@/assets/assets';

const Navbar = () => {
  return (
    <div className="flex items-center mt-[60px] w-[1300px] pl-[138px] pr-[138px]">
      <div className='bg-[#EEF7F7] w-[266px] px-[10px] py-[2px] flex items-center justify-between rounded-[30px] mr-[30px]'>
        <input type="search" placeholder="Suchen" className="bg-transparent text-[#62C3C6] text-[16px] font-[200] outline-none " />
        <Image src={assets.Search} alt="search" width={16.69} height={16.71} />
      </div>
      
      <ul className="flex space-x-6 items-center">
        <li className="flex items-center space-x-2 font-[700] ">
          <Image src={assets.leaf_thick} alt="Rezept einlösen" width={10} height={16} />
          <span>Rezept<span>einlösen</span></span>
        </li>
        <li className="flex items-center space-x-2 font-[200] ">
          <Image src={assets.leaf_thick} alt="Live Bestand" width={10} height={16} />
          <span>Live<span>Bestand</span></span>
        </li>
        <li className="flex items-center space-x-2 font-[200] ">
          <Image src={assets.leaf_thick} alt="Videosprechstunde" width={10} height={16} />
          <span>Videosprechstunde</span>
        </li>
        <li className="flex items-center space-x-2 font-[200] ">
          <Image src={assets.leaf_thick} alt="FAQs" width={10} height={16} />
          <span>FAQs</span>
        </li>
        <li className="flex items-center space-x-2 font-[200] ">
          <Image src={assets.leaf_thick} alt="Kontakt" width={10} height={16} />
          <span>Kontakt</span>
        </li>
        <div className="flex gap-4 ">
        <li className="flex items-center w-[36px] h-[30px]">
          <Image src={assets.cart} alt="cart" width={24} height={24} />
          <div className="relative right-2">
    <span className="bg-[#62C3C64D] text-[12px] font-[500] p-2 rounded-full flex items-center justify-center w-2 h-2">
      1
    </span>
  </div>
        </li>
        <li className="flex items-center bg-[#ECFEAA] w-[110px] h-[33px]  gap-[10px] rounded-[24px_0px_24px_0px] ">
          <div className=" p-[7px_18px_8px_18px]">
          <span>Anmelden</span>
          </div>
        </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
