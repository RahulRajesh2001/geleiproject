import React from 'react'
import Round from '../assets/pagesevenimg.png'

const PageSeven = () => {
  return (
    <div className='flex justify-center items-center lg:w-[100%] lg:h-[400px]'>
      <div className='flex relative  lg:w-[950px] lg:h-[350px]'>
        <div class=' absolute z-10 rounded-full lg:right-0  lg:border-2 border-[#7040F2] lg:w-[350px] lg:h-[350px] '>
          <div className='absolute font-Poppins font-[600] text-[#7040F2]  lg:top-[110px] lg:left-[120px]   lg:text-[50px] '>
            89%
          </div>
          <div className='absolute font-Poppins font-normal text-[#252525]   lg:top-[190px] lg:left-[105px]  lg:text-[13px] '>
            Market hold in industry
          </div>
        </div>
        <div class=' absolute rounded-full z-20 lg:left-[300px]  lg:w-[350px] lg:h-[350px] '>
          <img
            src={Round}
            alt=''
            className='rounded-full lg:w-[349px] lg:h-[349px] '
          />
        </div>
        <div class='  absolute z-10 rounded-full   border-2 border-[#7040F2] left-0  lg:w-[350px] lg:h-[350px] '>
          <div className='absolute text-[#252525] font-Poppins font-[600] lg:left-[70px]  lg:top-[110px]  lg:text-[26px] '>
            Textile Services
          </div>
          <div className='absolute font-Poppins font-normal text-[#4D4D4D] lg:top-[160px] lg:w-[180px] lg:h-[50px]  lg:text-[13px] lg:left-[85px]'>
            Building a moral supply chain that results in high-quality,
            low-impact, and long-lasting products is something
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageSeven
