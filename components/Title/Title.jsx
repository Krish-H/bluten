import Image from 'next/image';
import { assets } from '@/assets/assets';

const Title = () => {
  return (
    <div className="flex items-center w-full h-[50px]">
      <div className="flex mt-[75px] ml-[140px] gap-[12px]">
        <Image src={assets.leaf_thick} width={20} height={26} alt="title" />
        <h2 className="text-[#116A6C] font-[600] text-[36px]">Blüten</h2>
      </div>
      <div className="flex flex-1 justify-center mt-[88px] mr-[22px] gap-4 ">
        <div className="bg-[#EEF7F7] w-[266px] px-[10px] py-[2px] flex items-center justify-between rounded-[30px]">
          <input
            type="search"
            placeholder="Suchen"
            className="bg-transparent text-[#62C3C6] text-[16px] font-[200] outline-none"
          />
          <Image src={assets.Search} alt="search" width={16.69} height={16.71} />
        </div>
        <div className="text-[#365758] font-[600] bg-[#62C3C6] bg-opacity-30 w-[163px]  pl-[12px] pr-[12px] gap-[10px] py-[2px] flex justify-between item-center ">
           <p>Sortieren<span>nach</span></p>
           <Image src={assets.Arrow_down} width={16} height={9} className=""/>
        </div>
        <div className="text-[#365758] font-[600] bg-[#62C3C6] bg-opacity-30 w-[163px] h-[34px] pl-[12px] pr-[12px] gap-[10px] py-[2px] flex justify-between items-center">
  <span>Verfügbarkeit</span>
  <div className="flex items-center justify-end bg-[#62C3C6] bg-opacity-30 w-[24px] h-[9px] rounded-full">
    <Image src={assets.Ellipse} width={15} height={15} />
  </div>
</div>
<div className="text-[#365758] font-[600] p-[2px_12px_2px_12px] bg-[#62C3C6] bg-opacity-30  pl-[12px] pr-[12px] gap-[10px] py-[2px] flex justify-between items-center">
 
    <Image src={assets.burger_menu} width={24} height={24} />
  
</div>
      </div>
    </div>
  );
};

export default Title;
