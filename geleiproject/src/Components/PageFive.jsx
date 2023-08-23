import React from 'react'
import backgroundImg from '../assets/PageFiveBackground.png'
import rectangle from '../assets/rectangle.png'

const PageFive = () => {
  return (
    <div
      className='bg-cover  flex items-center lg:w-[100%] lg:h-[800px]
                                              md:w-[100%] md:h-[700px]
                                              sm:w-[100%] sm:h-[700px]
                                              vsm:w-[100%] vsm:h-[800px]
                                              vvsm:w-[100%] vvsm:h-[800px]'
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div
        className='flex lg:w-[100%] lg:h-[800px]
                           md:w-[100%] md:h-[700px]
                           sm:w-[100%] sm:h-[700px] sm:flex-row
    vsm:flex-col  vsm:w-[100%] vsm:h-[800px]
            vvsm:flex-col    vvsm:w-[100%] vvsm:h-[800px]
                         '
      >
        {/* firstpart */}

        <div
          className='flex flex-col justify-end items-start  lg:w-[33.5%] lg:h-[800px] lg:border-r-2 lg:border-b-0
                                                                md:w-[33.5%] md:h-[700px] md:border-r-2 md:border-b-0
                                                                sm:w-[33.5%] sm:h-[700px] sm:border-r-2 sm:border-b-0
                                                                vsm:w-[100%] vsm:h-[33.3%] 
                                                                vvsm:w-[100%] vvsm:h-[33.3%] vvsm:border-b-2
                                                                vsm:border-b-2
                                                                '
        >
          <div
            className='flex flex-col justify-evenly items-center lg:w-[90%px] lg:h-[350px]
                                                                    md:w-[90%] md:h-[350px] 
                                                                    sm:w-[90%] sm:h-[300px] 
                                                                    vsm:w-[100%] vsm:h-[260px] 
                                                                    vvsm:w-[100%] vvsm:h-[260px] 
                                                                    '
          >
            <div
              className=' lg:w-[80%] lg:h-[50px]
                              md:w-[80%] md:h-[50px]
                              sm:w-[80%] sm:h-[40px] 
                              vsm:w-[60%] vsm:h-[40px]
                              vvsm:w-[60%] vvsm:h-[40px]'
            >
              <div
                className=' font-Poppins font-[600] text-[#FFFFFF] lg:text-[40px]  lg:w-[50px] lg:h-[50px] 
                                                                        md:text-[35px]  md:w-[50px] md:h-[50px]
                                                                        sm:text-[30px] sm:w-[50px] sm:h-[40px]
                                                                        vsm:text-[30px] vsm:w-[50px] vsm:h-[40px]
                                                                        vvsm:text-[25px] vvsm:w-[40px] vvsm:h-[40px] '
              >
                01
              </div>
            </div>
            <div
              className='flex flex-col justify-center  lg:w-[80%] lg:h-[150px]
                                                          md:w-[80%] md:h-[150px]
                                                          sm:w-[80%] sm:h-[140px]
                                                          vsm:w-[60%] vsm:h-[130px]
                                                          vvsm:w-[60%] vvsm:h-[100px]'
            >
              <div
                className=' font-Poppins font-[600] text-[#FFFFFF] lg:text-[30px]
                                                                        md:text-[28px]
                                                                        sm:text-[25px]
                                                                        vsm:text-[23px]
                                                                        vvsm:text-[18px] '
              >
                CLOSET FIT
              </div>
              <div
                className=' font-Poppins font-[600] text-[#FFFFFF] lg:text-[30px]
                                                                        md:text-[28px]
                                                                        sm:text-[25px]
                                                                        vsm:text-[23px]
                                                                        vvsm:text-[18px] '
              >
                FOR ALL
              </div>
            </div>

            <div
              className='  lg:w-[80%] lg:h-[50px] 
                              md:w-[80%] md:h-[45PX]
                              sm:w-[80%] sm:h-[40px]
                              vsm:w-[60%] vsm:h-[40px]
                              vvsm:w-[60%] vvsm:h-[40px]
                              '
            >
              <div className='relative '>
                <img
                  src={rectangle}
                  alt=''
                  className='absolute z-10 lg:w-[45px] lg:h-[45px]
                                            md:w-[45px] md:h-[45px] 
                                            sm:w-[40px] sm:h-40px]
                                            vsm:w-[30px] vsm:h-[30px]
                                            vvsm:w-[30px] vvsm:h-[30px]
                                            '
                />
                <div
                  className='absolute z-20 font-Poppins font-[600] text-[#FFFFFF] lg:text-[17px] lg:left-[20px] lg:top-[10px]
                                                                                        md:text-[17px] md:left-[20px] md:top-[10px]
                                                                                        sm:text-[15px] sm:left-[15px] sm:top-[10px]
                                                                                        vsm:text-[12px] vsm:left-[10px] vsm:top-[5px]
                                                                                        vvsm:text-[12px] vvsm:left-[10px] vvsm:top-[5px]
                                                                                         '
                >
                  READ MORE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* secondpart */}

        <div
          className='flex flex-col justify-end items-start  lg:w-[33.5%] lg:h-[800px] lg:border-r-2 lg:border-b-0
                                                                md:w-[33.5%] md:h-[700px] md:border-r-2 md:border-b-0
                                                                sm:w-[33.5%] sm:h-[700px] sm:border-r-2 sm:border-b-0
                                                                vsm:w-[100%] vsm:h-[33.3%]  
                                                                vvsm:w-[100%] vvsm:h-[33.3%] vvsm:border-b-2
                                                                vsm:border-b-2
                                                                '
        >
          <div
            className='flex flex-col justify-evenly items-center  lg:w-[90%px] lg:h-[350px]
                                                                      md:w-[90%] md:h-[350px]
                                                                      sm:w-[90%] sm:h-[300px] 
                                                                      vsm:w-[100%] vsm:h-[260px] 
                                                                      vvsm:w-[100%] vvsm:h-[260px] '
          >
            <div
              className='lg:w-[80%] lg:h-[50px]
                            md:w-[80%] md:h-[50px]
                            sm:w-[80%] sm:h-[40px] 
                            vsm:w-[60%] vsm:h-[40px]
                            vvsm:w-[60%] vvsm:h-[40px]'
            >
              <div
                className=' font-Poppins font-[600] text-[#FFFFFF] lg:text-[40px]  lg:w-[50px] lg:h-[50px]
                                                                        md:text-[35px]  md:w-[50px] md:h-[50px]
                                                                        sm:text-[30px] sm:w-[50px] sm:h-[40px]
                                                                        vsm:text-[30px] vsm:w-[50px] vsm:h-[40px]
                                                                        vvsm:text-[25px] vvsm:w-[40px] vvsm:h-[40px] '
              >
                02
              </div>
            </div>
            <div
              className='flex flex-col justify-center  lg:w-[80%] lg:h-[150px]
                                                           md:w-[80%] md:h-[150px]
                                                          sm:w-[80%] sm:h-[140px]
                                                          vsm:w-[60%] vsm:h-[130px]
                                                          vvsm:w-[60%] vvsm:h-[100px]'
            >
              <div
                className=' font-Poppins font-[600] text-[#FFFFFF] lg:text-[30px]
                                                                        md:text-[28px]
                                                                        sm:text-[25px]
                                                                        vsm:text-[23px]
                                                                        vvsm:text-[18px] '
              >
                GEARED TOWARDS
              </div>
              <div
                className=' font-Poppins font-[600] text-[#FFFFFF] lg:text-[30px] 
                                                                        md:text-[28px]
                                                                        sm:text-[25px]
                                                                        vsm:text-[23px]
                                                                        vvsm:text-[18px]'
              >
                ETERNAL
              </div>
            </div>
            <div
              className='  lg:w-[80%] lg:h-[50px] 
                               md:w-[80%] md:h-[45PX]
                               sm:w-[80%] sm:h-[40px]
                               vsm:w-[60%] vsm:h-[40px]
                               vvsm:w-[60%] vvsm:h-[40px]
                               '
            >
              <div className='relative'>
                <img
                  src={rectangle}
                  alt=''
                  className='absolute z-10 lg:w-[45px] lg:h-[45px]
                                           md:w-[45px] md:h-[45px] 
                                             sm:w-[40px] sm:h-40px]
                                            vsm:w-[30px] vsm:h-[30px]
                                            vvsm:w-[30px] vvsm:h-[30px]'
                />
                <div
                  className='absolute z-20 font-Poppins font-[600] text-[#FFFFFF] lg:text-[17px] lg:left-[20px] lg:top-[10px]
                                                                                        md:text-[17px] md:left-[20px] md:top-[10px]
                                                                                        sm:text-[15px] sm:left-[15px] sm:top-[10px]
                                                                                        vsm:text-[12px] vsm:left-[10px] vsm:top-[5px]
                                                                                        vvsm:text-[12px] vvsm:left-[10px] vvsm:top-[5px]'
                >
                  READ MORE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* thirdpart */}

        <div
          className='flex flex-col justify-end items-start  lg:w-[33%] lg:h-[800px]
                                                              md:w-[33.5%] md:h-[700px] 
                                                              sm:w-[33.5%] sm:h-[700px]
                                                              vsm:w-[100%] vsm:h-[33.3%] 
                                                              vvsm:w-[100%] vvsm:h-[33.3%]
                                                              '
        >
          <div
            className='flex flex-col justify-evenly items-center  lg:w-[90%px] lg:h-[350px]
                                                                      md:w-[90%] md:h-[350px]
                                                                      sm:w-[90%] sm:h-[300px] 
                                                                      vsm:w-[100%] vsm:h-[260px] 
                                                                      vvsm:w-[100%] vvsm:h-[260px]'
          >
            <div
              className=' lg:w-[80%] lg:h-[50px]
                              md:w-[80%] md:h-[50px]
                              sm:w-[80%] sm:h-[40px] 
                              vsm:w-[60%] vsm:h-[40px]
                              vvsm:w-[60%] vvsm:h-[40px]'
            >
              <div
                className=' font-Poppins font-[600] text-[#FFFFFF] lg:text-[40px]  lg:w-[50px] lg:h-[50px] 
                                                                         md:text-[35px]  md:w-[50px] md:h-[50px]
                                                                         sm:text-[30px] sm:w-[50px] sm:h-[40px]
                                                                         vsm:text-[30px] vsm:w-[50px] vsm:h-[40px]
                                                                         vvsm:text-[25px] vvsm:w-[40px] vvsm:h-[40px]'
              >
                03
              </div>
            </div>
            <div
              className='flex flex-col justify-center  lg:w-[80%] lg:h-[150px]
                                                            md:w-[80%] md:h-[150px]
                                                          sm:w-[80%] sm:h-[140px]
                                                          vsm:w-[60%] vsm:h-[130px]
                                                          vvsm:w-[60%] vvsm:h-[100px]'
            >
              <div
                className=' font-Poppins font-[600] text-[#FFFFFF] lg:text-[30px]
                                                                        md:text-[28px]
                                                                        sm:text-[25px]
                                                                        vsm:text-[23px]
                                                                        vvsm:text-[18px] '
              >
                TAKE THE WISE
              </div>
              <div
                className=' font-Poppins font-[600] text-[#FFFFFF] lg:text-[30px]
                                                                          md:text-[28px]
                                                                          sm:text-[25px]
                                                                          vsm:text-[23px]
                                                                          vvsm:text-[18px] '
              >
                FASHION TIPS
              </div>
            </div>
            <div
              className='  lg:w-[80%] lg:h-[50px] 
                               md:w-[80%] md:h-[45PX]
                               sm:w-[80%] sm:h-[40px]
                               vsm:w-[60%] vsm:h-[40px]
                               vvsm:w-[60%] vvsm:h-[40px]
                              '
            >
              <div className='relative'>
                <img
                  src={rectangle}
                  alt=''
                  className='absolute z-10 lg:w-[45px] lg:h-[45px]
                                            md:w-[45px] md:h-[45px] 
                                           sm:w-[40px] sm:h-40px]
                                            vsm:w-[30px] vsm:h-[30px]
                                            vvsm:w-[30px] vvsm:h-[30px]'
                />
                <div
                  className='absolute z-20 font-Poppins font-[600] text-[#FFFFFF] lg:text-[17px] lg:left-[20px] lg:top-[10px] 
                                                                                        md:text-[17px] md:left-[20px] md:top-[10px]
                                                                                        sm:text-[15px] sm:left-[15px] sm:top-[10px]
                                                                                        vsm:text-[12px] vsm:left-[10px] vsm:top-[5px]
                                                                                        vvsm:text-[12px] vvsm:left-[10px] vvsm:top-[5px]'
                >
                  READ MORE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageFive
