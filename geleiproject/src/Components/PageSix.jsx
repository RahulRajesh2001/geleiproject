import React from "react";

const PageSix = () => {
  return (
    <div
    className='bg-[#FFFFFF] lg:w-[100%] lg:h-[380px]
                                  md:w-[100%] md:h-[380px]
                                  sm:w-[100%] sm:h-[350px]
                                  vsm:w-[100%] vsm:h-[250px]
                                  vvsm:w-[100%] vvsm:h-[230px]'
  >
    <div
      className='flex flex-col justify-end  lg:w-[1000px] lg:h-[230px] 
                                                md:w-[700px] md:h-[200px]
                                                sm:w-[500px] sm:h-[150px]
                                                vsm:w-[300px]  vsm:h-[80px]
                                                vvsm:w-[210px] vvsm:h-[70px]'
    >
      <div
        className=' lg:w-[700px] lg:h-[100px] lg:ml-[100px]
                        md:w-[600px] md:h-[100px] md:ml-[100px]
                        sm:w-[500px] sm:h-[100px] sm:ml-[100px] 
                        vsm:w-[300px] vsm:h-[60px] vsm:ml-[20px]
                        vvsm:w-[210px] vvsm:h-[40px] vvsm:ml-[10px]'
      >
        <h1
          className=' font-bold font-Poppins lg:text-[90px]
                                                md:text-[80px]
                                                sm:text-[60px]
                                                vsm:text-[40px]
                                                vvsm:text-[30px]'
        >
          <span
            className='text-white'
            style={{
              WebkitTextStroke: '1px black', // Stroked text
            }}
          >
          Why Us
          </span>
        </h1>
      </div>
    </div>

    <div
      className='flex   lg:w-[640px] lg:h-[130px] 
                                      md:w-[600px] md:h-[130px] md:justify-end
                                      sm:w-[600px] sm:h-[130px]
                                      vsm:w-[300px] vsm:h-[150px]
                                      vvsm:w-[210px] vvsm:h-[170px] '
    >
      <div
        className='flex justify-center items-center  lg:w-[540px] lg:h-[80px] lg:ml-0
                                                        md:w-[540px] md:h-[110px] md:ml-[110px] 
                                                        sm:w-[400px] sm:h-[100px] sm:ml-[110px]
                                                        vsm:w-[300px] vsm:h-[140px] vsm:ml-[20px] 
                                                        vvsm:w-[210px] vvsm:h-[170px] vvsm:ml-[10px]'
      >
        <div
          className=' font-Poppins text-[#4D4D4D]  font-[400] lg:text-[14px] lg:mt-[40px]
                                                                    md:text-[14px] md:mt-[30px]
                                                                    sm:text-[14px] sm:mt-0
                                                                    vsm:text-[14px] vsm:mt-0
                                                                    vvsm:text-[13px] vvsm:mt-[30px]
                                                                    '
        >
          Our factories make your favourite designer brands and we devote months searching for all across the world what fits you best. Building a moral supply chain that results in high-quality, low-impact, and long-lasting products is something we are aiming to achieve as part of our responsibility.
        </div>
      </div>
    </div>
  </div>
  );
};

export default PageSix;
