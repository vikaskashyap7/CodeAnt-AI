import React, { useState } from 'react'
import img from "../assests/Subtract.png"
import { SlArrowDown } from "react-icons/sl";
import { AiOutlineHome } from "react-icons/ai";
import { HiCodeBracket } from "react-icons/hi2";
import { IoIosCloudOutline, IoMdClose } from "react-icons/io";
import { LuBookText } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const [isOpen,setIsOpen]=useState(false);
    const toggleNavbar=()=>{
        setIsOpen(!isOpen);
    };
  return (
    <div className='md:w-[242px] w-[440px] md:h-[960px] h-[64px]   border-r bg-[#FFFFFF] flex flex-col justify-between'>
        <div className='md:w-[242px] md:h-[356px] w-[440px] h-[64px] '>
            <div className='md:h-[92px] h-[64px]  md:mt-[24px] '>
                <div className='flex gap-2 md:ml-[20px] ml-[16px] mt-[16px] h-[32px]   justify-between'>
                    <div className=' flex '>
                      <img src={img} alt="img"  className='w-[28.5px] h-[32px]'/>
                      <div className='font-[satoshi] font-[400] text-[24px] leading-[26.4px] text-[#181D27] '>CodeAnt AI</div>
                    </div>
                    <div className=' md:hidden'>
                        <button onClick={toggleNavbar} >
                            {isOpen?<IoMdClose className=' w-8 h-9'/>: <RxHamburgerMenu  className=' w-8 h-9'/>}
                        </button>
                    </div>
                </div>
                <div className='ml-[20px] h-[40px] w-[202px] border mt-[10px] rounded-md hidden md:flex justify-center items-center gap-1'>
                  <div className='font-[inter] font-[400] text-[16px] leading-[25px] text-[#181D27]'>UtkarshDhairyaPanwar...</div>
                  <SlArrowDown />
                </div>
                <div className=' hidden md:flex flex-col justify-center items-center mt-2 '>
                    <div className='w-[210px] h-[48px] flex pt-[10px] pl-[14px] gap-3 bg-[#1570EF] rounded-md border-[2px]'>
                      <AiOutlineHome size={24} color='white'/>
                      <p className='font-[inter] font-[400] text-[17px] leading-[26px] text-[#FFFFFF]'>Repositories</p>
                    </div>
                    <div className='w-[210px] h-[48px]  flex pt-[10px] pl-[14px] gap-3'>
                      <HiCodeBracket size={24} color='#414651'/>
                      <p className='font-[inter] font-[400] text-[17px] leading-[26px] text-[#414651]'>AI Code Review</p>
                    </div>
                    <div className='w-[210px] h-[48px]  flex pt-[10px] pl-[14px] gap-3'>
                      <IoIosCloudOutline size={24} color='#414651'/>
                      <p className='font-[inter] font-[400] text-[17px] leading-[26px] text-[#414651]'>Cloud Security</p>
                    </div>
                    <div className='w-[210px] h-[48px]  flex pt-[10px] pl-[14px] gap-3'>
                      <LuBookText size={24} color='#414651'/>
                      <p className='font-[inter] font-[400] text-[17px] leading-[26px] text-[#414651]'>How to Use</p>
                    </div>
                    <div className='w-[210px] h-[48px]  flex pt-[10px] pl-[14px] gap-3'>
                      <IoSettingsOutline size={24} color='#414651'/>
                      <p className='font-[inter] font-[400] text-[17px] leading-[26px] text-[#414651]'>Settings</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='hidden md:h-[112px]  md:flex md:flex-col'>
           <div className='w-[210px] h-[44px] ml-[28px] mt-[10px] flex gap-3'>
                <BsTelephone size={20} color='#414651'/>
                <p className='font-[inter] font-[400] text-[18px] leading-[26px] text-[#414651]'>Support</p>
           </div>
          <Link to={'/signin'}> <div className='w-[210px] h-[44px] flex gap-3 ml-[28px]'>
                <FiLogOut size={20} color='#414651'/>
                <p className='font-[inter] font-[400] text-[17px] leading-[26px] text-[#414651]'>Logout</p>
            </div></Link >
        </div>
         <div>
          {
            isOpen&&(
              <div className='w-[440px] h-[392px] bg-white  absolute '>
                <div className='mx-auto my-auto w-[408px] h-[360px] '>
                  <div className=' h-[40px] w-[408px] border  rounded-md  flex justify-between items-center   '>
                    <div className='font-[inter]  font-[400] text-[16px] ml-3 leading-[25px] text-[#181D27]'>UtkarshDhairyaPanwar</div>
                    <SlArrowDown className=' mr-3'/>
                  </div>
                  <div className='flex flex-col  mt-2 w-[408px] h-[308px]'>
                    <div className='w-[308px] h-[44px] flex pt-[10px] pl-[14px] gap-3 '>
                      <AiOutlineHome size={24} />
                      <p className='font-[inter] font-[400] text-[17px] leading-[26px] text-[#414651]'>Repositories</p>
                    </div>
                    <div className='w-[308px] h-[44px]  flex pt-[10px] pl-[14px] gap-3'>
                      <HiCodeBracket size={24} color='#414651'/>
                      <p className='font-[inter] font-[400] text-[17px] leading-[26px] text-[#414651]'>AI Code Review</p>
                    </div>
                    <div className='w-[308px] h-[44px]  flex pt-[10px] pl-[14px] gap-3'>
                      <IoIosCloudOutline size={24} color='#414651'/>
                      <p className='font-[inter] font-[400] text-[17px] leading-[26px] text-[#414651]'>Cloud Security</p>
                    </div>
                    <div className='w-[308px] h-[44px]  flex pt-[10px] pl-[14px] gap-3'>
                      <LuBookText size={24} color='#414651'/>
                      <p className='font-[inter] font-[400] text-[17px] leading-[26px] text-[#414651]'>How to Use</p>
                    </div>
                    <div className='w-[308px] h-[44px]  flex pt-[10px] pl-[14px] gap-3'>
                      <IoSettingsOutline size={24} color='#414651'/>
                      <p className='font-[inter] font-[400] text-[17px] leading-[26px] text-[#414651]'>Settings</p>
                    </div>
                    <div className='w-[308px] h-[44px]  pt-[10px] pl-[14px] flex gap-3'>
                      <BsTelephone size={20} color='#414651'/>
                      <p className='font-[inter] font-[400] text-[18px] leading-[26px] text-[#414651]'>Support</p>
                    </div>
                    <Link to={'/signin'}><div className='w-[308px] h-[44px] flex gap-3 pt-[10px] pl-[14px] '>
                      <FiLogOut size={20} color='#414651'/>
                      <p className='font-[inter] font-[400] text-[17px] leading-[26px] text-[#414651]'>Logout</p>
                    </div></Link>
                  </div>
                </div>
              </div>
            )
          }
         </div>
    </div>
  )
}

export default Sidebar
