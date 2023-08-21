import React from "react";
import backgroundImg from "../assets/pageEightBGImage.png";
import PageNineImg from '../assets/pagenine.png'

const PageNine = () => {
  return (
    <div
      className=" relative lg:h-[600px] lg:w-[100%]"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
  <div className="flex">
{/* leftside */}
<div className="flex justify-center items-center  lg:w-[70%] lg:h-[600px]">
        <div className=" lg:w-[700px] lg:h-[250px] lg:mr-[100px]">
          <div className="font-Poppins text-[#FFFFFF] text-[27px] font-[700]">
            Obligations to Nature
          </div>

          <div className="lg:mt-[20px] lg:w-[400px] font-normal font-Poppins text-[#4D4D4D] lg:text-[15px]">
            We take great care when knitting our products and collaborate with
            our manufacturing partners to cut down on waste, chemicals, and
            plastics that damage the ecosystems and people of our globe.{" "}
          </div>

          <button class="bg-[#FFFFFF] lg:text-[15px] lg:font-Poppins lg:w-[170px] lg:h-[40px]  text-[#000000] font-[700] py-2 px-4 rounded-none lg:mt-[30px]">
            VIEW PROJECTS
          </button>
        </div>
      </div>

      {/* rightside */}
      <div className=" flex justify-center items-center absolute right-0 bottom-0 lg:w-[30%]  lg:h-[600px]  bg-red-200 ">
        <img src={PageNineImg} alt=""  className="lg:w-[100%]  lg:h-[600px]"/>
      </div>
      </div>
      
    </div>
  );
};

export default PageNine;
