"use client";
import React, { useState } from "react";
import Image from "next/image";
import pic from "../../../assets/images/pic.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

export default function Intro() {
   const [showBg, setShowBg] = useState<boolean>(false);

   const handleResume = () => {
      const a = document.createElement("a");
      a.href = "https://drive.google.com/uc?export=download&id=1oVOFSzGOhVTtcuvjCzmjZOpSS9rEHAim";
      a.download = "Resume.pdf";
      a.click();
   };
   return (
      <div className=" h-[100vh] w-full bg-background overflow-hidden relative backdrop-blur-sm">
         {/* Content that has max-width  */}
         <div className=" border-2 w-full relative mx-auto flex justify-between items-center h-full max-w-[23rem] ipad-air-portrait:max-w-[42rem] lg:max-w-[78rem]">
            {/* Left side intro lines  */}
            <div className=" h-full w-fit px-[1rem] ipad-air-portrait:max-w-[57%] lg:px-[5rem] flex flex-col justify-center items-start z-[4] relative lg:backdrop-blur-0 border-">
               <div className=" border-">
                  {/* <div className=" text-[2rem] text-gray-200">Hello, world!</div> */}
                  <div className=" text-[2.1rem] text-gray-200">
                     I' AM <span className=" text-[3.2rem] text-themeOrange">SHREERAM</span>
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

            {/*Profile Image  */}
            <div className=" h-full w-fit border- flex justify-center items-start scale-[0.8] md:scale-[1] md:items-center absolute right-5 top-2 md:relative z-[5]">
               <div className=" w-[210px] h-[210px] rounded-full flex justify-center items-center">
                  <div className="w-[160px] h-[160px] overflow-hidden rounded-full border-">
                     <Image
                        src={pic}
                        alt="my Picture"
                        className=" w-[180px] h-[200px] object-cover scale-[1.3] relative top-[1rem]"
                     />
                  </div>
                  <div className=" w-[210px] h-[210px] border-b-2 border-t-2 animate-[spin_2s_linear_infinite]  rounded-full flex justify-center items-center absolute ">
                     <div className=" w-[180px] h-[180px] border-b-2 border-t-2 animate-[spin_1.4s_linear_infinite] rounded-full flex justify-center items-center"></div>
                  </div>
               </div>
            </div>
         </div>
         {/* Video Background  */}
         <div className=" w-full h-full absolute inset-0 z-[1]">
            <video
               src="https://videos.pexels.com/video-files/11244983/11244983-hd_1920_1080_24fps.mp4"
               className=" w-full h-full object-cover"
               autoPlay
               loop
               playsInline
               muted
            />
         </div>
         {/* Extra black layer  */}
         <div className=" w-full h-full absolute inset-0 z-[3] bg-black/20 lg:opacity-[0.3] bg-black backdrop-blur-sm"></div>

         {/* Menu Icon  */}
         <div className="w-full h-fit absolute top-[1rem] md:top-[3rem] px-[1rem] md:px-[3rem] text-gray-200 z-[15]">
            <IoMenu size={35} className=" cursor-pointer" />
         </div>

         {/* Github and other links  */}
         <div className=" z-[4] h-fit w-full border- absolute bottom-[5rem] flex justify-start items-center px-[2rem] md:px-[20rem] gap-5 text-gray-300">
            <a href="https://github.com/ShreeramNew">
               <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/shreeram-630102262/">
               <FaLinkedin size={30} />
            </a>
            <a href="mailto:shreerambca1@gmail.com">
               <MdOutlineEmail size={35} />
            </a>
         </div>

         {/* extra inner shadow */}
         <div className=" z-[4] h-[5rem] w-full border- absolute bottom-[0rem] flex justify-start items-center px-[2rem] md:px-[20rem] gap-5 text-gray-300 border-">
            <div className=" w-full h-full absolute inset-0 bg-gradient-to-t from-background to-transparent border-"></div>
         </div>
      </div>
   );
}
