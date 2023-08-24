import React from 'react'

const PageTen = () => {
  return (
    <div
      className='bg-[#FFFFFF] flex justify-center items-center  lg:w-[100%] lg:h-[300px]
                                                                  md:w-[100%] md:h-[250px]
                                                                  sm:w-[100%] sm:h-[250px]
                                                                  vsm:w-[100%] vsm:h-[300px]
                                                                  vvsm:w-[100%] vvsm:h-[250px]'
    >
      <div
        className='flex flex-col  items-center  lg:w-[70%] lg:h-[200px]
                                                md:w-[80%] md:h-[200px]
                                                sm:w-[95%] sm:h-[200px]
                                                vsm:w-[96%] vsm:h-[220px]
                                                vvsm:w-[90%] vvsm:h-[200px] '
      >
        {/* head part */}

        <div
          className=' flex justify-center items-center  lg:w-[600px] lg:h-[50px] 
                                                            md:w-[70%] md:h-[50px]
                                                            sm:w-[80%] sm:h-[50px]
                                                            vsm:w-[100%] vsm:h-[70px]
                                                            vvsm:w-[100%] vvsm:h-[150px]'
        >
          <div
            className='font-Lora font-[700]  text-[#252525] lg:text-[23px]
                                                              md:text-[22px]
                                                              sm:text-[22px]
                                                              vsm:text-[18px]
                                                              vvsm:text-[16px]'
          >
            CHECK OUT OUR FASHION STORE
          </div>
        </div>

        {/* bodypart */}

        <div
          className='flex flex-col justify-center items-center  lg:w-[600px] lg:h-[100px] 
                                                                    md:w-[100%] md:h-[100px]
                                                                    sm:w-[100%] sm:h-[100px]
                                                                    vsm:w-[90%] vsm:h-[200px]
                                                                    vvsm:w-[100%] vvsm:h-[150px]'
        >
          <div
            className='font-Poppins font-normal text-[#4D4D4D] lg:text-[15px]
                                                                    md:text-[15px]
                                                                    sm:text-[14px]
                                                                    vsm:text-[14px]
                                                                    vvsm:text-[13px]
                                                                    
                                                                    '
          >
            We take great care when knitting our products and collaborate with
            our manufacturing{' '}
          </div>
          <div
            className='font-Poppins font-normal text-[#4D4D4D] lg:text-[15px]
                                                                    md:text-[15px]
                                                                    sm:text-[14px]
                                                                    vsm:text-[14px]
                                                                    vvsm:text-[13px]'
          >
            partners to cut down on waste, chemicals. and plastics that damage
            the ecosystems and
          </div>
          <div
            className='font-Poppins font-normal text-[#4D4D4D] lg:text-[15px]
                                                                    md:text-[15px]
                                                                    sm:text-[14px]
                                                                    vsm:text-[14px]
                                                                    vvsm:text-[13px]'
          >
            people of our globe.
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTen
