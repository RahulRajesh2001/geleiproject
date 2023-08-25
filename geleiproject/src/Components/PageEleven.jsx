import React from 'react'
import backgroundImage from '../assets/pageelevenbgimg.png'
import dot from '../assets/dot.png'
import dots from '../assets/dots.png'
import pageevlenlogo from '../assets/pageelevenlogo.png'
import pageelevenlogoround from '../assets/pageelvenlogoround.png'
import zone from '../assets/zone.png'
import pageelevenbutton from '../assets/pageelevenbutton.png'
import vector from '../assets/vector.png'
import vsmimg from '../assets/PageEvelenvsmimg.png'
import vsmdot from '../assets/vsmdot.png'
import izalogowhite from '../assets/izawhite.png'
import whitevector from '../assets/whitevector.png'
import whitezone from '../assets/whitezone.png'
import groupdots from '../assets/groupdots.png'


const PageEleven = () => {
  return (
   <div >
     <div
      className='flex relative bg-cover bg-center lg:w-[100%] lg:h-[750px]
                                                  md:w-[100%] md:h-[750px]
                                                  sm:w-[100%] sm:h-[700px] 
                                                  vsm:w-[100% vsm:h-[700px]
                                                  vsm:hidden vvsm:hidden sm:block'
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
    
    

      <div
        className='absolute z-30 flex flex-col justify-center items-center  lg:gap-1 lg:w-[100%] lg:h-[750px] 
                                                                          md:gap-1 md:w-[100%] md:h-[750px]
                                                                          sm:gap-1 sm:w-[100%] sm:h-[700px]'
      >
        <img src={groupdots} alt=""  className='lg:w-[100%] lg:h-[590px] object-cover
                                                  md:w-[100%] sm:h-[550px]' />
       
       

        {/* logo */}

        <div
          className=' flex justify-center items-center  absolute z-20 lg:top-5 lg:w-[130px] lg:h-[130px] 
                                                                                md:w-[130px] md:h-[130px] md:top-[35px]
                                                                                sm:w-[100px] sm:h-[100px] sm:top-[30px]'
        >
          <img
            src={pageelevenlogoround}
            alt=''
            className='lg:w-[130px] lg:h-[130px]
                       md:w-[130px] md:h-[130px]
                       sm:w-[100px] sm:h-[100px]'
          />
          <div
            className='flex justify-center items-center  absolute z-20 lg:w-[70px] lg:h-[70px]
                                                                        md:w-[70px] md:h-[70px]
                                                                        sm:w-[60px] sm:h-[60px]'
          >
            <img src={pageevlenlogo} alt='' />
          </div>

        </div>

        {/* headging  */}

        <div
          className='absolute z-10 flex justify-center items-center  lg:w-[80%px] lg:h-[250px] 
                                                                        md:w-[90%]   md:h-[250px]
                                                                        sm:w-[90%] sm:h-[250px]'
        >
          <div
            className='font-normal font-link lg:text-[170px] lg:tracking-[70px] 
                                                md:text-[160px] md:tracking-[45px]
                                                sm:text-[150px] sm:tracking-[30px]'
          >
            Fashion
          </div>
        </div>

        {/* Zone long */}
        <div
          className=' flex justify-center items-center absolute z-20 lg:top-[450px] lg:right-[10%]  lg:w-[300px] lg:h-[70px]
                                                                      md:top-[450px] md:right-[10%]  md:w-[300px] md:h-[70px]
                                                                      sm:top-[420px] sm:right-[10%] sm:w-[300px] sm:h-[50px]
                                                                '
        >
          <div className=''>
            <img
              src={zone}
              alt=''
              className='lg:w-[250px] lg:h-[50px]
                        md:w-[250px]   md:h-[50px]
                        sm:w-[250px]  sm:h-[30px]'
            />
          </div>
        </div>

        <div
          className=' flex justify-center items-center absolute z-20 lg:w-[180px] lg:h-[70px] lg:bottom-[100px]
                                                                        md:w-[180px] md:h-[70px] md:bottom-[100px]
                                                                        sm:w-[180px] sm:h-[60px] sm:bottom-[100px]'
        >
          <div>
            <img
              src={pageelevenbutton}
              alt=''
              className='lg:w-[170px] lg:h-[50px]
                          md:w-[180px] md:h-[50px]
                          sm:w-[180px] sm:h-[50px]'
            />
          </div>
        </div>

        {/* bottom text */}

        <div
          className=' absolute lg:bottom-0 lg:w-[200px] lg:h-[80px] lg:left-[10px] 
                                  md:bottom-0 md:w-[200px] md:h-[80px] md:left-[10px]
                                  sm:bottom-0 sm:w-[200px] sm:h-[70px] sm:left-[10px]'
        >
          <div
            className='font-Poppins font-[600] text-[#081725] lg:text-[15px]
                                                                  md:text-[15px]
                                                                  sm:text-[14px]'
          >
            Dazzling Dress
          </div>
          <div
            className='font-Poppins font-[400] text-[#081725] lg:text-[11px]
                                                                    md:text-[10px]
                                                                    sm:text-[10px]'
          >
            Maecenas ac porus at ligula{' '}
          </div>
          <div
            className='font-Poppins font-[400] text-[#081725] lg:text-[11px]
                                                                    md:text-[10px]
                                                                    sm:text-[10px]'
          >
            mattis fringilla
          </div>

          <div
            className=' flex  lg:mt-[6px] items-center lg:gap-[40px] 
                                                          md:gap-[30px] md:mt-[5px]
                                                          sm:gap-[30px] sm:mt-[4px]  '
          >
            <div
              className='font-Poppins font-[700] text-[#081725] lg:text-[11px]
                                                                      md:text-[10px]
                                                                      sm:text-[10px]'
            >
              BUY NOW
            </div>
            <div>
              <img
                src={vector}
                alt=''
                className='lg:w-[25px] lg:h-[4px]
                            md:w-[25px] md:h-[4px]
                            sm:w-[20px] sm:h-[4px]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className='relative flex flex-col justify-center gap-3 sm:hidden vsm:w-[100%] vsm:h-[800px]  '>

    <img src={groupdots} alt=""  className='absolute z-20 vsm:w-[100%] vsm:h-[85%] object-cover
                                                ' />
     
              <img src={vsmimg} alt="" className=' absolute z-10 vsm:w-[100%] vsm:h-[800px]' />


        <div
          className=' flex justify-center items-center  absolute z-20 vsm:top-[150px] vsm:right-3  vsm:w-[150px] vsm:h-[150px] '
        >
          <img
            src={pageelevenlogoround}
            alt=''
            className=''
          />
          <div
            className='flex justify-center items-center  absolute z-20 vsm:w-[100px] vsm:h-[100px]
                                                                        '
          >
            <img src={izalogowhite} alt='' />
          </div>
        </div>

{/* heading */}

        <div
          className='absolute z-10 flex justify-center items-center  vsm:w-[100%] vsm:h-[100px] '
        >
          <div
            className='font-normal font-link vsm:text-[70px] vsm:text-[#FFFFFF] vsm:tracking-[15px]'
          >
            Fashion
          </div>
        </div>
        

        {/* Zone long */}
        <div
          className=' flex justify-center items-center absolute z-20 vsm:top-[440px] vsm:right-[16%] 
                                                                '
        >
          <div className=''>
            <img
              src={whitezone}
              alt=''
              className=' vsm:w-[250px] vsm:h-[30px]'
            />
          </div>
        </div>

                {/* bottom text */}

                <div
          className=' absolute z-20 vsm:bottom-0 vsm:w-[200px] vsm:h-[70px] vsm:left-[50px] vsm:top-[550px]'
        >
          <div
            className='font-Poppins font-[600] text-[#FFFFFF] vsm:text-[14px]'
          >
            Dazzling Dress
          </div>
          <div
            className='font-Poppins font-[400] text-[#FFFFFF] vsm:text-[11px]'
          >
            Maecenas ac porus at ligula{' '}
          </div>
          <div
            className='font-Poppins font-[400] text-[#FFFFFF] vsm:text-[11px]'
          >
            mattis fringilla
          </div>

          <div
            className=' flex  lg:mt-[6px] items-center vsm:gap-[40px] vsm:mt-[10px]
                                                         '
          >
            <div
              className='font-Poppins font-[700] text-[#FFFFFF] vsm:text-[11px]'
            >
              BUY NOW
            </div>
            <div>
              <img
                src={whitevector}
                alt=''
                className=' vsm:w-[20px] vsm:h-[4px]'
              />
            </div>
          </div>
        </div>

{/* button */}
<div
          className=' flex justify-center items-center absolute z-20  vsm:w-[150px] vsm:h-[50px] vsm:bottom-[70px] vsm:left-[30%]'
        >
          <div>
            <img
              src={pageelevenbutton}
              alt=''
              className=''
            />
          </div>
        </div>
       
    </div>
   </div>
  )
}

export default PageEleven
