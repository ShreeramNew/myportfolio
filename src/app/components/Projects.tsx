"use client";
import React from "react";
import jobNow from "../../../assets/images/jobNow.png";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

export default function Projects() {
   return (
      <div className=" lg:max-w-[78rem] mx-auto w-full min-h-[30rem] py-[10rem] pb-[3rem] border-">
         <div className=" border- w-full text-center md:text-left lg:w-[90%] flex justify-between items-center ">
            <div>
               <div className=" text-[1.4rem] text-gray-300 font-semibold">PROJECTS</div>
               <div className=" text-[2.3rem] text-themeOrange font-[500]">Built to Learn</div>
            </div>
         </div>
         <div className=" w-full border- px-[1rem] md:px-0 grid grid-cols-6 border- gap-[2rem]">
            <div className=" w-full flex col-span-2 justify-start items-center border-">
               <div className=" h-[25rem] w-[30rem]">
                  <Image alt="jobNow" src={jobNow} className=" w-full h-full object-contain" />
               </div>
            </div>
            <div className=" w-full col-span-4">
               <div className=" w-full flex justify-end items-center text-[2.5rem] text-gray-200">
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
