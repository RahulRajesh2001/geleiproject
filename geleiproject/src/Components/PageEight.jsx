import React from 'react'
import backgroundImg from '../assets/pageEightBGImage.png'
import PageNinebgimg from '../assets/PageNinebgimg.png'
import button from '../assets/viewProject.png'

const PageEight = () => {
  return (
    <div
      className=' lg:h-[780px] lg:w-[100%]
                  md:h-[780px]  md:w-[100%]
                  sm:h-[650px] sm:w-[100%] 
                  vsm:h-[400px] vsm:w-[100%]
                  vvsm:h-[400px] vvsm:w-[100%]'
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div
        className='flex flex-col lg:gap-[60px]  lg:w-[80%] lg:h-[400px] 
                                  md:gap-[60px] md:w-[80%] md:h-[400px]
                                  sm:gap-[60px] sm:w-[80%] sm:h-[300px]
                                  vsm:gap-[10px] vsm:w-[100%] vsm:h-[340px]
                                  vvsm:gap-[10px] vvsm:w-[100%] vvsm:h-[340px] '
      >
        <div
          className=' lg:w-[700px] lg:h-[150px]
                      md:w-[700px] md:h-[150px]
                      sm:w-[600px] sm:h-[150px] 
                      vsm:w-[100%] vsm:h-[100px]
                      vvsm:w-[100%] vvsm:h-[100px]'
        >
          <h1
            className='font-bold font-Poppins lg:text-[90px]   lg:w-[300px] lg:ml-[10%] lg:h-[150px] lg:pt-[50px] 
                                                md:text-[85px]  md:w-[300px]   md:ml-[10%] md:h-[150px] md:pt-[50px]
                                                sm:text-[75px]  sm:w-[300px]   sm:ml-[10%] sm:h-[150px] sm:pt-[60px] 
                                                vsm:text-[35px] vsm:w-[100px]   vsm:ml-[5%] vsm:h-[50px] vsm:pt-[30px]
                                                vvsm:text-[30px] vvsm:w-[100px] vvsm:ml-[2%] vvsm:h-[50px] vvsm:pt-[30px]'
          >
            <span
              className='text-[#000000]'
              style={{
                WebkitTextStroke: '1px white',
              }}
            >
              OBLIGATIONS
            </span>
          </h1>
        </div>

        {/* hidden part */}
        <div
          className='flex   lg:w-[700px] lg:h-[150px] lg:ml-[28%] lg:mt-[50px] 
                                                        md:w-[640px] md:h-[150px] md:ml-[20%] md:mt-[50px]
                                                        sm:w-[550px] sm:h-[150px] sm:ml-[15%] sm:mt-[10px] sm:justify-center items-center sm:block
                                                        vsm:hidden vvsm:hidden
                                                         '
        >
          <div
            className='font-Poppins font-[500] text-[#FFFFFF] lg:text-[75px] lg:tracking-[5px] 
                                                                md:text-[75px] md:tracking-[2px] 
                                                                sm:text-[60px] sm:tracking-[2px] 
                                                                '
          >
            Zero Waste Living
          </div>
        </div>

        <div className='flex flex-col  items-center sm:hidden md:hidden lg:hidden  vsm:w-[100%] vsm:h-[240px] '>
          <div className='font-Poppins font-[500] text-[#FFFFFF] text-[50px]'>
            Zero
          </div>
          <div className='font-Poppins font-[500] text-[#FFFFFF] text-[50px]'>
            Waste
          </div>
          <div className='font-Poppins font-[500] text-[#FFFFFF] text-[50px]'>
            Living
          </div>
        </div>


      </div>
      <div
        className=' lg:w-[180px] lg:h-[50px] lg:ml-[42%] lg:mt-[50px] 
                        md:w-[160px] md:h-[50px] md:ml-[40%] md:mt-[50px]
                        sm:w-[150px] sm:h-[40px] sm:ml-[40%] sm:mt-[40px]
                        vsm:w-[120px] vsm:h-[35px] vsm:ml-[35.5%] vsm:mt-0
                        vvsm:w-[120px] vvsm:h-[35px] vvsm:ml-[30%]'
      >
        <img
          src={button}
          alt=''
          className='lg:w-[180px] lg:h-[50px]
                      md:w-[160px] md:h-[45px]
                      sm:w-[150px] sm:h-[40px]
                      vsm:w-[120px] vsm:h-[35px]
                      vvsm:w-[120px] vvsm:h-[35px]'
        />
      </div>

      <div
        className=' lg:w-[100%] lg:h-[243px] lg:mt-[80px]
                                    md:w-[100%] md:h-[200px] md:mt-[80px]
                                    sm:w-[100%] sm:h-[150px] sm:mt-[120px]
                                    vsm:w-[100%] vsm:h-[50px] vsm:mt-0'
      >
        <div>
          <img
            src={PageNinebgimg}
            alt=''
            className='lg:w-[100%] lg:h-[243px]
                      md:w-[100%] md:h-[200px]
                      sm:w-[100%] sm:h-[150px]'
          />
        </div>
      </div>
    </div>
  )
}

export default PageEight
