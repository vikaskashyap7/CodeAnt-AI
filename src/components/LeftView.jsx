import React from 'react'
import img from "../assests/Subtract.png"
import img1 from "../assests/Group 4.png"

import footImage from "../assests/footImage.png"
import { FaArrowUp } from "react-icons/fa6";

function LeftView() {
  return (
   
        <div className='w-[720px] h-[969px] border-r-[1px] relative '>
            <div className='w-[474px] h-[322px]  absolute top-[319px] left-[123px] '>
               <div className='w-[447px] h-[170px]   bg-[#FFFFFF] relative -z-1 rounded-3xl shadow-2xl'>
                    <div className='  w-[314px] h-[31px] absolute top-[21px] left-[22px] flex'>
                        <img src={img} alt="img" width={28} height={31}/>
                        <div className=' font-[inter]  font-[700] text-[18px] leading-[27px]'>AI to Detect & Autofix Bad Code</div>
                    </div>
                    <div className='w-[447px] absolute top-[72px] border-t-[1px]'></div>
                    <div className='flex'>
                        <div className='w-[123px] h-[47px] absolute top-[94.5px] left-[20px] '>
                            <div className='font-[inter] font-[700] text-[18px] leading-[27px] text-[#081735] text-center'>30+</div>
                            <div className='font-[inter] font-[400] text-[14px] leading-[20px] text-[#081735]'>Language Support</div>
                        </div>
                        <div className='w-[75px] h-[47px] absolute top-[94.5px] left-[188.5px] '>
                            <div className='font-[inter] font-[700] text-[18px] leading-[27px] text-[#081735] text-center'>10K+</div>
                            <div className='font-[inter] font-[400] text-[14px] leading-[20px] text-[#081735]'>Developers</div>
                        </div>
                        <div className='w-[85px] h-[47px] absolute top-[94.5px] left-[320.5px] '>
                            <div className='font-[inter] font-[700] text-[18px] leading-[27px] text-[#081735] text-center'>100K+</div>
                            <div className='font-[inter] font-[400] text-[14px] leading-[20px] text-[#081735]'>Hours Saved</div>
                        </div>
                    </div>
                </div>
                <div className='w-[270px] h-[164px] absolute top-[148px] left-[204px] z-10  rounded-3xl shadow-2xl bg-[#ffff]'>
                    <div className='w-[204px] h-[133.37px] absolute top-[15.21px] left-[31.83px] '>
                        <div className=' flex justify-between'>
                            <img src={img1} alt="img" width={56} height={56.77} />
                            <div className='w-[65px] h-[39.31px]'>
                                
                                   <div className='font-[inter] font-[700] text-[14px] leading-[20px] text-[#0049C6] flex gap-1'><FaArrowUp color='blue' size={17}/>14%</div>
                                   <p className='font-[inter] font-[400] text-[12px] leading-[16px] text-[#171717]'>This week</p>
                                
                            </div>
                        </div>
                        <div className='w-[108px] h-[60.38px] mt-[15px] '>
                            <p className='font-[inter] font-[700] text-[14px] leading-[20px] text-[#171717]'>Issues Fixed</p>
                            <p className='font-[inter] font-[700] text-[32px] leading-[32px] text-[#081735] mt-2'>500K+</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute top-[641px]'>
               <img src={footImage} alt="footImage" />
            </div>
        </div>
        
    
  )
}

export default LeftView