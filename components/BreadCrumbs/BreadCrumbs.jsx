import Image from 'next/image';
import { assets } from '@/assets/assets';

const BreadCrumbs = () => {
  return (
    <>
      <div className="flex items-center  text-[1rem] gap-[428px] mt-[55px] ml-[140px] w-[100%]">
        <div className="flex items-center gap-[20px]">
          <span>Home</span>
          <span>
            <Image src={assets.right_arrow} />
          </span>
          <span>Livebestand</span>
          <span>
            <Image src={assets.right_arrow} />
          </span>
          <span className="font-[700]">
            Cannabis<span>Blüten</span>
          </span>
        </div>
        <div className=" felx-col item-center pt-[17px] w-[223px] h-[63px] space-y-[10px]">
          <div className="flex space-x-2 justify-center item-center font-[14px] "><span>GKV</span><span>mit</span><span>Kostenübernahme?</span></div>
          <div className=" flex justify-center font-[14px] border-[#62C3C6] p-[2px_10px_2px_10px] gap-[30px] rounded-[24px_0px_24px_0px]  border-[2px] ">
          Preisoptionen
          </div>
          
        </div>
      </div>
    </>
  );
}

export default BreadCrumbs;
