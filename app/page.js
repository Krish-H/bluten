import { assets } from "@/assets/assets";
import { Span } from "next/dist/trace";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex gap-5 w-full h-full ">
      <div className="flex-col  h-[1322px] w-[250px] mt-[80px] ml-[140px] space-y-[20px]">
       
        <div className="bg-[#62C3C6] bg-opacity-10 flex justify-center w-[250px] h-[34px] text-[24px] font-[600] items-center p-[2px_10px_2px_10px]">
          <span className="text-[#045A5C]">Filter</span>
        </div>
      
        <div className=" flex-col pt-[100px] bg-opacity-30 pb-[30px] gap-5 h-[125px] flex justify-center w-[250px] text-[16px] font-[600] items-center p-[2px_10px_2px_10px]">
          <span className="text-[#045A5C]">Preis</span>
          <div className="flex justify-start pl-12 items-center w-[250px] h-[7px] bg-[#62C3C6] bg-opacity-30">
            <Image width={15} height={20} src={assets.leaf_filtr} alt="leaf" />
            <Image src={assets.range_bar} alt="bar" />
            <Image width={15} height={20} alt="leaf" src={assets.leaf_filtr} />
          </div>
          <div className="flex gap-7 text-[#365758] font-[400]">
          <span>5$</span> - <span>$10</span>
            </div>   
          </div>


  <div className="flex   pt-10 w-[234px] h-[24px] items-center">
  <div className="text-[#365758] w-[234px] h-[24px] flex justify-center font-[600] text-[18px]">Hersteller</div> 
  <div className="transform rotate-180 ">
    <Image src={assets.Arrow_down} />
  </div>
</div>
<div className="pt-3 w-[234px]">
  <ul>
    <li className="flex items-center">
      <input type="checkbox" className="mr-2" />
      <span className="text-[#365758] font-[400] text-[16px]">ADREXpharma</span>
    </li>
    <li className="flex items-center">
      <input type="checkbox" className="mr-2" />
      <span className="text-[#365758] font-[400] text-[16px]">Aurora</span>
    </li>
    <li className="flex items-center">
      <input type="checkbox" className="mr-2" />
      <span className="text-[#365758] font-[400] text-[16px]">Avaay</span>
    </li>
    <li className="flex items-center">
      <input type="checkbox" className="mr-2" />
      <span className="text-[#365758] font-[400] text-[16px]">Bedrocan</span>
    </li>
    <li className="flex items-center">
      <input type="checkbox" className="mr-2" />
      <span className="text-[#365758] font-[400] text-[16px]">Cannamedica</span>
    </li>
  </ul>
  <div className="pt-5">
  <div className="flex  text-[#365758]  font-[400] text-[14px] justify-center h-[32px] items-center  border-[#ECFEAA] p-[2px_10px_2px_10px] gap-[30px] rounded-[24px_0px_24px_0px] border-[2px]">
    mehr anzeigen
  </div>
  </div>
</div>


<div className=" flex-col pt-[100px] bg-opacity-30 pb-[30px] gap-5 h-[125px] flex justify-center w-[250px] text-[16px] font-[600] items-center p-[2px_10px_2px_10px]">
          <span className="text-[#045A5C]">THC<span> Gehalt</span></span>
          <div className="flex justify-start pl-12 items-center w-[250px] h-[7px] bg-[#62C3C6] bg-opacity-30">
            <Image width={15} height={20} src={assets.leaf_filtr} alt="leaf" />
            <Image src={assets.range_bar} alt="bar" />
            <Image width={15} height={20} alt="leaf" src={assets.leaf_filtr} />
          </div>
          <div className="flex gap-7 text-[#365758] font-[400]">
          <span>11%</span> - <span>18%</span>
            </div>   
          </div>

          <div className=" flex-col pt-[100px] bg-opacity-30 pb-[30px] gap-5 h-[125px] flex justify-center w-[250px] text-[16px] font-[600] items-center p-[2px_10px_2px_10px]">
          <span className="text-[#045A5C]">CBD<span> Gehalt</span></span>
          <div className="flex justify-start pl-12 items-center w-[250px] h-[7px] bg-[#62C3C6] bg-opacity-30">
            <Image width={15} height={20} src={assets.leaf_filtr} alt="leaf" />
            <Image src={assets.range_bar} alt="bar" />
            <Image width={15} height={20} alt="leaf" src={assets.leaf_filtr} />
          </div>
          <div className="flex gap-7 text-[#365758] font-[400]">
          <span>1%</span> - <span>5%</span>
            </div>   
          </div>

        <div className="pt-8">
          <div className=" flex justify-center w-[250px] "><span>Genetik</span></div>
          <div className="flex gap-1 pt-2 w-[250px] justify-between">
            <div className="bg-[#62C3C6] p-[4px_10px_4px_10px] rounded-md">Indica</div>
            <div className="bg-[#62C3C6] bg-opacity-30 p-[4px_10px_4px_10px] rounded-md">Sativa</div>
            <div className="bg-[#62C3C6] bg-opacity-30  p-[4px_10px_4px_10px] rounded-md">Hybrid</div>
          </div>
        </div>


        <div className="pt-8">
          <div className=" flex justify-center w-[250px] "><span>Bestrahltung</span></div>
          <div className="flex gap-1 pt-2 w-[250px] justify-between">
            <div className="bg-[#62C3C6] p-[4px_10px_4px_10px] rounded-md">bestrahlt</div>
            <div className="bg-[#62C3C6] bg-opacity-30  p-[4px_10px_4px_10px] rounded-md">nicht<span> bestrahlt</span></div>
          </div>
        </div>


        <div className="flex   pt-10 w-[234px] h-[24px] items-center">
  <div className="text-[#365758] w-[234px] h-[24px] flex justify-center font-[600] text-[18px]">Terpene</div> 
  <div className="transform rotate-180 ">
    <Image src={assets.Arrow_down} />
  </div>
</div>


<div className="w-[125px] pt-10 flex items-center gap-[4px]">
  <Image width={12} height={12} src={assets.Close} />
  <span> alle</span><span> Filter</span><span> zurücksetzen</span>
</div>

</div>

<div className="pt-[90px] w-[970px] h-full grid grid-cols-3 grid-rows-3 gap-[10px] pr-[200px]">
  <div className="rounded-[30px_0px_30px_0px] h-[554px] border-[2px] border-[#28E3E9]"></div>
  <div className="rounded-[30px_0px_30px_0px] h-[554px] border-[2px] border-[#28E3E9]"></div>
  <div className="rounded-[30px_0px_30px_0px] h-[554px] border-[2px] border-[#28E3E9]"></div>
  <div className="rounded-[30px_0px_30px_0px] h-[554px] border-[2px] border-[#28E3E9]"></div>
  <div className="rounded-[30px_0px_30px_0px] h-[554px] border-[2px] border-[#28E3E9]"></div>
  <div className="rounded-[30px_0px_30px_0px] h-[554px] border-[2px] border-[#28E3E9]"></div>
  <div className="rounded-[30px_0px_30px_0px] h-[554px] border-[2px] border-[#28E3E9]"></div>
  <div className="rounded-[30px_0px_30px_0px] h-[554px] border-[2px] border-[#28E3E9]"></div>
  <div className="rounded-[30px_0px_30px_0px] h-[554px] border-[2px] border-[#28E3E9]"></div>
</div>



    </div>
    </>
  );
}
