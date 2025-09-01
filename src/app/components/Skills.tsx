"use client";
import React from "react";

export default function Skills() {
  return (
    <div className=" w-full min-h-[10rem] border- md:max-w-[40rem] ipadMini-To-ipadAir:max-w-[60rem] lg:max-w-[78rem] mx-auto mb-[16rem] flex flex-col justify-center items-center">
      <div className=" border- w-full text-center md:text-left mt-16 md:mt-0  ">
        <div className=" text-[1.4rem] text-gray-300 font-semibold uppercase">
          Skills
        </div>
        <div className=" text-[2.3rem] text-themeOrange font-[500]">
          Weapons in My Arsenal
        </div>
      </div>
      {/* Tree  */}
      <div className=" w-fit h-full flex flex-col items-center relative gap-[4rem] scale-[0.6] md:scale-[1] md:mt-16">
        {/* Main Node  */}
        <div className=" border-2 w-fit border-gray-200 text-gray-100 px-8 py-1 relative">
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
            <div className=" w-fit border-2 border-gray-200 text-gray-100 px-8 py-1">
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
  );
}
