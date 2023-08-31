import React from 'react'
import homepageimg from '../assets/homepageimg.png'
import logo from '../assets/Logo.png'
import button from '../assets/explorenowbutton.png'

const HomePage = () => {
  return (
    <div
      className='bg-[#FFFFFF] lg:w-[100%] lg:h-[750px]
                                       md:w-[100%] md:h-[750px]
                                       sm:w-[100%] sm:h-[750px]
                                       vsm:w-[100%] vsm:h-[700px]
                                       vvsm:w-[100%] vvsm:h-[700px]
                                      '
    >
      {/*NavBar */}
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

      {/* body part */}

      <div
        className='relative flex justify-center items-center lg:w-[100%] lg:h-[600px]  
                                                              md:w-[100%] md:h-[600px]
                                                              sm:w-[100%] sm:h-[600px]
                                                              vsm:w-[100%] vsm:h-[600px]
                                                              vvsm:w-[100%] vvsm:h-[600px]
                                                              '
      >
        {/*TextPart */}
        <div
          className='absolute z-20 flex flex-col justify-center items-center lg:w-[700px] lg:h-[550px] lg:mb-0
                                                                                md:w-[500px] md:h-[400px] md:mb-0
                                                                                sm:w-[500px] sm:h-[500px] sm:mb-0
                                                                                vsm:w-[320px] vsm:h-[300px] vsm:mb-0
                                                             vvsm:w-[90%] vvsm:h-[200px] vvsm:mb-[90px]
                                                                              '
        >
          <div
            className='  flex justify-center items-center  font-Lora font-[500] lg:text-[75px] lg:w-[700px] lg:tracking-[10px] 
                                                                                    md:text-[60px] md:w-[600px] md:tracking-[9px]
                                                                                    sm:text-[50px]  sm:w-[600px] sm:tracking-[8px]
                                                                                    vsm:text-[35px] vsm:w-[300px] vsm:tracking-[3px] 
                                                                                    vvsm:text-[30px] vvsm:w-[250px] vvsm:tracking-[2px]
                                                                                    '
          >
            CREATING THE
          </div>
          <div
            className='  flex justify-center items-center  font-Lora font-[500] lg:text-[55px] lg:w-[700px] lg:tracking-[8px] 
                                                                                    md:text-[50px] md:w-[500px] md:tracking-[6px] 
                                                                                    sm:text-[40px] sm:w-[500px] sm:tracking-[5px]
                                                                                    vsm:text-[30px] vsm:w-[250px] vsm:tracking-[1px]
                                                                                     vvsm:text-[25px] vvsm:w-[250px] vvsm:tracking-[1px] '
          >
            BEST TEXTILE
          </div>
          <div
            className='  flex justify-center items-center  font-Lora font-[500] lg:text-[55px] lg:w-[700px] lg:tracking-[8px]
                                                                                  md:text-[45px] md:w-[600px] md:tracking-[6px]
                                                                                  sm:text-[40px]  sm:w-[500px] sm:tracking-[6px]
                                                                                  vsm:text-[28px] vsm:w-[250px] vsm:tracking-[1px]
                                                                                  vvsm:text-[22px] vvsm:w-[250px] vvsm:tracking-[1px]'
          >
            SOLUTION
          </div>
          <div
            className=' lg:w-[300px] lg:h-[30px]  lg:mt-[15px]
                            md:w-[230px] md:h-[30px] md:mt-[15px]
                            sm:w-[220px] sm:h-[30px] sm:mt-[15px]
                            vsm:w-[170px] vsm:h-[30px] vsm:mt-[15px]
                            vvsm:w-[160px] vvsm:h-[20px vvsm:mt-[15px]'
          >
            <div
              className='font-Poppins font-[500] lg:text-[17px] text-[#4D4D4D]
                                               md:text-[15px]
                                               sm:text-[14px]
                                               vsm:text-[11px]
                                               vvsm:text-[10px]'
            >
              that revolutionizes the textile world
            </div>
          </div>

          <div
            className=' flex justify-center items-center lg:w-[200px] lg:h-[60px] lg:mt-[40px]
                                                            md:w-[150px] md:h-[50px] md:mt-[30px]
                                                            sm:w-[140px] sm:h-[50px] sm:mt-[30px] sm:block
                                                            vsm:hidden vvsm:hidden'
          >
            <div>
              <img
                src={button}
                alt=''
                className='lg:w-[200px] lg:h-[55px]
                            md:w-[150px] md:h-[40px] 
                            sm:w-[140px] sm:h-[40px]'
              />
            </div>
          </div>
        </div>

        <div
          className='absolute z-10 flex justify-center items-center  lg:w-[600px] lg:h-[550px] lg:mb-0
                                                                      md:w-[500px] md:h-[480px] md:mb-0
                                                                      sm:w-[480px]  sm:h-[480px] sm:mb-0
                                                                      vsm:w-[320px]  vsm:h-[350px] vsm:mb-0
                                                                    vvsm:mb-[90px]
                                                                       '
        >
          <div
            className=' lg:w-[600px] lg:h-[550px]
                        md:w-[500px] md:h-[480px]
                        sm:w-[480px]  sm:h-[480px] 
                        vsm:w-[350px]  vsm:h-[350px]
                        '
          >
            <img
              src={homepageimg}
              alt=''
              className='lg:w-[600px] lg:h-[550px]
                          md:w-[500px] md:h-[490px]
                          sm:w-[480px]  sm:h-[480px]
                          vsm:w-[350px] vsm:h-[350px]
                          '
            />
          </div>
        </div>
        {/* button vsm and vvsm */}
        <div
          className='flex justify-center items-center absolute z-20 vsm:bottom-0 sm:hidden vsm:w-[180px] vsm:h-[50px]
                                                                                                            vvsm:w-[150px] vvsm:bottom-11 vvsm:h-[40px]'
        >
          <div>
            <img
              src={button}
              alt=''
              className='vsm:w-[150px] vsm:h-[40px]
                                              vvsm:w-[120px] vvsm:h-[30px]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
