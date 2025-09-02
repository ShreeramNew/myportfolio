"use client";
import React from "react";
import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { RiNextjsFill, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiNetlify,
  SiPostman,
  SiRedux,
  SiRender,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  return (
    <div className=" w-full h-fit relative overflow-hidden py-[6rem] skills-container">
      <div className=" w-full min-h-[10rem] border- px-2 md:px-8 afterIpad:px-0 afterIpad:max-w-[78rem] mx-auto flex flex-col justify-center items-center relative z-[10]">
        <div className=" border- w-full text-center md:text-left mt-16 md:mt-0  ">
          <div className=" text-[1.4rem] text-gray-300 font-semibold uppercase">
            Skills
          </div>
          <div className=" text-[2.3rem] text-themeOrange font-[500]">
            Weapons in My Arsenal
          </div>
        </div>
        {/* Tree  */}
        <div className=" w-fit h-full flex flex-col items-center relative gap-[4rem] scale-[0.6] md:scale-[1] md:mt-16 text-white">
          {/* Main Node  */}
          <div className=" border-2 w-fit border-gray-200 text-gray-150 px-8 py-1 relative">
            <span>Full Stack</span>

            {/* Connector  */}
            <div className=" w-[25rem] h-8 border-r-2 border-t-2 border-l-2 border-gray-300 absolute bottom-[-4rem] left-[-8rem]">
              <div className="w-full absolute left-0 h-full flex justify-center items-center top-[-2rem]">
                <div className=" border-[1px] h-full border-gray-200"></div>
              </div>
            </div>
          </div>

          <div className=" flex gap-[4rem] bg-t">
            {/* Frontend  */}
            <div className=" w-fit flex flex-col items-center">
              <div className=" w-fit border-2 border-gray-200 text-gray-150 px-8 py-1">
                Frontend
              </div>
              <div className=" flex flex-col gap-3 mt-3 border- ml-5">
                <ul className=" text-white list-disc ">
                  <li>Next JS</li>
                  <li>React JS</li>
                  <li>Redux Toolkit</li>
                  <li>Context API</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Antd</li>
                  <li>Framer Motion</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>

            {/* Backend  */}
            <div className=" w-fit ">
              <div className=" w-fit border-2 border-gray-200 text-gray-100 px-8 py-1 relative ">
                <span>Backend</span>
                <div className="w-full absolute  left-[-9.5px] md:left-[8.5px] h-full flex justify-center items-center top-[-34px]">
                  <div className=" border-[1px] h-full border-gray-200"></div>
                </div>
              </div>
              <ul className=" text-white list-disc mt-3 ml-5 ">
                <li>Node JS</li>
                <li>Express JS</li>
                <li>MongoDB</li>
                <li>JWT Authentication</li>
                <li>Middlewares</li>
                <li>Bycrypt</li>
              </ul>
            </div>

            {/* Tools  */}
            <div className=" w-fit ">
              <div className=" w-fit border-2 border-gray-200 text-gray-100 px-8 py-1 ">
                Tools
              </div>
              <ul className=" text-white list-disc mt-3 ml-5 ">
                <li>Git</li>
                <li>GitHub</li>
                <li>Vercel</li>
                <li>Netlify</li>
                <li>Render</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Black overlay  */}
      <div className=" w-full h-full absolute inset-0 bg-black opacity-[0.6] z-[1] backdrop-blur-sm"></div>

      {/* Skills Banner  */}
      <div className=" w-full h-max absolute inset-0 blur-sm flex flex-wrap gap-4 gap-y-10 md:gap-y-20 md:gap-20 justify-center p-3 text-themeOrange z-0 blur-ssm skills-banner">
        <RiNextjsFill size={150}/>
        <FaReact size={150}/>
        <SiRedux size={150}/>
        <SiTypescript size={150}/>
        <RiTailwindCssFill size={150}/>
        <FiFramer size={150}/>
        <FaHtml5 size={150}/>
        <FaCss3 size={150}/>
        <FaJs size={150}/>
        <FaNodeJs size={150}/>
        <SiExpress size={150}/>
        <SiMongodb size={150}/>
        <FaGitAlt size={150}/>
        <FaGithub size={150}/>
        <RiVercelFill size={150}/>
        <SiNetlify size={150}/>
        <SiRender size={150}/>
        <SiPostman size={150}/>
        <RiNextjsFill size={150}/>
        <FaReact size={150}/>
        <SiRedux size={150}/>
        <SiTypescript size={150}/>
        <RiTailwindCssFill size={150}/>
        <FiFramer size={150}/>
        <FaHtml5 size={150}/>
        <FaCss3 size={150}/>
        <FaJs size={150}/>
        <FaNodeJs size={150}/>
        <SiExpress size={150}/>
        <SiMongodb size={150}/>
        <FaGitAlt size={150}/>
        <FaGithub size={150}/>
        <RiVercelFill size={150}/>
        <SiNetlify size={150}/>
        <SiRender size={150}/>
        <SiPostman size={150}/>
      </div>

      {/* Fader for top*/}
      <div className=" w-full h-[5rem] bg-gradient-to-b from-background to-transparent absolute top-0 left-0 z-[2]"></div>
      {/* Fader for bottom*/}
      <div className=" w-full h-[5rem] bg-gradient-to-b from-transparent to-background absolute bottom-0 left-0 z-[2]"></div>
    </div>
  );
}
