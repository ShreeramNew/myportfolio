"use client";
import React, { useEffect, useState } from "react";
import jobNow from "../../../assets/images/jobNow.png";
import batteryStatus from "../../../assets/images/batteryStatus.png";
import news_app from "../../../assets/images/news_app.png";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
   const [showBg, setShowBg] = useState<boolean>(false);
   const ProjectData = [
      {
         _id: "jobPortal",
         projectName: "Job Portal",
         intro: " Developed a Job Portal with features for users to view, filter, and apply for jobs, manage profiles (including profile picture and resume), and explore similar job opportunities, and for employers to post jobs, manage company profiles, and view applicant profiles with resumes.",
         subPoints: (
            <>
               <CustomPoint>
                  <div>
                     Implemented <Highlight text={"JWT auth"} />
                     entication, and <Highlight text={"bycrypt"} /> to ensure secure login for both
                     users and employers, protecting personal and company data.
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
            </>
         ),
         image: jobNow,
         sourceCodeLink: "https://github.com/ShreeramNew/job-portal-typescript",
         viewProjectLink: "https://jobnow24.vercel.app/",
      },
      {
         _id: "batteryStatusApp",
         projectName: "Battery Alarm",
         intro: "This is a responsive web application built using React JS. It can alarm and give notifications when the device's battery level reaches a user-specified percentage. The app also allows to choose the alarm audio from the user's device.",
         subPoints: (
            <>
               <CustomPoint>
                  <div>
                     Implemented battery level monitoring using <Highlight text={"React hooks"} />{" "}
                     like useState and useEffect for real-time updates.
                  </div>
               </CustomPoint>
               <CustomPoint>
                  <div>
                     Integrated <Highlight text={"Context API"} /> for managing application-wide
                     state related to battery notifications.
                  </div>
               </CustomPoint>
               <CustomPoint>
                  <div>
                     Implemented file handling with <Highlight text={"File Reader API"} /> to allow
                     users to select custom alarm sounds.
                  </div>
               </CustomPoint>
               <CustomPoint>
                  <div>
                     Used <Highlight text={"Tailwind CSS, ant-design"} /> and{" "}
                     <Highlight text={" react-icons"} /> for enhancing UI
                  </div>
               </CustomPoint>
               <div className="text-gray-300 font-thin mt-3">
                  <span className="text-gray-200 text-[1.1rem] font-medium">Tech Stack:</span> React
                  JS, Navigation API, File Reader API, Tailwind CSS, antd, react-icons
               </div>
            </>
         ),
         image: batteryStatus,
         sourceCodeLink: "https://github.com/ShreeramNew/Battery-Status",
         viewProjectLink: "https://battery-health.netlify.app/",
      },
      {
         _id: "newsAPP",
         projectName: "News App",
         intro: "This is a web application built using React JS that fetches news from all over the world. Users can fetch news according to their country and category choice. It includes major concepts of React like useState, useEffect, Infinite Scroll, Context API, and many more.",
         subPoints: (
            <>
               <CustomPoint>
                  <div>
                     Fetched news dynamically based on user's country and category using{" "}
                     <Highlight text={"News API"} /> integration.
                  </div>
               </CustomPoint>
               <CustomPoint>
                  <div>
                     Utilized <Highlight text={"React hooks"} /> like{" "}
                     <Highlight text={"useState"} /> and <Highlight text={"useEffect"} /> for state
                     management and lifecycle control.
                  </div>
               </CustomPoint>
               <CustomPoint>
                  <div>
                     Implemented <Highlight text={"Infinite Scroll"} /> to enhance user experience
                     while browsing continuous news content.
                  </div>
               </CustomPoint>
               <CustomPoint>
                  <div>
                     Managed global state with <Highlight text={"Context API"} /> to enable country
                     and category preferences throughout the app.
                  </div>
               </CustomPoint>
               <div className="text-gray-300 font-thin mt-3">
                  <span className="text-gray-200 text-[1.1rem] font-medium">Tech Stack:</span> React
                  JS, useState, useEffect, Context API, Infinite Scroll, News API, Tailwind CSS
               </div>
            </>
         ),
         image: news_app,
         sourceCodeLink: "https://github.com/ShreeramNew/NewsyWorld",
         viewProjectLink: "",
      },
   ];

   const [activeindex, setActiveIndex] = useState(0);
   const [activeData, setActiveData] = useState(ProjectData[0]);

   useEffect(() => {
      setActiveData(ProjectData[activeindex]);
   }, [activeindex]);

   //-----------------------Handles clicking on next button-------------------
   const handleNext = () => {
      setActiveIndex((prev) => {
         if (prev == ProjectData.length - 1) {
            return 0;
         } else {
            return prev + 1;
         }
      });
   };

   //-----------------------Handles clicking on previous button-------------------
   const handlePrev = () => {
      setActiveIndex((prev) => {
         if (prev == 0) {
            return ProjectData.length - 1;
         } else {
            return prev - 1;
         }
      });
   };

   return (
      <div className=" lg:max-w-[78rem] mx-auto w-full min-h-[30rem] md:py-[10rem] pb-[3rem] border-">
         {/* Section title and Arrows  */}
         <div className=" border- w-full text-center md:text-left lg:w-[90%] flex-col md:flex-row gap-[1rem] md:gap-[0] flex justify-between items-center ">
            <div>
               <div className=" text-[1.4rem] text-gray-300 font-semibold">PROJECTS</div>
               <div className=" text-[2.3rem] text-themeOrange font-[500]">Built to Learn</div>
            </div>
            {/* Arrows  */}
            <div className=" flex justify-center items-center gap-3 ">
               <div
                  className=" text-white w-[50px] h-[50px] rounded-full shadow-sm cursor-pointer flex justify-center z-[10] items-center relative"
                  onClick={handlePrev}
               >
                  <div className="w-[50px] h-[50px] rounded-full shadow-sm cursor-pointer shadow-themeOrange absolute inset-0 animate-spin duration-500 reverse-spin z-[11]"></div>
                  <FaArrowLeftLong size={25} />
               </div>
               <div
                  className=" text-white w-[50px] h-[50px] rounded-full shadow-sm cursor-pointer flex justify-center z-[10] items-center relative"
                  onClick={handleNext}
               >
                  <div className="w-[50px] h-[50px] rounded-full shadow-sm cursor-pointer shadow-themeOrange absolute inset-0 animate-spin duration-500 z-[11]"></div>
                  <FaArrowRightLong size={25} />
               </div>
            </div>
         </div>

         <AnimatePresence key={activeindex}>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 2 }}
               className=" w-full border- px-[1rem] md:px-0 flex mt-[1rem] md:mt-0 flex-col flex-col-reverse md:grid md:grid-cols-6 border- gap-[4rem]"
            >
               <div className=" w-full flex flex-col  md:col-span-2 justify-center items-start border-">
                  <motion.div className=" h-[12rem] w-[22rem] md:w-[25rem] border- rounded-[16px] overflow-hidden">
                     <Image
                        alt="jobNow"
                        src={activeData.image}
                        className=" w-full h-full object-cover"
                     />
                  </motion.div>

                  {/* Project Links  */}
                  <div className=" flex justify-center items-center gap-2 w-full md:w-fit mt-[1.3rem] md:mt-0">
                     {/* Source code button  */}
                     <a
                        href={activeData.sourceCodeLink}
                        className=" w-[9rem] h-[2.6rem] border-2 overflow-hidden border-themeOrange rounded-[6px] flex justify-center items-center text-gray-100 md:mt-[4rem] text-[1.1rem] cursor-pointer relative"
                        onMouseOver={() => setShowBg(true)}
                        onMouseLeave={() => setShowBg(false)}
                     >
                        <div className="z-[1]">Source Code</div>
                        <div
                           className={`w-[11rem] h-full absolute ${
                              showBg ? "left-[-11rem]" : "left-[0rem]"
                           } transition-all duration-500  rounded-r-[7px] bg-themeOrange z-[0]`}
                        ></div>
                     </a>

                     {/* View project button  */}
                     {activeData.viewProjectLink !== "" ? (
                        <a
                           href={activeData.viewProjectLink}
                           className=" w-[9rem] h-[2.6rem] border-2 overflow-hidden border-themeOrange rounded-[6px] flex justify-center items-center text-gray-100 md:mt-[4rem] text-[1.1rem] cursor-pointer relative"
                           onMouseOver={() => setShowBg(true)}
                           onMouseLeave={() => setShowBg(false)}
                        >
                           <div className="z-[1]">View Project</div>
                           <div
                              className={`w-[11rem] h-full absolute ${
                                 showBg ? "left-0" : "left-[-11rem]"
                              } transition-all duration-500  rounded-r-[7px] bg-themeOrange z-[0]`}
                           ></div>
                        </a>
                     ) : (
                        <div className=" w-[9rem] h-[2.6rem] border-2 overflow-hidden border-gray-600 rounded-[6px] flex justify-center items-center text-gray-800 md:mt-[4rem] text-[1.1rem] cursor-not-allowed relative">
                           <div className="z-[1]">View Project</div>
                        </div>
                     )}
                  </div>
               </div>
               <div className=" w-full md:col-span-4">
                  {/* project Title  */}
                  <div className=" w-full flex justify-start items-center text-[2.5rem] text-gray-200">
                     {activeData.projectName}
                  </div>
                  <div className=" flex flex-col items-start justify-start">
                     {/* project Intro  */}
                     <div className=" text-gray-200 w-[80%] mt-3 mb-2">{activeData.intro}</div>

                     {/* Sub Points  */}
                     {activeData.subPoints}
                  </div>
               </div>
            </motion.div>
         </AnimatePresence>
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
