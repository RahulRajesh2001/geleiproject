import React from "react";
import backgroundImg from "../assets/pageEightBGImage.png";
import PageNinebgimg from '../assets/PageNinebgimg.png'

const PageEight = () => {
  return (
    <div
      className=" lg:h-[780px] lg:w-[100%]"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
       <div className="flex flex-col gap-[60px]  lg:w-[1100px] lg:h-[400px]">
        <div className=" lg:w-[600px] lg:h-[150px]  ">
          <h1 className="lg:text-[90px] font-bold font-Poppins  lg:w-[300px] lg:ml-[50px] lg:h-[150px] lg:pt-[20px] ">
            <span
              className="text-[#000000]"
              style={{
                WebkitTextStroke: "1px white",
              }}
            >
              OBLIGATIONS
            </span>
          </h1>
        </div>

        <div className="flex justify-center items-center  lg:w-[700px] lg:h-[150px] lg:ml-[290px] ">
          <div className="font-Poppins font-[500] text-[#FFFFFF] lg:text-[75px] tracking-wide">
            Zero Waste Living
          </div>
        </div>
      </div> 
      <div className=" lg:w-[200px] lg:h-[60px] lg:ml-[600px]">
        <button class="bg-[#FFFFFF] lg:text-[17px] lg:font-Poppins lg:w-[200px] lg:h-[55px]  text-[#000000] font-[700] py-2 px-4 rounded-none">
          VIEW PROJECTS
        </button>
      </div>

      <div className="bg-red-200 lg:w-[100%] lg:h-[243px] lg:mt-[80px]">
        <div>
          <img src={PageNinebgimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PageEight;
