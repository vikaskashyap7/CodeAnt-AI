import React from 'react'
import { SlRefresh } from "react-icons/sl";
import { GoPlus } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import {projects} from "../data.js"
import { GoDatabase } from "react-icons/go";


const Layout = () => {
  return (
    <div className='md:w-[1150px] md:h-[912px] w-[440px] h-[824px] md:rounded-xl border-t md:border md:border-[#E9EAEB] shadow-md md:mt-[24px] md:ml-[24px] z-0'>
      <div className='md:h-[156px] md:w-[1150px] w-[440px] h-[208px]  border-b md:border-[#E9EAEB] flex flex-col justify-around'>
        <div className='md:w-[1102px] md:h-[56px] w-[408px] h-[108px] flex md:flex-row flex-col  md:mt-[20px] ml-[16px] md:ml-[24px] '>
          <div className='md:w-[805px] h-[56px] flex flex-col  justify-between'>
            <div className=' font-[inter] font-[600] text-[24px] leading-[24px] text-[#181D27]'>Repositories</div>
            <div className=' font-[inter] font-[400] text-[14px] leading-[20px] text-[#414651]'>33 total respositories</div>
          </div>
          <div className='w-[297px] h-[40px] flex gap-[12px]  mt-[8px]'>
            <div className='w-[127px] h-[40px] border border-[#D5D7DA] shadow-md rounded-md flex justify-center items-center cursor-pointer gap-2'>
              <SlRefresh size={20}/>
              <div className=' font-[inter] font-[400] text-[14px] leading-[20px] text-[#414651]'>Refresh All</div>
            </div>
            <div className='w-[158px] h-[40px] bg-[#1570EF] border border-[#D5D7DA] shadow-md rounded-md flex justify-center items-center cursor-pointer gap-2 '>
               <GoPlus size={20} color='white'/>
              <div className=' font-[inter] font-[400] text-[14px] leading-[20px]  text-white'>Add Repositories</div>
            </div>
          </div>
        </div>
        <div className='w-[366px] h-[44px] rounded-lg border ml-[16px] md:ml-[24px] border-[#D5D7DA]'>
          <div className='ml-[14px] mt-[10px] flex gap-2'>
            <CiSearch size={20} color='#414651'/>
            <div className=' font-[inter] font-[400] text-[16px] leading-[20px]  text-[#414651]'>Search Repositories</div>
          </div>
        </div>
      </div>
      <div>
        {projects.map((project, index) => (
          <div key={index} className={`flex flex-col h-[108px] border-b ${
            index === 1 ? "bg-gray-100" : "bg-white"
          } border-[#D5D7DA]`}>
            <div className='mt-24px flex gap-3  mt-[24px] ml-[24px]'>
              <span className="font-[inter] font-[540] text-[20px] leading-[24px] text-[#181D27]">
                  {project.name}
                </span>
                <span className='w-[59px] h-[24px] border border-[#B2DDFF] bg-blue-50 rounded-full font-[inter] font-[400] text-[14px] leading-[20px] text-[#175CD3] text-center'>
                  {project.type}
                </span>
            </div>
            <div className="flex gap-5 md:gap-9 mt-[12px] ml-[24px] ">
              <div className="font-[inter] font-[400] text-[16px] leading-[24px] flex gap-2">{project.language} <span className='mt-[0.3rem]'><GoDotFill color='blue' /></span></div>
              <div className="font-[inter] font-[400] text-[16px] leading-[24px] flex gap-2">
                <span className='mt-1'><GoDatabase /></span>
                {project.size}
              </div>
              <div className="font-[inter] font-[400] text-[16px] leading-[24px]">Updated {project.updated}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Layout