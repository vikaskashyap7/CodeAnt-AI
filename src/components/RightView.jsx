import React, { useState } from 'react'
import img from "../assests/Subtract.png"
import { FaGithub,FaBitbucket,FaGitlab } from "react-icons/fa6";
import { GoKey } from "react-icons/go";
import { VscAzureDevops } from "react-icons/vsc";
import { Link } from 'react-router-dom';
const RightView = () => {
    const [selected, setSelected] = useState('SAAS'); 
  return (
    <div className=' bg-[#FAFAFA]'>
        <div className='w-[408px] h-[582.34px]  md:w-[672px] md:h-[602.34px] rounded-xl  border-[1px] md:mt-[150.83px] md:ml-[30px] mt-[124.83px] ml-[16pxpx] bg-[#FFFFFF] shadow-md'>
            <div className='md:w-[624px] md:h-[124px] w-[376px] h-[112px] flex flex-col gap-[24px] md:gap-[36px] mt-[36px] md:ml-[24px] ml-[16px]'> 
               <div className='mx-auto flex md:gap-3 gap-[13.76px]'>
                  <img src={img} alt="img" /> 
                  <div className='font-[satoshi]  font-[400] text-[30px] leading-[33px] text-[#181D27]'>CodeAnt AI</div>
               </div>
               <div className='font-[inter] font-[600] text-[24px] md:text-[32px] leading-[48px] text-[#181D27] mx-auto'>Welcome to CodeAnt AI</div>
            </div>
            <div className='md:w-[624px] md:h-[60px] w-[376px] h-[52px] ml-[16px] md:ml-[24px] rounded-md border  flex  '>
                <button className={`w-[187px] h-[52px] md:w-[311px] md:h-[59px]   font-[inter] font-[600] text-[20px] leading-[28px] ${
                    selected === 'SAAS'? 'bg-[#1570EF] rounded-[8px] border-[2px] text-[#FFFF]': 'bg-[#ffff] text-[#414651]'}`} 
                    onClick={() => setSelected('SAAS')}>
                    SAAS
                </button>
                <button className={`md:w-[311px] md:h-[59px] w-[187px] h-[52px] font-[inter] font-[600] text-[20px] leading-[28px] ${
                    selected === 'Self Hosted'? 'bg-[#1570EF] rounded-[8px] border-[2px] text-[#FFFFFF]': 'bg-[#FFFFFF] text-[#414651]'}`} 
                    onClick={() => setSelected('Self Hosted')}>
                    Self Hosted
                </button>
            </div>
            <div className=' mt-[36px] md:mt-[34px] border-b-2'></div>
            <div className='mt-5'>
                {
                    selected === 'SAAS'?(
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <Link to={'/dashboard'}><div className='md:w-[446px] h-[57.59px] w-[376px] rounded-lg border border-[#D8DAE5] flex justify-center items-center gap-3'>
                              <FaGithub width={24} height={24} />
                              <div className='font-[inter] font-[600] text-[16px] leading-[24px] text-[#171717]'>Sign in with Github</div>
                            </div></Link>
                            <Link to={'/dashboard'}><div className='w-[376px] md:w-[446px] h-[57.59px] rounded-lg border border-[#D8DAE5] flex justify-center items-center gap-3'>
                              <FaBitbucket color='blue' width={24} height={24}/>
                              <div className='font-[inter] font-[600] text-[16px] leading-[24px] text-[#171717]'>Sign in with Bitbucket</div>
                            </div></Link>
                            <Link to={'/dashboard'}><div className='w-[376px] md:w-[446px] h-[57.59px] rounded-lg border border-[#D8DAE5] flex justify-center items-center gap-3'>
                              <VscAzureDevops color='blue' width={24} height={24}/>
                              <div className='font-[inter] font-[600] text-[16px] leading-[24px] text-[#171717]'>Sign in with Azure Devops</div>
                            </div></Link>
                            <Link to={'/dashboard'}><div className='w-[376px] md:w-[446px] h-[57.59px] rounded-lg border border-[#D8DAE5] flex justify-center items-center gap-3'>
                              <FaGitlab color="#FC6D26" width={24} height={24}/>
                              <div className='font-[inter] font-[600] text-[16px] leading-[24px] text-[#171717]'>Sign with GitLab</div>
                            </div></Link>
                        </div>
                    ):(
                        <div className='flex flex-col justify-center items-center gap-4'>
                           <Link to={'/dashboard'}><div className='w-[376px] md:w-[446px] h-[57.59px] rounded-lg border border-[#D8DAE5] flex justify-center items-center gap-3'>
                              <FaGitlab color="#FC6D26" width={24} height={24}/>
                              <div className='font-[inter] font-[600] text-[16px] leading-[24px] text-[#171717]'>Self Hosted GitLab</div>
                            </div></Link>
                            <Link to={'/dashboard'}><div className='w-[376px] md:w-[446px] h-[57.59px] rounded-lg border border-[#D8DAE5] flex justify-center items-center gap-3'>
                              <GoKey width={24} height={24}/>
                              <div className='font-[inter] font-[600] text-[16px] leading-[24px] text-[#171717]'>Sign in with SSO</div>
                            </div></Link>
                            
                        </div>
                    )
                }
            </div>
        </div>
        <div className='font-[inter] font-[400] text-[16px] leading-[24px] text-[#171717] ml-[32px] mt-[32px] text-center'>By signing up you agree to the <span className='font-[inter] font-[700] text-[16px] leading-[24px] text-[#181D27]'>Privacy Policy</span>.</div>
    </div>
  )
}

export default RightView