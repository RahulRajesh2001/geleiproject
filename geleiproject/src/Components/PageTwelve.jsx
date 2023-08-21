import React from 'react'
import PageTwelvebgimg from '../assets/pagetwelvebgimg.png'
import PageTwelvearrow from '../assets/PageTwelvearrow.png'
import send from '../assets/send.png'
import location from '../assets/location.png'
import x from "../assets/x.png"
import youtube from "../assets/youtube.png"
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import papperclip from '../assets/papperclip.png'
import arrowgroup from '../assets/arrowgroup.png'


const PageTwelve = () => {
  return (
    <div className='relative  lg:w-[100%] lg:h-screen'>
      <div className=' relative flex justify-center'>
        <div className=' lg:w-[700px] lg:h-[640px]'>
          <img
            src={PageTwelvebgimg}
            alt=''
            className='lg:w-[700px] lg:h-[700px]'
          />
        </div>
        {/* leftpart */}
        <div className='absolute left-0 lg:ml-[50px] lg:mt-[60px] lg:w-[500px] lg:h-[450px]'>
          <div className='flex  flex-col justify-center items-center lg:w-[500px] lg:h-[170px]'>
            <div className='flex flex-row gap-3  items-center  lg:w-[400px] lg:h-[60px]'>
              <div className='font-Poppins font-[700] text-[#252525] lg:text-[55px]'>
                Let’s
              </div>
              <div>
                <img
                  src={PageTwelvearrow}
                  alt=''
                  className='lg:w-[70px] lg:h-[70px]'
                />
              </div>
            </div>
            <div className='flex  items-center  lg:w-[400px] lg:h-[60px] font-Poppins font-[700] text-[#252525] lg:text-[55px] '>
              Connect.
            </div>
          </div>
          {/* paragraph prat */}
          <div className=' lg:w-[300px] lg:h-[100px] lg:ml-[50px]'>
            <div className='font-normal text-[#4D4D4D] font-Poppins lg:text-[13px]'>
              We are aware of how essential it is to feel at ease, both at your
              favorite spot and during your best moments. Our designs are made
              to be worn every day and are the ideal balance of soft and
              supportive threads to chill out.
            </div>
          </div>

          <div className=' flex flex-col justify-evenly   lg:w-[300px] lg:h-[150px] lg:ml-[50px]'>
            <div className='flex items-center gap-5  lg:w-[250px] lg:h-[50px]'>
              <div>
                <img
                  src={send}
                  alt=''
                  className='lg:w-[30px] lg:h-[30px]'
                />
              </div>
              <div className='font-Poppins font-normal text-[#252525] lg:text-[15px]'>
                info@geleishrsta.com
              </div>
            </div>

            <div className='flex items-center gap-5  lg:w-[250px] lg:h-[50px]'>
              <div>
                <img
                  src={location}
                  alt=''
                  className='lg:w-[40px] lg:h-[30px]'
                />
              </div>
              <div className='font-Poppins font-normal text-[#252525] lg:text-[15px]'>
                North First, New Hyde Park, NY 11040, USA
              </div>
            </div>
          </div>
        </div>
        {/* rightside */}
        <div className='absolute right-[200px]  lg:mt-[50px] lg:w-[500px] lg:h-[450px]'>
          {/* heading */}
          <div className=' relative flex   lg:w-[500px] lg:h-[130px]'>
            <div className='absolute z-10 rotate-12 flex flex-col justify-center items-center bg-[#7040F2] lg:w-[100px] lg:h-[100px] rounded-full'>
              <div className='font-Poppins font-[700] text-[#FFFFFF] lg:text-[14px]'>
                open for
              </div>
              <div className='font-Poppins font-[700] text-[#FFFFFF] lg:text-[14px]'>
                new project
              </div>
            </div>

            <div className='absolute z-20 lg:left-[85px] gap-6 flex flex-col justify-center   lg:w-[350px] lg:h-[100px]'>
              <div className='font-Poppins font-[600] lg:h-[10px] text-[#252525] lg:text-[30px]'>
                Estimate your ptoject?
              </div>
              <div className='font-Poppins font-[600] lg:h-[10px] text-[#252525] lg:text-[30px]'>
                let me know here.
              </div>
            </div>
          </div>

          {/* input boxes */}
          <div className='flex flex-col justify-evenly items-center   lg:w-[500px] lg:h-[320px]'>
            <div className='flex flex-col justify-evenly  lg:ml-[50px]  lg:w-[430px] lg:h-[100px]'>
              <div className='font-Poppins font-[600] text-[#252525] lg:text-[21px]'>
                What’s your name?
              </div>

              <div class='relative'>
                <input
                  type='text'
                  id='username'
                  class='lg:w-[430px] lg:h-[50px] border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer'
                  autocomplete='off'
                />
              </div>
            </div>

            <div className='flex flex-col justify-evenly  lg:ml-[50px]  lg:w-[430px] lg:h-[100px]'>
              <div className='font-Poppins font-[600] text-[#252525] lg:text-[21px]'>
                Email Address
              </div>

              <div class='relative'>
                <input
                  type='text'
                  id='username'
                  class=' lg:w-[430px] lg:h-[50px] border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer'
                  autocomplete='off'
                />
              </div>
            </div>
            <div className='flex flex-col justify-evenly  lg:ml-[50px]  lg:w-[430px] lg:h-[100px]'>
              <div className='flex   lg:w-[430px] lg:h-[35px]'>
                <div className='font-Poppins font-[600] text-[#252525] lg:text-[21px]'>
                  Tell me about your project
                </div>
                <div className='flex justify-center items-center lg:ml-[35px]  lg:w-[50px] lg:h-[35px]'>
                  <img
                    src={papperclip}
                    alt=''
                    className='lg:w-[15px] lg:h-[15px]'
                  />
                </div>
                <div className=' flex justify-center items-center lg:ml-[20px]  lg:w-[50px] lg:h-[35px]'>
                  <img
                    src={arrowgroup}
                    alt=''
                    className='lg:w-[15px] lg:h-[15px]'
                  />
                </div>
              </div>

              <div class='relative'>
                <input
                  type='text'
                  id='username'
                  class=' lg:w-[430px] lg:h-[50px] border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer'
                  autocomplete='off'
                />
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className='flex flex-col justify-evenly items-center  absolute bottom-[-100px]   lg:w-[100%] lg:h-[200px]'>
          <div className=' flex flex-col justify-between items-center   lg:w-[230px] lg:h-[90px]'>
            <div className='flex items-center justify-center  lg:w-[230px] h-[40px] font-Poppins font-normal text-[#252525] lg:text-[14px]'>
              Thanks for scrolling, that’s all folks.
            </div>
            <div className='flex justify-evenly items-center  lg:w-[170px] h-[40px]'>
              <img
                src={facebook}
                alt=''
                className='lg:w-[25px] lg:h-[25px]'
              />
              <img
                src={x}
                alt=''
                className='lg:w-[25px] lg:h-[25px]'
              />
              <img
                src={instagram}
                alt=''
                className='lg:w-[25px] lg:h-[25px]'
              />
              <img
                src={youtube}
                alt=''
                className='lg:w-[25px] lg:h-[25px]'
              />
            </div>
          </div>
          <div className='flex justify-center items-center  lg:w-[1450px] lg:h-[50px]'>
            <div className='flex justify-center items-center  lg:w-[150px] lg:h-[30px] font-Poppins font-[500] text-[#252525] text-[16px] border-r-2'>
              About Us
            </div>
            <div className='flex justify-center items-center  lg:w-[150px] lg:h-[30px] font-Poppins font-[500] text-[#252525] text-[16px] border-r-2'>
              Services
            </div>
            <div className='flex justify-center items-center  lg:w-[150px] lg:h-[30px] font-Poppins font-[500] text-[#252525] text-[16px] border-r-2'>
              Projects
            </div>
            <div className='flex justify-center items-center  lg:w-[150px] lg:h-[30px] font-Poppins font-[500] text-[#252525] text-[16px] border-r-2'>
              Contact
            </div>
            <div className='flex justify-center items-center  lg:w-[150px] lg:h-[30px] font-Poppins font-[500] text-[#252525] text-[16px] border-r-2'>
              Pricing
            </div>
            <div className='flex justify-center items-center  lg:w-[150px] lg:h-[30px] font-Poppins font-[500] text-[#252525] text-[16px] border-r-2'>
              Privacy Policy
            </div>
            <div className='flex justify-center items-center  lg:w-[150px] lg:h-[30px] font-Poppins font-[500] text-[#252525] text-[16px] border-r-2'>
              Disclaimer
            </div>
            <div className='flex justify-center items-center  lg:w-[150px] lg:h-[30px] font-Poppins font-[500] text-[#252525] text-[16px] border-r-2'>
              Support
            </div>
            <div className='flex justify-center items-center  lg:w-[200px] lg:h-[30px] font-Poppins font-[500] text-[#252525] text-[16px] border-r-2'>
              Terms and conditions
            </div>
            <div className='flex justify-center items-center  lg:w-[100px] lg:h-[30px] font-Poppins font-[500] text-[#252525] text-[16px] '>
              FAQ
            </div>
          </div>
          <div className='flex justify-center items-center  lg:w-[300px] lg:h-[50px]'>
            <div className='font-Poppins font-normal text-[#4D4D4D]  lg:text-[14px]'>
              &copy; 2023 Gelei Srshta. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTwelve
