import React from "react";

const PageFour = () => {
  return (
    <div className="bg-[#FFFFFF] lg:w-[100%] lg:h-[380px]">
      <div className="flex flex-col justify-end  lg:w-[1000px] lg:h-[230px]">
        <div className=" lg:w-[700px] lg:h-[100px] lg:ml-[100px]">
          <h1 className="text-[90px] font-bold font-Poppins">
            <span
              className="text-white"
              style={{
                WebkitTextStroke: "1px black", // Stroked text
              }}
            >
              What We Offer
            </span>
          </h1>
        </div>
      </div>

      <div className="flex justify-end  lg:w-[640px] lg:h-[130px]">
        <div className="flex justify-center items-center  lg:w-[540px] lg:h-[80px]">
          <div className=" font-Poppins font-[400] text-[14px] text-[#4D4D4D] lg:mt-[40px]">
            We take great satisfaction in being fashion pioneers. We set out to
            provide you with a variety of options because no two individuals are
            precisely same. Depending on your fashion requirements, choose from
            willowy, customized, bony, or sporty.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFour;
