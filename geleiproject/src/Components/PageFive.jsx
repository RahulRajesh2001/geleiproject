import React from "react";
import backgroundImg from "../assets/PageFiveBackground.png";
import rectangle from '../assets/rectangle.png'

const PageFive = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="flex lg:w-[100%]">
        <div className="flex flex-col justify-end items-start  lg:w-[33.5%] lg:h-screen lg:border-r-2">
          <div className="flex flex-col justify-evenly items-center lg:w-[300px] lg:h-[350px]">
            <div className=" lg:w-[250px] lg:h-[50px]">
              <div className=" font-Poppins font-[600] text-[#FFFFFF] text-[40px]  lg:w-[50px] lg:h-[50px] ">
                01
              </div>
            </div>
            <div className="flex flex-col justify-center  lg:w-[250px] lg:h-[150px]">
              <div className=" font-Poppins font-[600] text-[#FFFFFF] text-[30px] ">
                CLOSET FIT
              </div>
              <div className=" font-Poppins font-[600] text-[#FFFFFF] text-[30px] ">
                FOR ALL
              </div>
            </div>
            <div className="  lg:w-[250px] lg:h-[50px]">
              <div className="relative">
                <img
                  src={rectangle}
                  alt=""
                  className="absolute z-10 lg:w-[45px] lg:h-[45px]"
                />
                <div className="absolute z-20 font-Poppins font-[600] text-[#FFFFFF] lg:text-[17px] left-[20px] top-[10px] ">
                  READ MORE
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end items-start  lg:w-[33.5%] lg:h-screen lg:border-r-2">
          <div className="flex flex-col justify-evenly items-center  lg:w-[310px] lg:h-[350px]">
            <div className=" lg:w-[250px] lg:h-[50px]">
              <div className=" font-Poppins font-[600] text-[#FFFFFF] text-[40px]  lg:w-[50px] lg:h-[50px] ">
                02
              </div>
            </div>
            <div className="flex flex-col justify-center  lg:w-[300px] lg:h-[150px] lg:ml-[49px]">
              <div className=" font-Poppins font-[600] text-[#FFFFFF] text-[30px] ">
                GEARED TOWARDS
              </div>
              <div className=" font-Poppins font-[600] text-[#FFFFFF] text-[30px] ">
                ETERNAL
              </div>
            </div>
            <div className="  lg:w-[250px] lg:h-[50px]">
              <div className="relative">
                <img
                  src={rectangle}
                  alt=""
                  className="absolute z-10 lg:w-[45px] lg:h-[45px]"
                />
                <div className="absolute z-20 font-Poppins font-[600] text-[#FFFFFF] lg:text-[17px] left-[20px] top-[10px] ">
                  READ MORE
                </div>
              </div>
            </div>
          </div>
        </div>

         <div className="flex flex-col justify-end items-start  lg:w-[33%] lg:h-screen ">
          <div className="flex flex-col justify-evenly items-center  lg:w-[300px] lg:h-[350px]">
            <div className=" lg:w-[250px] lg:h-[50px]">
              <div className=" font-Poppins font-[600] text-[#FFFFFF] text-[40px]  lg:w-[50px] lg:h-[50px] ">
                03
              </div>
            </div>
            <div className="flex flex-col justify-center  lg:w-[250px] lg:h-[150px]">
              <div className=" font-Poppins font-[600] text-[#FFFFFF] text-[30px] ">
                TAKE THE WISE
              </div>
              <div className=" font-Poppins font-[600] text-[#FFFFFF] text-[30px] ">
                FASHION TIPS
              </div>
            </div>
            <div className="  lg:w-[250px] lg:h-[50px]">
              <div className="relative">
                <img
                  src={rectangle}
                  alt=""
                  className="absolute z-10 lg:w-[45px] lg:h-[45px]"
                />
                <div className="absolute z-20 font-Poppins font-[600] text-[#FFFFFF] lg:text-[17px] left-[20px] top-[10px] ">
                  READ MORE
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default PageFive;
