"use client";
import React from "react";
import { Timeline, ConfigProvider } from "antd";
import { GoDotFill } from "react-icons/go";

export default function Experience() {
   const items = [
      {
         dot: <div className=" w-[15px] h-[15px] rounded-full bg-gray-200 flex-shrink-0" />,
         children: (
            <div className=" pr-[1rem]">
               <div className=" flex justify-between items-center">
                  <div className=" text-themeOrange text-[1.1rem]">
                     Frontend Developer Intern{" "}
                     <span className=" text-[0.9rem] text-gray-300">@Tikanga pvt ltd, Mangalore</span>
                  </div>
                  <div className=" text-gray-300">Aug 2024 - Nov 2024</div>
               </div>
               <div className=" flex flex-col gap-[10px] mt-3">
                  <CustomPoint>
                     <div>
                        Developed multiple web applications using{" "}
                        <Highlight text={"Next.js, TypeScript, React.js"} /> and{" "}
                        <Highlight text={"Ant Design"} />
                     </div>
                  </CustomPoint>
                  <CustomPoint>
                     <div>
                        Worked on a payment-related web application with 2000+ users, integrating
                        APIs, optimizing performance, and improving overall website efficiency by
                        ~20% using <Highlight text={"debouncing"} /> (reducing redundant API calls
                        by grouping user input requests into 500ms intervals).
                     </div>
                  </CustomPoint>
                  <CustomPoint>
                     <div>
                        Developed an E-Cart Application from scratch, implementing product listing,
                        search, cart management, shipping details, and a{" "}
                        <Highlight text={"Razorpay payment gateway"} />.
                     </div>
                  </CustomPoint>
                  <CustomPoint>
                     <div>
                        Created a <Highlight text={"responsive"} /> landing page for an educational
                        website in close collaboration with UI/UX designers, ensuring pixel-perfect
                        implementation.
                     </div>
                  </CustomPoint>
                  <CustomPoint>
                     <div>
                        Designed an animated company landing page using{" "}
                        <Highlight text={"Framer Motion"} /> , delivering a highly interactive and
                        engaging user experience.
                     </div>
                  </CustomPoint>
               </div>
            </div>
         ),
      },
      {
         dot: (
            <div className=" w-[15px] h-[15px] rounded-full bg-gray-200 flex justify-center items-center flex-shrink-0">
               <div className=" w-[15px] h-[15px] bg-themeOrange rounded-full animate-ping"></div>
            </div>
         ),
         children: (
            <div className=" pr-[1rem]">
               <div className=" flex justify-between items-center">
                  <div className=" text-themeOrange text-[1.1rem]">
                     SDE{" "}
                     <span className=" text-[0.9rem] text-gray-300">@Tikanga pvt ltd, Mangalore</span>
                  </div>
                  <div className=" text-gray-300">Dec 2024 - Present</div>
               </div>
               <div className=" flex flex-col gap-[10px] mt-3">
                  <CustomPoint>
                     <div>
                        Directly collaborated with clients to understand project requirements and
                        deliver optimized solutions.
                     </div>
                  </CustomPoint>
                  <CustomPoint>
                     <div>
                        Collaborated in frontend development for a Debate Management Application,
                        taking full responsibility for the User Dashboard.
                     </div>
                  </CustomPoint>
                  <CustomPoint>
                     <div>
                        Used Next.js, Tailwind CSS, and Ant Design to implement a fully responsive
                        and scalable UI.
                     </div>
                  </CustomPoint>
                  <CustomPoint>
                     <div>
                        Developed a seamless and efficient frontend experience, ensuring high
                        performance and user satisfaction
                     </div>
                  </CustomPoint>
               </div>
            </div>
         ),
      },
   ];
   return (
      <div className=" lg:max-w-[78rem] mx-auto w-full min-h-[30rem] py-[10rem] pb-[3rem] border- flex justify-between items-start">
         <div className=" border- w-full lg:w-[90%] ">
            <div className=" text-[1.4rem] text-gray-300 font-semibold">WORK EXPERIENCE</div>
            <div className=" text-[2.3rem] text-themeOrange font-[500]">The Road So Far</div>
         </div>
         <div className=" w-full border- ">
            <ConfigProvider
               theme={{
                  components: {
                     Timeline: {
                        dotBg: "transparent",
                        tailColor: "white",
                     },
                  },
               }}
            >
               <Timeline mode="left" items={items} />
            </ConfigProvider>
         </div>
      </div>
   );
}

const CustomPoint = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className=" flex justify-start items-start text-[#b9b9b9] max-w-[38rem] gap-1 text-[1rem] text-left">
         <GoDotFill size={16} className=" flex-shrink-0 mt-2" />
         {children}
      </div>
   );
};

const Highlight = ({ text }: { text: String }) => {
   return <span className=" font-[500] text-[#e0e0e0]">{text}</span>;
};
