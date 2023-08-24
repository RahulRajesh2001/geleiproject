import React from 'react'
import backgroundImg from '../assets/pageEightBGImage.png'
import PageNineImg from '../assets/pagenine.png'
import button from '../assets/viewProject.png'

const PageNine = () => {
  return (
    <div
      className=' relative lg:h-[600px] lg:w-[100%] lg:mt-0
                            md:h-[600px] md:w-[100%]  md:mt-0
                            sm:h-[500px] sm:w-[100%] sm:mt-0
                            vsm:h-[350px] vsm:w-[100%] vsm:mt-[32px]
                            vvsm:h-[300px] vvsm:w-[100%] vvsm:mt-[20px]'
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className='flex'>
        {/* leftside */}
        <div
          className='flex justify-start  lg:w-[75%] lg:h-[600px]
                                            md:w-[70%] md:h-[600px]
                                            sm:w-[60%] sm:h-[400px]
                                            vsm:w-[100%] vsm:h-[350px]
                                            vvsm:w-[100%] vvsm:h-[300px]'
        >
          <div
            className=' lg:w-[500px] lg:h-[250px] lg:ml-[5%] lg:mt-[250px] 
                            md:w-[500px] md:h-[250px] md:ml-[5%] md:mt-[250px]
                            sm:w-[350px] sm:h-[200px] sm:ml-[5%] sm:mt-[200px]
                            vsm:w-[80%]  vsm:h-[250px] vsm:ml-[7%] vsm:mt-[50px]
                            vvsm:w-[80%] vvsm:h-[210px] vvsm:ml-[5%] vvsm:mt-[50px]'
          >
            <div
              className='font-Poppins text-[#FFFFFF] font-[700] lg:text-[27px] 
                                                                  md:text-[27px]
                                                                  sm:text-[26px]
                                                                  vsm:text-[25px]
                                                                  vvsm:text-[20px]'
            >
              Obligations to Nature
            </div>

            <div
              className='font-normal font-Poppins text-[#4D4D4D] lg:mt-[20px] lg:w-[400px]  lg:text-[15px]
                                                                      md:mt-[20px] md:w-[400px] md:text-[15px]
                                                                      sm:mt-[10px] sm:w-[350px] sm:text-[14px] 
                                                                      vsm:mt-[10px] vsm:w-[270px] vsm:text-[14px]
                                                                      vvsm:mt-[5px] vvsm:w-[220px] vvsm:text-[12px]'
            >
              We take great care when knitting our products and collaborate with
              our manufacturing partners to cut down on waste, chemicals, and
              plastics that damage the ecosystems and people of our globe.{' '}
            </div>

            <div
              className=' flex justify-center items-center lg:w-[150px] lg:h-[50px] lg:mt-[25px] lg:ml-0
                                                                         md:w-[150px] md:h-[50px] md:mt-[20px] md:ml-0
                                                                         sm:w-[130px] sm:h-[50px] sm:mt-[10px] sm:ml-0
                                                                         vsm:w-[180px] vsm:h-[50px] vsm:mt-[20px] vsm:ml-[40px]
                                                                         vvsm:w-[110px] vvsm:h-[30px] vvsm:mt-[20px] vvsm:ml-[50px]'
            >
              <img
                src={button}
                alt=''
                className=' lg:w-[150px] lg:h-[40px]
                              md:w-[150px] md:h-[40px]
                              sm:w-[120px] sm:h-[30px]
                              vsm:w-[170px] vsm:h-[50px]
                              vvsm:w-[110px] vvsm:h-[30px]'
              />
            </div>
          </div>
        </div>

        {/* rightside */}
        <div
          className=' flex justify-center items-center absolute lg:right-0 lg:bottom-0 lg:w-[25%]  lg:h-[600px]  
                                                                    md:right-0 md:bottom-0 md:w-[30%] md:h-[600px]
                                                                    sm:right-0 sm:bottom-0 sm:w-[40%] sm:h-[500px] sm:block
                                                                    vsm:hidden vvsm:hidden
                                                          '
        >
          <img
            src={PageNineImg}
            alt=''
            className='lg:w-[100%]  lg:h-[600px]
                        md:w-[100%] md:h-[600px]
                        sm:w-[100%] sm:h-[500px]'
          />
        </div>
      </div>
    </div>
  )
}

export default PageNine
