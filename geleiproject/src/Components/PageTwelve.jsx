import React from 'react'
import PageTwelvebgimg from '../assets/pagetwelvebgimg.png'
import PageTwelvearrow from '../assets/PageTwelvearrow.png'
import send from '../assets/send.png'
import location from '../assets/location.png'
import x from '../assets/x.png'
import youtube from '../assets/youtube.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import papperclip from '../assets/papperclip.png'
import arrowgroup from '../assets/arrowgroup.png'

const PageTwelve = () => {
  return (
    <div
      className='snap-start relative  lg:w-[100%] lg:h-[700px]
                              md:w-[100%] md:h-[700px]
                              sm:w-[100%] sm:h-[700px] 
                              vsm:w-[100%] vsm:h-[1200px]'
    >
      <div className=' relative flex justify-center'>
        <div
          className=' lg:w-[700px] lg:h-[700px] lg:pt-[35px]
                          md:w-[700px] md:h-[700px] md:pt-[45px]
                          sm:w-[600px] sm:h-[650px] sm:pt-[60px] sm:flex-row
                          vsm:flex-col '
        >
          <img
            src={PageTwelvebgimg}
            alt=''
            className='lg:w-[700px] lg:h-[700px]
                       md:w-[700px] md:h-[700px]
                       sm:w-[600px] sm:h-[600px]
                       vsm:hidden vvsm:hidden sm:block
                        '
          />
        </div>
        {/* leftpart */}
        <div
          className='absolute lg:left-[5%] lg:ml-[50px] lg:mt-[60px] lg:w-[35%] lg:h-[450px] 
                                  md:left-[3%] md:ml-[20px] md:mt-[80px] md:w-[40%] md:h-[450px]
                                  sm:left-[3%] sm:ml-[20px] sm:mt-[80px] sm:w-[42%] sm:h-[400px]
                                  vsm:left-0   vsm:ml-[0px] vsm:mt-[20px] vsm:w-[100%] vsm:h-[380px]'
        >
          <div
            className='flex  flex-col justify-center items-center lg:w-[100%] lg:h-[170px] 
                                                                      md:w-[100%] md:h-[150px]
                                                                      sm:w-[100%] sm:h-[120px]
                                                                      vsm:w-[90%] vsm:h-[100px]
                                                                      '
          >
            <div
              className='flex flex-row gap-3  items-center  lg:w-[80%] lg:h-[60px] 
                                                                md:w-[90%] md:h-[60px]
                                                                sm:w-[90%] sm:h-[60px]
                                                                vsm:w-[90%] vsm:h-[50px]'
            >
              <div
                className='font-Poppins font-[700] text-[#252525] lg:text-[55px] 
                                                                        md:text-[50px]
                                                                        sm:text-[35px]
                                                                        vsm:text-[30px]'
              >
                Let’s
              </div>
              <div>
                <img
                  src={PageTwelvearrow}
                  alt=''
                  className='lg:w-[70px] lg:h-[70px]
                              md:w-[70px] md:h-[70px]
                              sm:w-[50px] sm:h-[50px]
                              vsm:w-[40px] vsm:h-[40px]'
                />
              </div>
            </div>
            <div
              className='flex  items-center font-Poppins font-[700] text-[#252525]  lg:w-[80%] lg:h-[60px]  lg:text-[55px]
                                                                                          md:w-[90%] md:h-[60px]  md:text-[50px]
                                                                                          sm:w-[90%] sm:h-[60px] sm:text-[35px] 
                                                                                          vsm:w-[90%] vsm:h-[50px] vsm:text-[30px]'
            >
              Connect.
            </div>
          </div>

          {/* paragraph prat */}
          <div
            className=' lg:w-[80%] lg:h-[130px] lg:ml-[50px] 
                            md:w-[80%] md:h-[130px] md:ml-[20px]
                            sm:w-[80%] sm:h-[150px] sm:ml-[20px] 
                            vsm:w-[80%] vsm:h-[160px] vsm:ml-[20px]'
          >
            <div
              className='font-normal text-[#4D4D4D] font-Poppins lg:text-[14px]
                                                                      md:text-[14px]
                                                                     sm:text-[13px]
                                                                     vsm:text-[15px] '
            >
              We are aware of how essential it is to feel at ease, both at your
              favorite spot and during your best moments. Our designs are made
              to be worn every day and are the ideal balance of soft and
              supportive threads to chill out.
            </div>
          </div>

          <div
            className=' flex flex-col justify-evenly   lg:w-[60%] lg:h-[150px] lg:ml-[50px] 
                                                          md:w-[70%] md:h-[130px] md:ml-[20px] 
                                                          sm:w-[80%] sm:h-[120px]  sm:ml-[20px]
                                                          vsm:w-[80%] vsm:h-[100px] vsm:ml-[20px]'
          >
            <div
              className='flex items-center lg:gap-5  lg:w-[250px] lg:h-[50px]
                                            md:gap-5  md:w-[250px] md:h-[50px]
                                            sm:gap-5  sm:w-[250px] sm:h-[40px] 
                                            vsm:gap-4 vsm:w-[250px] vsm:h-[40px] '
            >
              <div>
                <img
                  src={send}
                  alt=''
                  className='lg:w-[30px] lg:h-[30px]
                            md:w-[30px] md:h-[30px]
                            sm:w-[30px] sm:h-[30px]
                            vsm:w-[25px] vsm:h-[25px]'
                />
              </div>
              <div
                className='font-Poppins font-normal text-[#252525] lg:text-[15px]
                                                                      md:text-[15px]
                                                                      sm:text-[14px]
                                                                      vsm:text-[13px]'
              >
                info@geleishrsta.com
              </div>
            </div>

            <div
              className='flex items-center lg:gap-5  lg:w-[250px] lg:h-[50px]
                                            md:gap-5   md:w-[250px] md:h-[50px]
                                            sm:gap-5 sm:w-[250px] sm:h-[40px]
                                            vsm:gap-4 vsm:w-[250px] vsm:h[40px] '
            >
              <div>
                <img
                  src={location}
                  alt=''
                  className='lg:w-[40px] lg:h-[30px]
                              md:w-[40px] md:h-[30px]
                              sm:w-[40px] sm:h-[30px]
                              vsm:w-[30px] vsm:h-[25px] '
                />
              </div>
              <div
                className='font-Poppins font-normal text-[#252525] lg:text-[15px]
                                                                      md:text-[15px]
                                                                      sm:text-[13px]
                                                                      vsm:text-[12px]'
              >
                North First, New Hyde Park, NY 11040, USA
              </div>
            </div>
          </div>
        </div>

        {/* rightside */}
        <div
          className='absolute lg:right-[10%]  lg:mt-[60px] lg:w-[35%] lg:h-[450px] 
                                 md:right-[8%]  md:mt-[80px] md:w-[40%]  md:h-[450px]
                                 sm:right-[2%] sm:mt-[80px] sm:w-[42%] sm:h-[400px]
                                 vsm:right-[0] vsm:mt-[430px] vsm:w-[100%] vsm:h-[470px]'
        >
          {/* heading */}
          <div
            className=' relative flex   lg:w-[100%] lg:h-[130px] 
                                          md:w-[100%] md:h-[130px]
                                          sm:w-[100%] sm:h-[110px] 
                                          vsm:w-[100%] vsm:h-[150px] '
          >
            <div
              className='absolute z-10 rotate-12 flex flex-col justify-center items-center bg-[#7040F2]  rounded-full lg:w-[100px] lg:h-[100px] lg:ml-0
                                                                                                                         md:w-[100px] md:h-[100px] md:ml-0
                                                                                                                         sm:w-[80px] sm:h-[80px] sm:ml-0
                                                                                                                         vsm:w-[80px] vsm:h-[80px] vsm:ml-[20px] '
            >
              <div
                className='font-Poppins font-[700] text-[#FFFFFF] lg:text-[14px]
                                                                    md:text-[14px]
                                                                    sm:text-[13px]
                                                                    vsm:text-[13px]'
              >
                open for
              </div>
              <div
                className='font-Poppins font-[700] text-[#FFFFFF] lg:text-[14px]
                                                                    md:text-[14px]
                                                                    sm:text-[13px]
                                                                    vsm:text-[13px]'
              >
                new project
              </div>
            </div>

            <div
              className='absolute flex flex-col justify-center z-20 lg:left-[85px] lg:gap-6    lg:w-[100%] lg:h-[100px] lg:mt-0 
                                                                       md:left-[85px]  md:gap-6   md:w-[90%] md:h-[100px md:mt-[20px]
                                                                       sm:left-[70px] sm:gap-5    sm:w-[77%] sm:h-[90px] sm:mt-[5px] 
                                                                       vsm:left-[50px] vsm:gap-0  vsm:w-[70%] vsm:h-[80px] vsm:mt-[36px]'
            >
              <div
                className='font-Poppins font-[600] text-[#252525] lg:h-[10px]  lg:text-[30px]
                                                                        md:h-[10px] md:text-[25px]
                                                                        sm:h-[10px] sm:text-[19px]
                                                                        vsm:h-[24px]   vsm:text-[20px]'
              >
                Estimate your ptoject?
              </div>
              <div
                className='font-Poppins font-[600] text-[#252525] lg:h-[10px]  lg:text-[30px]
                                                                        md:h-[10px] md:text-[25px]
                                                                        sm:h-[10px] sm:text-[19px]
                                                                        vsm:h-[10px] vsm:text-[20px]'
              >
                let me know here.
              </div>
            </div>
          </div>

          {/* input boxes */}
          <div
            className='flex flex-col justify-evenly items-center   lg:w-[100%] lg:h-[320px] 
                                                                    md:w-[100%] md:h-[320px]
                                                                    vsm:w-[100%] vsm:h-[300px]
                                                                    '
          >
            <div
              className='flex flex-col justify-evenly  lg:ml-[50px]  lg:w-[100%] lg:h-[100px]
                                                            md:ml-[50px] md:w-[100%] md:h-[100px]
                                                            sm:ml-[10px] sm:w-[100%] sm:h-[80px]
                                                            vsm:ml-[10px] vsm:w-[85%] vsm:h-[50px]
                                                            '
            >
              <div
                className='font-Poppins font-[600] text-[#252525] lg:text-[20px]
                                                                      md:text-[20px]
                                                                      sm:text-[18px]
                                                                      vsm:text-[18px]'
              >
                What’s your name?
              </div>

              <div class='relative'>
                <input
                  type='text'
                  id='username'
                  class='bg-transparent lg:w-[90%] lg:h-[50px] border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer
                                        md:w-[90%] md:h-[50px]
                                        sm:w-[90%] sm:h-[40px]
                                        vsm:w-[90%] vsm:h-[30px]'
                  autocomplete='off'
                />
              </div>
            </div>

            <div
              className='flex flex-col justify-evenly  lg:ml-[50px]  lg:w-[100%] lg:h-[100px]
                                                      md:ml-[50px]  md:w-[100%] md:h-[100px]
                                                      sm:ml-[10px] sm:w-[100%] sm:h-[90px]
                                                      vsm:ml-[10px] vsm:w-[85%] vsm:h-[50px]'
            >
              <div
                className='font-Poppins font-[600] text-[#252525] lg:text-[20px]
                                                                    md:text-[20px]
                                                                    sm:text-[18px]
                                                                    vsm:text-[18px]'
              >
                Email Address
              </div>

              <div class='relative'>
                <input
                  type='text'
                  id='username'
                  class='bg-transparent lg:w-[90%] lg:h-[50px] border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer
                                        md:w-[90%] md:h-[50px]
                                        sm:w-[90%] sm:h-[40px]
                                        vsm:w-[90%] vsm:h-[30px]
                                         '
                  autocomplete='off'
                />
              </div>
            </div>
            <div
              className='flex flex-col justify-evenly  lg:ml-[50px]  lg:w-[100%] lg:h-[100px]
                                                          md:ml-[50px] md:w-[100%] md:h-[100px]
                                                          sm:ml-[10px] sm:w-[100%] sm:h-[100px]
                                                          vsm:ml-[10px] vsm:w-[85%] vsm:h-[50px]'
            >
              <div
                className='flex   lg:w-[400px] lg:h-[35px]
                                  md:w-[110%] md:h-[35px] 
                                  sm:w-[100%] sm:h-[35px]
                                  vsm:w-[100%] vsm:h-[30px] '
              >
                <div
                  className='font-Poppins font-[600] text-[#252525] lg:text-[20px]
                                                                      md:text-[20px]
                                                                      sm:text-[18px]
                                                                      vsm:text-[18px]'
                >
                  Tell me about your project
                </div>
                <div
                  className='flex justify-evenly items-center lg:ml-[10px]  lg:w-[40px] lg:h-[35px] 
                                                                  md:ml-[10px] md:w-[30px] md:h-[35px]
                                                                  sm:ml-[10px] sm:w-[20px] sm:h-[35px]
                                                                  vsm:ml-[20px] vsm:w-[13px] vsm:h-[30px]'
                >
                  <img
                    src={papperclip}
                    alt=''
                    className='lg:w-[15px] lg:h-[15px]
                              md:w-[10px] md:h-[10px]
                              sm:w-[10px] sm:h-[10px]
                              vsm:w-[13px] vsm:h-[13px] '
                  />
                </div>
                <div
                  className=' flex justify-center items-center lg:ml-[20px]  lg:w-[40px] lg:h-[35px] 
                                                                  md:ml-[10px]  md:w-[30px] md:h-[35px]
                                                                  sm:ml-[10px] sm:w-[20px]
                                                                  vsm:ml-[10px] vsm:w-[15px]'
                >
                  <img
                    src={arrowgroup}
                    alt=''
                    className='lg:w-[15px] lg:h-[15px]
                                md:w-[10px] md:h-[10px]
                                sm:w-[15px] sm:h-[15px]
                                vsm:w-[15px] vsm:h-[15px]'
                  />
                </div>
              </div>

              <div class='relative'>
                <input
                  type='text'
                  id='username'
                  class='bg-transparent lg:w-[90%] lg:h-[50px] border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer
                                        md:w-[90%] md:h-[50px]
                                        sm:w-[90%] sm:h-[40px]
                                        vsm:w-[90%] vsm:h-[40px]'
                  autocomplete='off'
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className='flex flex-col items-center  absolute lg:bottom-[-100px]   lg:w-[100%] lg:h-[200px]  
                                                                            md:bottom-[-100px]    md:w-[100%] md:h-[200px] 
                                                                            sm:bottom-[-100px]   sm:w-[100%] sm:h-[200px] sm:justify-evenly
                                                                            vsm:w-[100%] vsm:h-[620px]  vsm:bottom-[-1500px]
                                                                            '
        >
          <div
            className=' flex flex-col items-center   lg:w-[230px] lg:h-[90px] 
                                                                        md:w-[230px] md:h-[90px]
                                                                        sm:w-[200px] sm:h-[70px]  sm:justify-between 
                                                                        vsm:w-[100%] vsm:h-[130px] vsm:justify-around'
          >
            <div
              className='flex items-center justify-center font-Poppins font-normal text-[#252525]  lg:w-[230px] lg:h-[40px] lg:text-[14px]
                                                                                                         md:w-[230px] md:h-[40px] md:text-[14px]
                                                                                                         sm:w-[200px] sm:h-[40px] sm:text-[12px]
                                                                                                         vsm:w-[300px] vsm:h-[40px] vsm:text-[15px]'
            >
              Thanks for scrolling, that’s all folks.
            </div>
            <div
              className='flex justify-evenly items-center  lg:w-[170px] h-[40px]
                                                            md:w-[170px] md:h-[40px]
                                                            sm:w-[150px] sm:h-[40px]
                                                            vsm:w-[200px] vsm:h-[40px]'
            >
              <img
                src={facebook}
                alt=''
                className='lg:w-[25px] lg:h-[25px]
                            md:w-[25px] md:h-[25px]
                            sm:w-[25px] sm:h-[25px]
                            vsm:w-[30px] vsm:h-[30px]'
              />
              <img
                src={x}
                alt=''
                className='lg:w-[25px] lg:h-[25px]
                          md:w-[25px] md:h-[25px]
                          sm:w-[25px] sm:h-[25px]
                          vsm:w-[30px] vsm:h-[30px]'
              />
              <img
                src={instagram}
                alt=''
                className='lg:w-[25px] lg:h-[25px]
                           md:w-[25px] md:h-[25px]
                           sm:w-[25px] sm:h-[25px]
                           vsm:w-[30px] vsm:h-[30px]'
              />
              <img
                src={youtube}
                alt=''
                className='lg:w-[25px] lg:h-[25px]
                            md:w-[25px] md:h-[25px]
                            sm:w-[25px] sm:h-[25px]
                            vsm:w-[30px] vsm:h-[30px]'
              />
            </div>
          </div>

          <div
            className='flex    lg:w-[95%] lg:h-[50px] 
                                                            md:w-[95%] md:h-[50px]
                                                            sm:w-[95%] sm:h-[40px] sm:flex-row justify-center items-center
                                                            vsm:w-[100%] vsm:h-[450px] vsm:flex-col'
          >
            <div
              className='flex   lg:w-[150px] lg:h-[30px] font-Poppins font-[500] text-[#252525] lg:text-[16px] lg:border-r-2 lg:pl-0 lg:border-t-0
                                            md:text-[14px]  md:w-[80px] md:h-[30px] md:pl-0  md:border-r-2 md:border-t-0
                                            sm:text-[13px]  sm:w-[70px] sm:h-[30px] sm:justify-center  items-center sm:pl-0 sm:border-r-2 sm:border-b-0 sm:border-t-0
                                            vsm:text-[15px]  vsm:w-[100%] vsm:h-[40px] vsm:pl-[50px] vsm:border-b-2 vsm:border-t-2

                                            '
            >
              About Us
            </div>
            <div
              className='flex  lg:w-[150px] lg:h-[30px] font-Poppins font-[500] text-[#252525] lg:text-[16px] 
                                            md:text-[14px]  md:w-[80px] md:h-[30px]
                                            sm:text-[13px]  sm:w-[70px] sm:h-[30px] sm:justify-center  items-center sm:pl-0 sm:border-r-2 sm:border-b-0   
                                             vsm:text-[15px]  vsm:w-[100%] vsm:h-[40px] vsm:pl-[50px] vsm:border-b-2'
            >
              Services
            </div>
            <div
              className='flex   lg:w-[150px] lg:h-[30px] font-Poppins font-[500] text-[#252525] lg:text-[16px] 
                                            md:text-[14px]  md:w-[80px] md:h-[30px]
                                            sm:text-[13px]  sm:w-[70px] sm:h-[30px] sm:justify-center  items-center sm:pl-0 sm:border-r-2 sm:border-b-0
                                            vsm:text-[15px]  vsm:w-[100%] vsm:h-[50px] vsm:pl-[50px] vsm:border-b-2'
            >
              Projects
            </div>
            <div
              className='flex   lg:w-[150px] lg:h-[30px] font-Poppins font-[500] text-[#252525] lg:text-[16px] 
                                            md:text-[14px]  md:w-[80px] md:h-[30px]
                                            sm:text-[13px]  sm:w-[60px] sm:h-[30px] sm:justify-center  items-center sm:pl-0 sm:border-r-2 sm:border-b-0
                                            vsm:text-[15px]  vsm:w-[100%] vsm:h-[50px] vsm:pl-[50px] vsm:border-b-2'
            >
              Contact
            </div>
            <div
              className='flex   lg:w-[150px] lg:h-[30px] font-Poppins font-[500] text-[#252525] lg:text-[16px] 
                                            md:text-[14px]  md:w-[80px] md:h-[30px]
                                            sm:text-[13px]  sm:w-[60px] sm:h-[30px] sm:justify-center  items-center sm:pl-0 sm:border-r-2 sm:border-b-0
                                            vsm:text-[15px]  vsm:w-[100%] vsm:h-[40px] vsm:pl-[50px] vsm:border-b-2'
            >
              Pricing
            </div>
            <div
              className='flex   lg:w-[150px] lg:h-[30px] font-Poppins font-[500] text-[#252525] lg:text-[16px] 
                                            md:text-[14px]  md:w-[130px] md:h-[30px
                                            sm:text-[13px]  sm:w-[100px] sm:h-[30px] sm:justify-center  items-center sm:pl-0 sm:border-r-2 sm:border-b-0
                                            vsm:text-[15px]  vsm:w-[100%] vsm:h-[40px] vsm:pl-[50px] vsm:border-b-2'
            >
              Privacy Policy
            </div>
            <div
              className='flex   lg:w-[150px] lg:h-[30px] font-Poppins font-[500] text-[#252525] lg:text-[16px] 
                                            md:text-[14px]  md:w-[100px] md:h-[30px
                                            sm:text-[13px]  sm:w-[80px] sm:h-[30px] sm:justify-center  items-center sm:pl-0 sm:border-r-2 sm:border-b-0
                                            vsm:text-[15px]  vsm:w-[100%] vsm:h-[40px] vsm:pl-[50px] vsm:border-b-2'
            >
              Disclaimer
            </div>
            <div
              className='flex   lg:w-[150px] lg:h-[30px] font-Poppins font-[500] text-[#252525] lg:text-[16px] 
                                            md:text-[14px]  md:w-[70px] md:h-[30px]
                                            sm:text-[13px]  sm:w-[80px] sm:h-[30px] sm:justify-center  items-center sm:pl-0 sm:border-r-2 sm:border-b-0
                                            vsm:text-[15px]  vsm:w-[100%] vsm:h-[40px] vsm:pl-[50px] vsm:border-b-2'
            >
              Support
            </div>
            <div
              className='flex   lg:w-[200px] lg:h-[30px] font-Poppins font-[500] text-[#252525] lg:text-[16px] 
                                            md:text-[14px]  md:w-[200px] md:h-[30px
                                            sm:text-[13px]  sm:w-[150px] sm:h-[30px] sm:justify-center  items-center sm:pl-0 sm:border-r-2 sm:border-b-0
                                            vsm:text-[15px]  vsm:w-[100%] vsm:h-[40px] vsm:pl-[50px] vsm:border-b-2'
            >
              Terms and conditions
            </div>
            <div
              className='flex   lg:w-[100px] lg:h-[30px] font-Poppins font-[500] text-[#252525] lg:text-[16px]
                                            md:text-[14px]  md:w-[50px] md:h-[30px]
                                            sm:text-[13px]  sm:w-[50px] sm:h-[30px] sm:justify-center  items-center sm:pl-0  sm:border-b-0
                                            vsm:text-[15px]  vsm:w-[100%] vsm:h-[40px] vsm:pl-[50px] vsm:border-b-2 '
            >
              FAQ
            </div>
          </div>
          <div
            className='flex justify-center items-center  lg:w-[300px] lg:h-[50px]
                                                            md:w-[300px] md:h-[50px]
                                                            sm:w-[300px] sm:h-[40px]
                                                            vsm:w-[300px] vsm:h-[50px]'
          >
            <div
              className='font-Poppins font-normal text-[#4D4D4D]  lg:text-[14px]
                                                                    md:text-[14px]
                                                                    sm:text-[13px]
                                                                    vsm:text-[13px]'
            >
              &copy; 2023 Gelei Srshta. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTwelve
