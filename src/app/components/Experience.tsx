"use client";
import React from "react";
import { Timeline, ConfigProvider } from "antd";

export default function Experience() {
   const items = [
      {
         children: "Create a services site 2015-09-01",
      },
      {
         children: "Solve initial network problems 2015-09-01",
         color: "green",
      },
      {
         dot: <div className=" w-[20px] h-[20px] rounded-full animate-pulse bg-themeOrange" />,
         children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
      },
      {
         color: "red",
         children: "Network problems being solved 2015-09-01",
      },
      {
         children: "Create a services site 2015-09-01",
      },
   ];
   return (
      <div className=" lg:max-w-[78rem] mx-auto w-full min-h-[30rem] flex justify-between items-center">
         <div>
            <div className=" text-[1.4rem] text-gray-300 font-semibold">WORK EXPERIENCE</div>
            <div className=" text-[2.3rem] text-themeOrange font-[500]">The Road So Far</div>
         </div>
         <div>
            <ConfigProvider
               theme={{
                  components: {
                     Timeline: {
                        dotBg:"transparent",
                        tailColor:"white"
                     },
                  },
               }}
            >
               <Timeline mode="alternate" items={items} />
            </ConfigProvider>
         </div>
      </div>
   );
}
