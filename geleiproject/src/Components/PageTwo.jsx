import React from "react";
import aboutus from "../assets/About Us.png"
import PageTwoImg from '../assets/Page2img.png'
import rectangle from '../assets/rectangle.png'
import readmore from '../assets/readmore.png'

const PageTwo = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF] lg:w-[100%] lg:h-[700px]">
        {/* topart */}
        <div className=" lg:w-[800px] lg:h-[200px] ">
          <div className=" lg:w-[500px] lg:h-[100px] lg:ml-[150px] lg:pt-[100px]">
            <img
            src={aboutus}
              alt=""
              className="lg:h-[70px] lg:w-[400px]"
            />
          </div>
        </div>

        <div className="flex   lg:w-[100%] lg:h-[500px]">
          {/* leftpart */}
          <div className=" flex justify-end items-center lg:w-[50%] lg:h-[500px]">
            <div className=" lg:w-[500px] lg:h-[500px] lg:mr-[30px]">
              <img
                src={PageTwoImg }
                alt=""
                className="lg:w-[500px] lg:h-[500px] "
              />
            </div>
          </div>
          {/* rightpart */}
          <div className=" lg:w-[50%] lg:h-[500px]">
            <div className=" lg:w-[600px] lg:h-[490px]">
              <div className=" lg:w-[120px] lg:h-[30px] lg:ml-[10px] lg:mt-[10px]">
                <div className="font-Poppins font-[600px] text-[14px]  text-[#4D4D4D66] ">
                  --- OUR VISION
                </div>
              </div>
              <div className=" lg:w-[300px] lg:h-[100px] lg:mt-[5px]">
                <div>
                  <div className="font-[750] font-Poppins text-[24px] text-[#252525]">
                    We Provide The Best
                  </div>
                  <div className="font-[750] font-Poppins text-[24px] text-[#252525]">
                    Textile Industry{" "}
                  </div>
                </div>
              </div>

              <div className=" lg:w-[400px] lg:h-[100px] ">
                <div className="font-[500] font-Poppins text-[17px] text-[#252525]">
                  Our goal is to make it as easy as possible for you to walk
                  away with the solution that suits your needs perfectly.
                </div>
              </div>

              <div className=" lg:w-[500px] lg:h-[100px]">
                <div className="font-normal font-Poppins text-[14px] text-[#4D4D4D]">
                  With Gelei Srishta, you get the best as simple as quilting a
                  blanket. Because of this, we cooperate with the righteous
                  factories worldwide. We ensure that you get the best out of
                  everything you've ever worn. There is nothing like it.
                </div>
              </div>

              <div className=" lg:w-[200px] lg:h-[50px] lg:mt-[70px]">
                <div className="relative">
                  <img
                    src={rectangle}
                    alt=""
                    className="absolute z-10 lg:w-[50px]"
                  />
                  <img
                    src={readmore}
                    alt=""
                    className="absolute z-20 lg:w-[140px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
