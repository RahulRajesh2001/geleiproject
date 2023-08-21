import React from "react";
import backgroundImg from "../assets/PageThreeRectangle.png";
import sheild from '../assets/sheild.png';
import heart from '../assets/heart.png'
import pensil from '../assets/pensil.png'
import hanger from '../assets/hanger.png';
import people from '../assets/people.png'

const PageThree = () => {
  return (
    <div>
      <div
        className="lg:w-[100%] lg:h-[160px] lg:mt-[50px]"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
        }}
      >
        {/* contents here */}

        <div className=" flex justify-center items-center lg:w-[100%] lg:h-[160px] ">
          <div className="flex justify-evenly  lg:w-[1300px] lg:h-[150px]">
            <div className="flex justify-center items-center   lg:w-[220px] lg:h-[150px]">
              <div className="flex flex-col justify-center items-center">
                <img
                src={sheild}
                  alt=""
                  className="lg:w-[40px] lg:h-[50px]"
                />
                {/* texts */}
                <div className="flex flex-col  lg:pt-[25px]">
                  <div className="font-Poppins font-[600] text-[#FFFFFF] text-[18px] lg:w-[120px] lg:ml-[20px]">
                    Best Quality{" "}
                  </div>
                  <div className="font-Poppins font-[600] text-[#FFFFFF] text-[18px] lg:w-[120px] lg:ml-[25px]  ">
                    Standards
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center   lg:w-[220px] lg:h-[150px]">
              <div className="flex flex-col justify-center items-center gap-6">
                <img
                  src={heart}
                  alt=""
                  className="lg:w-[40px] lg:h-[50px]"
                />
                {/* texts */}
                <div className="flex flex-col ">
                  <div className="font-Poppins font-[600] text-[#FFFFFF] text-[18px] lg:w-[170px] lg:ml-[20px]">
                    100% Satisfaction{" "}
                  </div>
                  <div className="font-Poppins font-[600] text-[#FFFFFF] text-[18px] lg:w-[120px] lg:ml-[50px]  ">
                    Guarantee
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center  lg:w-[220px] lg:h-[150px]">
              <div className="flex flex-col justify-center items-center gap-6">
                <img
                  src={pensil}
                  alt=""
                  className="lg:w-[40px] lg:h-[40px]"
                />
                {/* texts */}
                <div className="flex flex-col ">
                  <div className="font-Poppins font-[600] text-[#FFFFFF] text-[18px] lg:w-[170px] lg:ml-[30px]">
                    Quality Control{" "}
                  </div>
                  <div className="font-Poppins font-[600] text-[#FFFFFF] text-[18px] lg:w-[120px] lg:ml-[60px]  ">
                    System
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center   lg:w-[220px] lg:h-[150px]">
              <div className="flex flex-col justify-center items-center gap-6">
                <img
                  src={hanger}
                  alt=""
                  className="lg:w-[40px] lg:h-[50px]"
                />
                {/* texts */}
                <div className="flex flex-col ">
                  <div className="font-Poppins font-[600] text-[#FFFFFF] text-[18px] lg:w-[170px] lg:ml-[60px]">
                    Global fabrics{" "}
                  </div>
                  <div className="font-Poppins font-[600] text-[#FFFFFF] text-[18px] lg:w-[120px] lg:ml-[75px]  ">
                    Distributor
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center  lg:w-[220px] lg:h-[150px]">
              <div className="flex flex-col justify-center items-center lg:w-[200px] lg:h-[150px] gap-6 ">
                 <img
                  src={people}
                  alt=""
                  className="lg:w-[50px] lg:h-[40px]"
                /> 
                 texts 
               <div className="flex flex-col ">
                  <div className="font-Poppins font-[600] text-[#FFFFFF] text-[18px] lg:w-[170px] lg:ml-[15px]">
                    Highly Professional{" "}
                  </div>
                  <div className="font-Poppins font-[600] text-[#FFFFFF] text-[18px] lg:w-[120px] lg:ml-[75px]  ">
                    Team
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
