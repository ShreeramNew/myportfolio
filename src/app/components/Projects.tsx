"use client";
import React, { useState } from "react";
import jobNow from "../../../assets/images/jobNow.png";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Projects() {
   const [showBg, setShowBg] = useState<boolean>(false);
   return (
      <div className=" lg:max-w-[78rem] mx-auto w-full min-h-[30rem] py-[10rem] pb-[3rem] border-">
         <div className=" border- w-full text-center md:text-left lg:w-[90%] flex justify-between items-center ">
            <div>
               <div className=" text-[1.4rem] text-gray-300 font-semibold">PROJECTS</div>
               <div className=" text-[2.3rem] text-themeOrange font-[500]">Built to Learn</div>
            </div>
            {/* Arrows  */}
            <div className=" flex justify-center items-center gap-3 ">
               <div className=" text-white w-[50px] h-[50px] rounded-full shadow-sm cursor-pointer flex justify-center z-[10] items-center relative">
                  <div className="w-[50px] h-[50px] rounded-full shadow-sm cursor-pointer shadow-themeOrange absolute inset-0 animate-spin duration-500 z-[11]"></div>
                  <FaArrowLeftLong size={25} />
               </div>
               <div className=" text-white w-[50px] h-[50px] rounded-full shadow-sm cursor-pointer flex justify-center z-[10] items-center relative">
                  <div className="w-[50px] h-[50px] rounded-full shadow-sm cursor-pointer shadow-themeOrange absolute inset-0 animate-spin duration-500 z-[11]"></div>
                  <FaArrowRightLong size={25} />
               </div>
            </div>
         </div>
         <div className=" w-full border- px-[1rem] md:px-0 grid grid-cols-6 border- gap-[2rem]">
            <div className=" w-full flex flex-col col-span-2 justify-start items-start border-">
               <div className=" h-[20rem] w-[25rem] border-">
                  <Image alt="jobNow" src={jobNow} className=" w-full h-full object-contain" />
               </div>

               {/* Project Links  */}
               <div className=" flex justify-center items-center gap-2">
                  <div
                     className=" w-[10rem] h-[2.6rem] border-2 overflow-hidden border-themeOrange rounded-[6px] flex justify-center items-center text-gray-100 mt-[4rem] text-[1.3rem] cursor-pointer relative"
                     onMouseOver={() => setShowBg(true)}
                     onMouseLeave={() => setShowBg(false)}
                  >
                     <div className="z-[1]">View Project</div>
                     <div
                        className={`w-[11rem] h-full absolute ${
                           showBg ? "left-0" : "left-[-11rem]"
                        } transition-all duration-500  rounded-r-[7px] bg-themeOrange z-[0]`}
                     ></div>
                  </div>
                  <div
                     className=" w-[10rem] h-[2.6rem] border-2 overflow-hidden border-themeOrange rounded-[6px] flex justify-center items-center text-gray-100 mt-[4rem] text-[1.3rem] cursor-pointer relative"
                     onMouseOver={() => setShowBg(true)}
                     onMouseLeave={() => setShowBg(false)}
                  >
                     <div className="z-[1]">Source Code</div>
                     <div
                        className={`w-[11rem] h-full absolute ${
                           showBg ? "left-[-11rem]" : "left-[0rem]"
                        } transition-all duration-500  rounded-r-[7px] bg-themeOrange z-[0]`}
                     ></div>
                  </div>
               </div>
            </div>
            <div className=" w-full col-span-4">
               <div className=" w-full flex justify-start items-center text-[2.5rem] text-gray-200">
                  Job Portal
               </div>
               <div className=" flex flex-col items-start justify-start">
                  <div className=" text-gray-200 w-[80%] mt-3 mb-2">
                     Developed a Job Portal with features for users to view, filter, and apply for
                     jobs, manage profiles (including profile picture and resume), and explore
                     similar job opportunities, and for employers to post jobs, manage company
                     profiles, and view applicant profiles with resumes.
                  </div>
                  <CustomPoint>
                     <div>
                        Implemented <Highlight text={"JWT auth"} />
                        entication, and <Highlight text={"bycrypt"} /> to ensure secure login for
                        both users and employers, protecting personal and company data.
                     </div>
                  </CustomPoint>
                  <CustomPoint>
                     <div>
                        Integrated <Highlight text={"Multer"} /> {""}
                        and <Highlight text={"Firebase"} /> for handling profile picture and resume
                        uploads in the backend.
                     </div>
                  </CustomPoint>
                  <CustomPoint>
                     <div>
                        Designed and implemented <Highlight text={"responsive UIs"} /> {""}
                        using <Highlight text={"Next.js, Redux Toolkit, Tailwind CSS,"} /> and{" "}
                        <Highlight text={"Ant Design"} /> and enhanced user interaction with{" "}
                        <Highlight text={"Framer Motion"} />
                     </div>
                  </CustomPoint>

                  <div className=" text-gray-100 mt-3">
                     <span className=" text-gray-200 text-[1.1rem]">Tech Stack:</span> Next.js,{" "}
                     <Highlight text={"TypeScript"} />, Tailwind CSS, Node.js,{" "}
                     <Highlight text={"MongoDB"} /> ,{""} Express.js, Firebase, Framer Motion, Ant
                     Design, JWT, Redux Toolkit, bcrypt.
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

const CustomPoint = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className=" flex justify-start items-start text-[#b9b9b9] max-w-[39rem] gap-1 text-[1rem] text-left">
         <GoDotFill size={16} className=" flex-shrink-0 mt-2" />
         {children}
      </div>
   );
};

const Highlight = ({ text }: { text: String }) => {
   return <span className=" font-[500] text-themeOrange">{text}</span>;
};
