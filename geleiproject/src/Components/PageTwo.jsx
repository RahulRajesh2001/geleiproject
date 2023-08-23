import React from 'react'
import aboutus from '../assets/About Us.png'
import PageTwoImg from '../assets/Page2img.png'
import viewproject from '../assets/PageTwobutton.png'
import readmore from '../assets/readmore1.png'

const PageTwo = () => {
  return (
    <div>
      <div
        className='bg-[#FFFFFF]  lg:w-[100%] lg:h-[750px]
                                    md:w-[100%] md:h-[750px]
                                    sm:w-[100%] sm:h-[700px]
                                    vsm:w-[100%] vsm:h-[950px]
                                    vvsm:w-[100%] vvsm:h-[800px]
                                  '
      >
        {/* topart */}
        <div
          className=' lg:w-[50%] lg:h-[200px] 
                      md:w-[500px] md:h-[150px]
                      sm:w-[500px] sm:h-[120px]
                      vsm:w-[300px] vsm:h-[70px]
                      vvsm:w-[200px] vvsm:h-[30px]
                       '
        >
          <div
            className='  flex justify-center items-center   lg:w-[500px] lg:h-[200px] lg:ml-[18%] 
                                                                            md:w-[400px] md:h-[150px] md:ml-5
                                                                            sm:w-[400px] sm:h-[120px] sm:ml-[10px]
                                                                            vsm:w-[300px] vsm:h-[70px] vsm:ml-[10px]
                                                                            vvsm:w-[200px] vvsm:h-[30px]'
          >
            <img
              src={aboutus}
              alt=''
              className='lg:h-[70px] lg:w-[400px]
                          md:h-[70px] md:w-[400px]
                          sm:h-[70px] sm:w-[400px]
                          vsm:h-[50px] vsm:w-[300px]
                          vvsm:h-[30px] vvsm:w-[200px]'
            />
          </div>
        </div>

        <div
          className='flex     lg:w-[100%] lg:h-[500px]
                              md:w-[100%] md:h-[500px]
                              sm:flex-row   sm:w-[100%] sm:h-[500px] 
                              vsm:flex-col vsm:w-[100%] vsm:h-[500px]
                              vvsm:flex-col vvsm:w-[100%] vvsm:h-[500px]'
        >
          {/* leftpart */}
          <div
            className=' flex items-center             lg:w-[50%] lg:h-[500px]  lg:ml-0 lg:mt-0
                                                      md:w-[50%] md:h-[500px] md:ml-0  md:mt-0
                                                      sm:w-[50%] sm:h-[500px] sm:justify-end sm:ml-0 sm:mt-0
                                                      vsm:justify-center vsm:w-[80%] vsm:h-[200px] vsm:ml-[40px] vsm:mt-[20px]
                                                      vvsm:justify-center vvsm:w-[80%] vvsm:h-[300px]  vvsm:ml-[20px]  vvsm:mt-[40px]'
          >
            <div
              className=' lg:w-[500px] lg:h-[500px] lg:mr-[50px] lg:mt-0
                              md:w-[500px] md:h-[500px] md:mr-[5px] md:mt-[80px] 
                              sm:w-[500px] sm:h-[500px]  sm:mr-[5px] sm:mt-[100px]
                              vsm:w-[250px] vsm:h-[200px]   
                              vvsm:w-[210px] vvsm:h-[200px]'
            >
              <img
                src={PageTwoImg}
                alt=''
                className='lg:w-[500px] lg:h-[500px]
                            md:w-[500px] md:h-[480px]
                            sm:w-[500px] sm:h-[420px]
                            vsm:[500px] vsm:h-[300px] '
              />
            </div>
          </div>
          {/* rightpart */}
          <div
            className='    lg:w-[500px] lg:h-[500px]   lg:mt-0
                            md:w-[500px] md:h-[600px] md:mt-0
                            sm:w-[320px] sm:h-[500px] sm:mt-0
                            vsm:w-[100%] vsm:h-[800px] vsm:mt-[130px]
                            vvsm:w-[100%] vvsm:h-[700px] vvsm:mt-[50px]'
          >
            <div
              className=' lg:w-[500px] lg:h-[490px] lg:mt-0 
                              md:w-[370px] md:h-[500px] md:mt-[40px]
                              sm:w-[320px] sm:h-[500px] sm:mt-[40px]
                              vsm:w-[100%] vsm:h-[550px]
                              vvsm:w-[100%] vvsm:h-[470px]'
            >
              <div
                className='                 lg:w-[500px] lg:h-[70px] lg:ml-0
                                            md:w-[380px] md:h-[70px] md:ml-0
                                            sm:w-[320px] sm:h-[70px] sm:ml-0
                                            vsm:w-[300px] vsm:h-[70px] vsm:ml-[20px]
                                            vvsm:w-[200px] vvsm:h-[60px] vvsm:ml-[15px]'
              >
                <div
                  className='text-[#252525] font-Lora font-normal lg:text-[23px]
                                                                    md:text-[25px]
                                                                    sm:text-[22px]
                                                                    vsm:text-[20px]
                                                                    vvsm:text-[17px]'
                >
                  High End Design and
                </div>
                <div
                  className='text-[#252525] font-Lora font-normal lg:text-[25px]
                                                                    md:text-[25px]
                                                                    sm:text-[22px]
                                                                    vsm:text-[20px]
                                                                    vvsm:text-[17px]'
                >
                  Capability
                </div>
              </div>

              <div
                className=' lg:w-[120px] lg:h-[30px] lg:ml-[10px] lg:mt-[10px]
                            md:w-[120px] md:h-[30px] md:ml-[10px] md:mt-[15px]
                            sm:w-[120px] sm:h-[30px] sm:ml-[10px] sm:mt-[13px]
                            vsm:w-[120px] vsm:h-[35px] vsm:ml-[20px] vsm:mt-[13px]
                            vvsm:w-[100px] vvsm:h-[25px] vvsm:ml-[15px] vvsm:mt-[10px]'
              >
                <div
                  className='font-Poppins font-[600px]  text-[#4D4D4D66] lg:ext-[14px] 
                                                                            md:text-[14px]
                                                                            sm:text-[13px]
                                                                            vsm:text-[12px]
                                                                            vvsm:text-[10px]'
                >
                  --- OUR VISION
                </div>
              </div>

              <div
                className=' lg:w-[400px] lg:h-[100px] lg:border-b-2 lg:ml-0
                             md:w-[380px] md:h-[100px] md:border-b-2 md:ml-0
                            sm:w-[320px] sm:h-[100px] sm:border-b-2 sm:ml-0
                            vsm:w-[300px] vsm:h-[120px] vsm:border-b-2 vsm:ml-[20px]
                            vvsm:w-[200px] vvsm:h-[110px] vvsm:border-b-2 vvsm:ml-[15px]'
              >
                <div
                  className='font-[500] font-Poppins  text-[#252525] lg:text-[17px]
                                                                      md:text-[16px]
                                                                      sm:text-[15px]
                                                                      vsm:text-[15px]
                                                                      vvsm:text-[14px]'
                >
                  Our goal is to make it as easy as possible for you to walk
                  away with the solution that suits your needs perfectly.
                </div>
              </div>

              <div
                className=' flex flex-col justify-center items-center lg:w-[400px] lg:h-[100px]  lg:ml-0
                                                                         md:w-[380px] md:h-[140px] md:ml-0
                                                                        sm:w-[320px] sm:h-[180px] sm:ml-0
                                                                        vsm:w-[300px] vsm:h-[180px] vsm:ml-[20px]
                                                                        vvsm:w-[200px] vvsm:h-[170px] vvsm:ml-[15px]'
              >
                <div
                  className='font-normal font-Poppins  text-[#4D4D4D] lg:text-[14px]
                                                                          md:text-[14px]
                                                                          sm:text-[14px]
                                                                          vsm:text-[14px]
                                                                          vvsm:text-[13px]'
                >
                  With Gelei Srishta, you get the best as simple as quilting a
                  blanket. Because of this, we cooperate with the righteous
                  factories worldwide. We ensure that you get the best out of
                  everything you've ever worn. There is nothing like it.
                </div>
              </div>
              <div
                className=' lg:w-[200px] lg:h-[50px] lg:mt-[40px]
                                md:w-[150px] md:h-[50px] md:mt-[50px]
                               sm:w-[140px] sm:h-[40px] sm:mt-[50px] sm:block
                                vsm:hidden vvsm:hidden'
              >
                <img
                  src={viewproject}
                  alt=''
                  className='lg:w-[140px] lg:h-[40px]
                              md:w-[130px] md:h-[40px]
                              sm:w-[130px] sm:h-[40px]'
                />
              </div>

              <div
                className='               sm:hidden
                                          vsm:w-[130px] vsm:h-[40px] vsm:ml-[20px] vsm:mt-[40px]
                                          vvsm:w-[100px] vvsm:h-[30px] vvsm:ml-[15px] vvsm:mt-[30px] '
              >
                <img
                  src={readmore}
                  alt=''
                  className='vsm:w-[130px] vsm:h-[40px]
                              vvsm:w-[90px] vvsm:h-[30px]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTwo
