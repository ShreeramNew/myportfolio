"use client";
import React, { useState } from "react";
import Image from "next/image";
import pic from "../../../assets/images/pic.jpg";
export default function Intro() {
   const [showBg, setShowBg] = useState<boolean>(false);

   const handleResume = () => {
      const a = document.createElement("a");
      a.href = "https://drive.google.com/uc?export=download&id=1oVOFSzGOhVTtcuvjCzmjZOpSS9rEHAim";
      a.download = "Resume.pdf";
      a.click();
   };
   return (
      <div className=" h-[100vh] w-full bg-background overflow-hidden relative">
         <div className=" absolute h-[150rem] w-[60rem] top-[-10rem] right-[-20rem] bg-themeOrange rotate-[20deg] "></div>
         <div className=" h-full w-fit border- right-[20rem] flex justify-center items-center absolute">
            <div className=" w-[210px] h-[210px] rounded-full flex justify-center items-center">
               <div className="w-[160px] h-[160px] overflow-hidden rounded-full border-">
                  <Image
                     src={pic}
                     alt="my Picture"
                     className=" w-[180px] h-[200px] object-cover scale-[1.4] relative top-[1rem]"
                  />
               </div>
               <div className=" w-[210px] h-[210px] border-b-2 border-t-2 animate-[spin_2s_linear_infinite]  rounded-full flex justify-center items-center absolute ">
                  <div className=" w-[180px] h-[180px] border-b-2 border-t-2 animate-[spin_1.4s_linear_infinite] rounded-full flex justify-center items-center"></div>
               </div>
            </div>
         </div>
         <div className=" h-full w-fit px-[5rem] flex flex-col justify-center items-start">
            <div className=" border-">
               {/* <div className=" text-[2rem] text-gray-200">Hello, world!</div> */}
               <div className=" text-[2.1rem] text-gray-200">
                  I' AM <span className=" text-[3.2rem] text-themeOrange ml-2">SHREERAM</span>
               </div>
               <div className="text-[2.3rem] text-gray-300">
                  A creator of <span className="text-gray-100">Digital magic!</span>{" "}
               </div>
            </div>
            <div
               className=" w-[10rem] h-[2.6rem] border-2 overflow-hidden border-themeOrange rounded-[6px] flex justify-center items-center text-gray-100 mt-[4rem] text-[1.3rem] cursor-pointer relative"
               onMouseOver={() => setShowBg(true)}
               onMouseLeave={() => setShowBg(false)}
               onClick={handleResume}
            >
               <div className="z-[1]">View Resume</div>
               <div
                  className={`w-[11rem] h-full absolute ${
                     showBg ? "left-0" : "left-[-11rem]"
                  } transition-all duration-500  rounded-r-[7px] bg-themeOrange z-[0]`}
               ></div>
            </div>
         </div>
      </div>
   );
}
