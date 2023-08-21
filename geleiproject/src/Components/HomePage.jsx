import React from 'react'
import homepageimg from "../assets/homepageimg.png";
import logo from "../assets/Logo.png"
import button from "../assets/explorenowbutton.png"

const HomePage = () => {
  return (
    <div
      className='bg-[#FFFFFF] lg:w-[100%] lg:h-[650px]
                                       md:w-[100%] md:h-[650px]
                                      vsm:w-[100%] vsm:h-[600px]'
    >
      {/*NavBar */}
      <div
        className='flex justify-between  lg:w-[100%] lg:h-[100px]
                                          md:w-[100%] md:h-[90px] 
                            vsm:w-[100%] vsm:h-[50px] '
      >
        {/* leftside */}
        <div
          className='flex justify-center items-center  lg:w-[200px] lg:h-[100px]
                                                      md:w-[180px] md:h-[90px]
                                                      vsm:w-[80px] vsm:h-[50px] '
        >
          <img
            src={logo}
            alt=''
            className='lg:w-[150px] lg:h-[80px]
                          md:w-[154px] md:h-[70px]
                          vsm:w-[50px] vsm:h-[40px]'
          />
        </div>
        {/* right part */}
        <div
          className='flex justify-center items-center  lg:w-[600px] lg:h-[100px]
                                                       md:w-[450px] md:h-[90px] 
                                                        '
        >
          <div
            className='flex justify-between items-center   lg:w-[500px] lg:h-[20px]
                                                                  md:w-[450px] md:h-[20px]'
          >
            <div
              className=' font-Poppins text-[#2D2D2D]  lg:text-[13px] lg:w-[60px] lg:h-[20px]
                                                              md:text-[13px] md:w-[70px] md:h-[20px] md:block
                                                            vsm:hidden  '
            >
              Home
            </div>
            <div
              className=' font-Poppins text-[#2D2D2D] lg:text-[13px] lg:w-[60px] lg:h-[20px]
                                                              md:text-[13px] md:w-[70px] md:h-[20px] md:block
                                                              vsm:hidden'
            >
              Services
            </div>
            <div
              className=' font-Poppins text-[#2D2D2D] lg:text-[13px] lg:w-[60px] lg:h-[20px]
                                                              md:text-[13px] md:w-[70px] md:h-[20px] md:block
                                                              vsm:hidden'
            >
              About Us
            </div>
            <div
              className=' font-Poppins text-[#2D2D2D] lg:text-[13px] lg:w-[60px] lg:h-[20px]
                                                              md:text-[13px] md:w-[70px] md:h-[20px] md:block
                                                              vsm:hidden'
            >
              Projects
            </div>
            <div
              className=' font-Poppins text-[#2D2D2D] lg:text-[13px] lg:w-[60px] lg:h-[20px]
                                                              md:text-[13px] md:w-[70px] md:h-[20px] md:block
                                                              vsm:hidden'
            >
              Contact
            </div>
          </div>
        </div>
      </div>

      {/* body part */}

      <div
        className='relative flex justify-center items-center lg:w-[100%] lg:h-[600px]  
                                                              md:w-[100%] md:h-[600px]
                                                              vsm:w-[100%] vsm:h-[600px] '
      >
        {/*TextPart */}
        <div className='absolute z-20 flex flex-col justify-center items-center lg:w-[700px] lg:h-[550px] 
                                                                                md:w-[500px] md:h-[400px]
                                                                                vsm:w-[400px] vsm:h-[300px]'>
          <div className='  flex justify-center items-center  font-Lora font-[500] lg:text-[75px] lg:w-[700px] lg:tracking-[10px] 
                                                                                    md:text-[60px] md:w-[600px] md:tracking-[9px]
                                                                                    vsm:text-[30px] vsm:w-[500px] '>
            CREATING THE
          </div>
          <div className='  flex justify-center items-center  font-Lora font-[500] lg:text-[55px] lg:w-[700px] lg:tracking-[8px] 
                                                                                    md:text-[50px] md:w-[500px] md:tracking-[6px] '>
            BEST TEXTILE
          </div>
          <div className='  flex justify-center items-center  font-Lora font-[500] lg:text-[55px] lg:w-[700px] lg:tracking-[8px]
                                                                                  md:text-[45px] md:w-[600px] md:tracking-[6px]'>
            SOLUTION
          </div>

          <div className=' lg:w-[300px] lg:h-[30px]  lg:mt-[15px]
                         md:w-[230px] md:h-[30px] md:mt-[15px]'>
            <div className='font-Poppins font-[500] lg:text-[17px] text-[#4D4D4D]
                                                    md:text-[15px]'>
              that revolutionizes the textile world
            </div>
          </div>

          <div className=' flex justify-center items-center lg:w-[200px] lg:h-[60px] lg:mt-[40px]
                                                            md:w-[150px] md:h-[50px] md:mt-[30px]'>
            <div>
              <img
                src={button}
                alt=''
                className='lg:w-[200px] lg:h-[55px]'
              />
            </div>
          </div>
        </div>

        <div
          className='absolute z-10 flex justify-center items-center  lg:w-[600px] lg:h-[550px] 
                                                                      md:w-[500px] md:h-[450px]
                                                                      vsm:w-[350px] vsm:h-[350px] '
        >
          <div
            className=' lg:w-[600px] lg:h-[550px]
                        md:w-[500px] md:h-[450px]
                       vsm:w-[350px] vsm:h-[350px] '
          >
            <img
              src={homepageimg}
              alt=''
              className='lg:w-[600px] lg:h-[550px]
                          md:w-[500px] md:h-[450px]
                          vsm:w-[360px]  vsm:h-[350px]  '
            />
          </div>
        </div>
      </div>
     



    </div>
  )
}

export default HomePage
