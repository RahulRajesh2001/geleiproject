
import React, { useState } from 'react'
import logo from '../assets/Logo.png'

const NavBar = () => {

    let Links =[
        {name:"HOME",link:"/"},
        {name:"SERVICE",link:"/"},
        {name:"ABOUT",link:"/"},
        {name:"BLOG'S",link:"/"},
        {name:"CONTACT",link:"/"},
      ];
      let [open,setOpen]=useState(false);
    return (
        
      <>
      
      <div className='sm:hidden   top-0 left-0 '>
       
        
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
  
        <ul className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static
         bg-[#252525] md:z-auto z-[50] h-[600px] left-0 w-full md:w-auto md:pl-0 pl-9 
         transition-all duration-1000 ease-in ${open ? 'top-20 ':'top-[-600px]'}`}>
          {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-[18px] md:my-0 my-7'>
                <a href={link.link} className='text-[#FFFF] font-Lora hover:text-gray-400 duration-5000'>{link.name}</a>
              </li>
            ))
          }
        </ul>
        </div>


        <div
        className='flex justify-between  lg:w-[100%] lg:h-[100px] lg:mt-0
                                          md:w-[100%] md:h-[90px] md:mt-0
                                          sm:w-[100%] sm:h-[80px] sm:mt-0
                                          vsm:w-[100%] vsm:h-[80px] 
                                          vvsm:w-[100%] vvsm:h-[80px] 

                            '
      >
        {/* leftside */}
        <div
          className='flex justify-center items-center  lg:w-[200px] lg:h-[100px]
                                                      md:w-[180px] md:h-[90px]
                                                      sm:w-[120px] sm:h-[80px]
                                                      vsm:w-[120px] vsm:h-[80px] 
                                                      vvsm:w-[100px] vvsm:h-[80px]                                       '
        >
          <img
            src={logo}
            alt=''
            className='lg:w-[150px] lg:h-[80px]
                          md:w-[140px] md:h-[70px]
                          sm:w-[100px] sm:h-[60px]
                          vsm:w-[80px] vsm:h-[60px]
                          vvsm:w-[80px] vvsm:h-[60px]
                          '
          />
        </div>
        {/* right part */}
        <div
          className='flex justify-center items-center  lg:w-[600px] lg:h-[100px]
                                                       md:w-[60%] md:h-[90px]  
                                                        sm:w-[60%] sm:h-[80px] 
                                                        vsm:w-[60%] vsm:h-[50px] sm:block
                                                        vsm:hidden vvsm:hidden

                                                        '
        >
          <div
            className='flex justify-between items-center   lg:w-[500px] lg:h-[20px]
                                                                  md:w-[450px] md:h-[20px] 
                                                                  sm:w-[350px] sm:h-[20px]  mt-[40px]
                                                                   '
          >
            <div
              className=' font-Poppins text-[#2D2D2D]  lg:text-[13px] lg:w-[60px] lg:h-[20px]
                                                              md:text-[13px] md:w-[70px] md:h-[20px]
                                                              sm:text-[12px] sm:w-[40px] sm:h-[20px] 
                                                            
                                                            '
            >
              Home
            </div>
            <div
              className=' font-Poppins text-[#2D2D2D] lg:text-[13px] lg:w-[60px] lg:h-[20px]
                                                              md:text-[13px] md:w-[70px] md:h-[20px]
                                                              sm:text-[12px] sm:w-[40px] sm:h-[20px] 
                                                            
                                                              '
            >
              Services
            </div>
            <div
              className=' font-Poppins text-[#2D2D2D] lg:text-[13px] lg:w-[60px] lg:h-[20px]
                                                              md:text-[13px] md:w-[70px] md:h-[20px]
                                                              sm:text-[12px] sm:w-[50px] sm:h-[20px]
                                                            
                                                              '
            >
              About Us
            </div>
            <div
              className=' font-Poppins text-[#2D2D2D] lg:text-[13px] lg:w-[60px] lg:h-[20px]
                                                              md:text-[13px] md:w-[70px] md:h-[20px]
                                                              sm:text-[12px] sm:w-[40px] sm:h-[20px]
                                                            
                                                            '
            >
              Projects
            </div>
            <div
              className=' font-Poppins text-[#2D2D2D] lg:text-[13px] lg:w-[60px] lg:h-[20px]
                                                              md:text-[13px] md:w-[70px] md:h-[20px]
                                                              sm:text-[12px] sm:w-[60px] sm:h-[20px]
                                                            
                                                             '
            >
              Contact
            </div>
          </div>
        </div>
        
      </div>
      </>
      
      
  )
}

export default NavBar