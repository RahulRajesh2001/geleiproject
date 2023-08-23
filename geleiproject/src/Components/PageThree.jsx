import React from 'react'
import backgroundImg from '../assets/PageThreeRectangle.png'
import sheild from '../assets/sheild.png'
import heart from '../assets/heart.png'
import pensil from '../assets/pensil.png'
import hanger from '../assets/hanger.png'
import people from '../assets/people.png'

const PageThree = () => {
  return (
    <div>
      <div
        className='lg:w-[100%] lg:h-[160px] lg:mt-[50px]
                    md:w-[100%] md:h-[165px] md:mt-[30px]
                    sm:w-[100%] sm:h-[165px] sm:mt-[30px]
                    vsm:w-[100%] vsm:h-[900px] vsm:mt-[30px]
                    vvsm:w-[100%] vvsm:h-[800px] vvsm:mt-[20px]'
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
        }}
      >
        {/* contents here */}

        <div
          className=' flex justify-center items-center lg:w-[100%] lg:h-[160px] 
                                                          md:w-[100%] md:h-[165px]
                                                          sm:w-[100%] sm:h-[165px] 
                                                          vsm:w-[100%] vsm:h-[900px] 
                                                          vvsm:w-[100%] vvsm:h-[800px] 
                                                          '
        >
          <div
            className='flex   lg:w-[100%] lg:h-[150px]
                                                md:w-[100%] md:h-[150px]
                                                sm:w-[100%] sm:h-[150px] sm:flex-row sm:justify-evenly
                                                vsm:flex-col vsm:justify-evenly vsm:items-center vsm:w-[100%] vsm:h-[900px]
                                                vvsm:flex-col vvsm:justify-evenly vvsm:items-center vvsm:w-[100%] vvsm:h-[800px]
                                               '
          >
            <div
              className='flex justify-center items-center   lg:w-[220px] lg:h-[150px]
                                                                md:w-[150px] md:h-[150px]
                                                                sm:w-[110px] sm:h-[150px] sm:flex-row
                                                                vsm:w-[200px] vsm:h-[150px] vsm:flex-col
                                                                vvsm:w-[150px] vvsm:h-[140px] vvsm:flex-col
                                                                 '
            >
              <div className='flex flex-col justify-center items-center lg:gap-0 md:gap-0 sm:gap-[20px] vsm:gap-[10px] vvsm:gap-[10px] '>
                <img
                  src={sheild}
                  alt=''
                  className='lg:w-[40px] lg:h-[50px]
                            md:w-[40px] md:h-[50px]
                            sm:w-[30px] sm:h-[40px]
                            vsm:w-[60px] vsm:h-[70px]
                            vvsm:w-[50px] vvsm:h-[60px]'
                />
                {/* texts */}
                <div
                  className='flex flex-col  lg:pt-[25px]
                                                md:pt-[20px]
                                                 sm:pt-0'
                >
                  <div
                    className='font-Poppins font-[600] text-[#FFFFFF] lg:text-[18px] lg:w-[120px] lg:ml-[20px]
                                                                            md:text-[18px] md:w-[120px] md:ml-[20px]
                                                                            sm:text-[15px] sm:w-[80px] sm:ml-[20px]
                                                                            vsm:text-[18px] vsm:w-[110px] vsm:ml-[20px]
                                                                            '
                  >
                    Best Quality{' '}
                  </div>
                  <div
                    className='font-Poppins font-[600] text-[#FFFFFF] lg:text-[18px] lg:w-[120px] lg:ml-[25px] 
                                                                             md:text-[18px] md:w-[120px] md:ml-[20px]
                                                                             sm:text-[15px] sm:w-[80px] sm:ml-[20px]
                                                                             vsm:text-[18px] vsm:w-[110px] vsm:ml-[30px] 
                                                                             vvsm:ml-[5px]'
                  >
                    Standards
                  </div>
                </div>
              </div>
            </div>

            <div
              className='flex justify-center items-center   lg:w-[220px] lg:h-[150px]
                                                               md:w-[160px] md:h-[150px]
                                                               sm:w-[110px] sm:h-[150px]  
                                                               vsm:w-[200px] vsm:h-[150px] vsm:flex-col
                                                               vvsm:w-[150px] vvsm:h-[140px] vvsm:flex-col'
            >
              <div className='flex flex-col justify-center items-center lg:gap-6 md:gap-6 sm:gap-5 vsm:gap-[10px] vvsm:gap-[10px]'>
                <img
                  src={heart}
                  alt=''
                  className='lg:w-[40px] lg:h-[50px]
                             md:w-[40px] md:h-[50px]
                             sm:w-[40px] sm:h-[50px]
                             vsm:w-[70px] vsm:h-[80px]
                             vvsm:w-[50px] vvsm:h-[60px]'
                />
                {/* texts */}
                <div className='flex flex-col '>
                  <div
                    className='font-Poppins font-[600] text-[#FFFFFF] lg:text-[18px] lg:w-[170px] lg:ml-[20px]
                                                                            md:text-[18px] md:w-[160px] md:ml-[20px]
                                                                            sm:text-[15px] sm:w-[120px] sm:ml-[40px]
                                                                            vsm:text-[18px] vsm:w-[180px] vsm:ml-[20px]'
                  >
                    100% Satisfaction{' '}
                  </div>
                  <div
                    className='font-Poppins font-[600] text-[#FFFFFF] lg:text-[18px] lg:w-[120px] lg:ml-[50px] 
                                                                            md:text-[18px] md:w-[120px] md:ml-[50px]
                                                                            sm:text-[15px] sm:w-[80px]  sm:ml-[40px]
                                                                            vsm:text-[18px] vsm:w-[70px] vsm:ml-[50px] 
                                                                            vvsm:ml-[30px]'
                  >
                    Guarantee
                  </div>
                </div>
              </div>
            </div>

            <div
              className='flex justify-center items-center  lg:w-[220px] lg:h-[150px]
                                                              md:w-[150px] md:h-[150px]
                                                              sm:w-[110px] sm:h-[150px]
                                                              vsm:w-[200px] vsm:h-[150px] vsm:flex-col
                                                              vvsm:w-[150px] vvsm:h-[140px] vvsm:flex-col'
            >
              <div className='flex flex-col justify-center items-center lg:gap-6 md:gap-6 sm:gap-5 vsm:gap-[10px] vvsm:gap-[10px]'>
                <img
                  src={pensil}
                  alt=''
                  className='lg:w-[40px] lg:h-[40px]
                             md:w-[40px] md:h-[40px]
                             sm:w-[40px] sm:h-[40px]
                             vvsm:w-[50px] vvsm:h-[50px]'
                />
                {/* texts */}
                <div className='flex flex-col '>
                  <div
                    className='font-Poppins font-[600] text-[#FFFFFF] lg:text-[18px] lg:w-[170px] lg:ml-[30px]
                                                                            md:text-[18px] md:w-[150px] md:ml-[20px]
                                                                            sm:text-[15px] sm:w-[100px] sm:ml-[40px]
                                                                            vsm:text-[18px] vsm:w-[130px] vsm:ml-[10px]'
                  >
                    Quality Control{' '}
                  </div>
                  <div
                    className='font-Poppins font-[600] text-[#FFFFFF] lg:text-[18px] lg:w-[120px] lg:ml-[60px] 
                                                                            md:text-[18px] md:w-[120px] md:ml-[50px]
                                                                            sm:text-[15px]  sm:w-[80px] sm:ml-[40px] 
                                                                            vsm:text-[18px] vsm:w-[50px] vsm:ml-[40px]
                                                                            vvsm:ml-[30px]'
                  >
                    System
                  </div>
                </div>
              </div>
            </div>

            <div
              className='flex justify-center items-center   lg:w-[220px] lg:h-[150px]
                                                                 md:w-[150px] md:h-[150px]
                                                                 sm:w-[110px] sm:h-[150px] 
                                                                 vsm:w-[200px] vsm:h-[150px] vsm:flex-col
                                                                 vvsm:w-[150px] vvsm:h-[140px] vvsm:flex-col'
            >
              <div className='flex flex-col justify-center items-center lg:gap-6 md:gap-6 sm:gap-6 vsm:gap-[10px] vvsm:gap-[10px]'>
                <img
                  src={hanger}
                  alt=''
                  className='lg:w-[40px] lg:h-[50px]
                             md:w-[40px] md:h-[50px]
                             sm:w-[40px] sm:h-[50px]
                             vsm:w-[70px] vsm:h-[80px]
                             vvsm:w-[50px] vvsm:h-[60px]'
                />
                {/* texts */}
                <div className='flex flex-col '>
                  <div
                    className='font-Poppins font-[600] text-[#FFFFFF] lg:text-[18px] lg:w-[170px] lg:ml-[60px]
                                                                             md:text-[18px] md:w-[150px] md:ml-[40px]
                                                                             sm:text-[15px] sm:w-[100px] sm:ml-[40px]
                                                                             vsm:text-[18px] vsm:w-[140px] vsm:ml-[20px]
                                                                             '
                  >
                    Global fabrics{' '}
                  </div>
                  <div
                    className='font-Poppins font-[600] text-[#FFFFFF] lg:text-[18px] lg:w-[120px] lg:ml-[75px]  
                                                                             md:text-[18px] md:w-[150px] md:ml-[50px]
                                                                             sm:text-[15px] sm:w-[90px] sm:ml-[40px]
                                                                             vsm:text-[18px] vsm:w-[110px] vsm:ml-[30px]
                                                                             vvsm:ml-[10px]'
                  >
                    Distributor
                  </div>
                </div>
              </div>
            </div>

            <div
              className='flex justify-center items-center  lg:w-[220px] lg:h-[150px]
                                                                 md:w-[150px] md:h-[150px]
                                                                 sm:w-[110px] sm:h-[150px] 
                                                                 vsm:w-[200px] vsm:h-[150px] vsm:flex-col
                                                                 vvsm:w-[150px] vvsm:h-[140px] vvsm:flex-col'
            >
              <div
                className='flex flex-col justify-center items-center lg:w-[200px] lg:h-[150px] 
                                                                        md:w-[150px]  md:h-[150px]
                                                                        sm:w-[140px] sm:h-[150px]
                                                                         lg:gap-6 md:gap-6 sm:gap-5 
                                                                         vsm:gap-[10px]
                                                                         vvsm:gap-[10px]'
              >
                <img
                  src={people}
                  alt=''
                  className='lg:w-[50px] lg:h-[40px] lg:mt-0
                            md:w-[50px] md:h-[40px] md:mt-[10px]
                            sm:w-[50px] sm:h-[40px] sm:mt-[10px]
                            vsm:w-[80px] vsm:h-[50px]
                            vvsm:w-[70px] vvsm:h-[50px]'
                />
                <div className='flex flex-col '>
                  <div
                    className='font-Poppins font-[600] text-[#FFFFFF] lg:text-[18px] lg:w-[170px] lg:ml-[15px]
                                                                            md:text-[18px] md:w-[100px] md:ml-[30px
                                                                            sm:text-[15px] sm:w-[100px] sm:ml-[20px]
                                                                            vsm:text-[18px] vsm:w-[170px] vsm:ml-[10px]'
                  >
                    Highly Professional{' '}
                  </div>
                  <div
                    className='font-Poppins font-[600] text-[#FFFFFF] lg:text-[18px] lg:w-[120px] lg:ml-[75px]
                                                                          md:text-[18px] md:w-[100px] md:ml-[30px] 
                                                                          sm:text-[15px] sm:w-[90px] sm:ml-[20px] 
                                                                          vsm:text-[18px] vsm:w-[40px] vsm:ml-[70px]
                                                                          vvsm:ml-[50px] '
                  >
                    Team
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageThree
