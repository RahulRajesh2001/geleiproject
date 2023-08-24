import React from 'react'
import Round from '../assets/pagesevenimg.png'

const PageSeven = () => {
  return (
    <div
      className='flex justify-center items-center lg:w-[100%] lg:h-[400px] lg:mt-0
                                                      md:w-[100%] md:h-[400px] md:mt-0
                                                      sm:w-[100%] sm:h-[300px] sm:mt-0
                                                      vsm:w-[100%] vsm:h-[720px] vsm:mt-0
                                                      vvsm:w-[100%] vvsm:h-[700px] vvsm:mt-[50px]'
    >
      <div
        className='flex relative  lg:w-[950px] lg:h-[350px] 
                                      md:w-[760px] md:h-[300px]
                                      sm:w-[630px] sm:h-[250px] sm:flex-row
                        vsm:flex-col  vsm:w-[300px] vsm:h-[700px]
                        vvsm:flex-col vvsm:w-[250px] vvsm:h-[680px]
                                      '
      >
        {/* first part */}

        <div
          class=' absolute z-10 rounded-full border-[#7040F2]  lg:right-0  lg:border-2 lg:w-[350px] lg:h-[350px] lg:left-[600px]  lg:top-0
                                                                    md:right-0  md:border-2  md:w-[300px] md:h-[300px] md:left-[460px]  md:top-0
                                                                    sm:right-0 sm:border-2   sm:w-[250px] sm:h-[250px] sm:left-[380px]  sm:top-0
                                                                    vsm:right-0 vsm:border-2   vsm:w-[250px] vsm:h-[250px] vsm:left-[25px] vsm:top-[30px]
                                                                    vvsm:right-0 vvsm:border-2 vvsm:w-[250px] vvsm:h-[250px] vvsm:left-0 vvsm:top-[20px]
                                                                    '
        >
          <div
            className='absolute font-Poppins font-[600] text-[#7040F2]  lg:top-[110px] lg:left-[120px]   lg:text-[50px]
                                                                              md:top-[110px] md:left-[120px] md:text-[45px]
                                                                              sm:top-[80px] sm:left-[100px] sm:text-[40px]
                                                                              vsm:top-[80px] vsm:left-[95px] vsm:text-[35px]
                                                                              vvsm:top-[70px] vvsm:left-[90px] vvsm:text-[35px]
                                                                               '
          >
            89%
          </div>
          <div
            className='absolute font-Poppins font-normal text-[#252525]   lg:top-[190px] lg:left-[105px]  lg:text-[13px] 
                                                                                md:top-[170px] md:left-[100px] md:text-[13px]
                                                                                sm:top-[130px] sm:left-[80px] sm:text-[12px]
                                                                                vsm:top-[130px] vsm:left-[70px] vsm:text-[12px]
                                                                                vvsm:top-[120px] vvsm:left-[65px] vvsm:text-[12px]'
          >
            Market hold in industry
          </div>
        </div>

        {/* second part */}

        <div
          class=' absolute rounded-full z-20 lg:left-[300px]  lg:w-[350px] lg:h-[350px] lg:top-0
                                                md:left-[240px]  md:w-[300px] md:h-[300px] md:top-0
                                                sm:left-[200px] sm:w-[250px] sm:h-[250px] sm:top-0
                                                vsm:left-[25px] vsm:w-[250]  vsm:h-[200px] vsm:top-[230px]
                                                vvsm:left-0 vvsm:w-[250px] vvsm:h-[250px] vvsm:top-[220px]'
        >
          <img
            src={Round}
            alt=''
            className='rounded-full lg:w-[350px] lg:h-[350px]
                                    md:w-[300px] md:h-[300px] 
                                    sm:w-[250px] sm:h-[250px]
                                    vsm:w-[250px] vsm:h-[250px]
                                    vvsm:w-[250px] vvsm:h-[250px'
          />
        </div>

        {/* thirdpart */}

        <div
          class='  absolute z-10 rounded-full   border-2 border-[#7040F2] lg:left-0  lg:w-[350px] lg:h-[350px]  lg:top-0
                                                                                 md:left-0 md:w-[300px] md:h-[300px] md:top-0
                                                                                 sm:left-0 sm:w-[250px] sm:h-[250px] sm:top-0
                                                                                 vsm:left-[25px] vsm:w-[250px] vsm:h-[250px] vsm:top-[430px]
                                                                                 vvsm:left-0 vvsm:w-[250px] vvsm:h-[250px] vvsm:top-[430px]'
        >
          <div
            className='absolute text-[#252525] font-Poppins font-[600] lg:left-[70px]  lg:top-[110px]  lg:text-[26px]
                                                                            md:left-[45px] md:top-[105px] md:text-[25px] 
                                                                            sm:left-[45px] sm:top-[80px] sm:text-[20px]
                                                                            vsm:left-[45px] vsm:top-[70px] vsm:text-[20px]
                                                                            vvsm:left-[45px] vvsm:top-[70px] vvsm:text-[20px]'
          >
            Textile Services
          </div>
          <div
            className='absolute font-Poppins font-normal text-[#4D4D4D] lg:top-[160px] lg:w-[180px] lg:h-[50px]  lg:text-[13px] lg:left-[85px]
                                                                              md:top-[150px] md:w-[180px] md:h-[50px] md:text-[13px] md:left-[55px]
                                                                              sm:top-[120px] sm:w-[150px] sm:h-[50px] sm:text-[12px] sm:left-[55px]
                                                                              vsm:top-[100px] vsm:w-[200px] vsm:h-[50px] vsm:text-[12px] vsm:left-[40px]
                                                                              vvsm:top-[110px] vvsm:w-[200px] vvsm:h-[50px] vvsm:text-[12px] vvsm:left-[40px]'
          >
            Building a moral supply chain that results in high-quality,
            low-impact, and long-lasting products is something
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageSeven
