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
      <div className=" h-[100vh] w-full bg-background overflow-hidden relative">
         <div className=" w-full h-full absolute inset-0 z-[1] ">
            <video
               src="https://videos.pexels.com/video-files/11244983/11244983-hd_1920_1080_24fps.mp4"
               className=" w-full h-full object-cover"
               autoPlay
               loop
               playsInline
               muted
            />
         </div>
         <div className="w-full h-fit absolute top-[3rem] px-[3rem] text-gray-200 z-[2]">
            <IoMenu size={35} className=" cursor-pointer" />
         </div>
         <div className=" absolute h-[150rem] w-[60rem] top-[-10rem] right-[-20rem] bg-themeOrange rotate-[20deg] z-[2] "></div>
         <div className=" h-full w-fit border- right-[20rem] flex justify-center items-center absolute z-[2]">
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
         <div className=" h-full w-fit px-[5rem] flex flex-col justify-center items-start z-[2] relative">
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
         <div className=" z-[2] h-fit w-full absolute bottom-[3rem] flex justify-start items-center px-[20rem] gap-5 text-gray-300">
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
      </div>
   );
}
