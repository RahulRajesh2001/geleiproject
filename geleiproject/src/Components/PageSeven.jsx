import React from "react";
import Round from "../assets/pagesevenimg.png"

const PageSeven = () => {
  return (
    <div className="flex justify-center items-center lg:w-[100%] lg:h-[400px]">
      <div className="flex relative  lg:w-[950px] lg:h-[350px]">
        <div class=" absolute z-10 right-0  border-2 border-[#7040F2] lg:w-[350px] lg:h-[350px] rounded-full">
          <div className="absolute top-[110px] lg:left-[120px] font-Poppins font-[600] text-[#7040F2]  text-[50px] ">
            89%
          </div>
          <div className="absolute top-[190px] lg:left-[105px] font-Poppins font-normal text-[#252525]  text-[13px] ">
            Market hold in industry
          </div>
        </div>
        <div class=" absolute z-20 left-[300px]  lg:w-[350px] lg:h-[350px] rounded-full">
          <img
          src={Round}
            alt=""
            className="lg:w-[349px] lg:h-[349px] rounded-full"
          />
        </div>
        <div class="  absolute z-10 left-0   border-2 border-[#7040F2] lg:w-[350px] lg:h-[350px] rounded-full">
          <div className="absolute top-[110px] lg:left-[70px] font-Poppins font-[600] text-[#252525]  text-[26px] ">
            Textile Services
          </div>
          <div className="absolute lg:top-[160px] lg:w-[180px] lg:h-[50px] font-Poppins font-normal text-[#4D4D4D] lg:text-[13px] lg:left-[85px]">
            Building a moral supply chain that results in high-quality,
            low-impact, and long-lasting products is something
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSeven;
