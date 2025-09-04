import React from "react";
import { ConfigProvider, Steps, Timeline } from "antd";
import { CiClock1 } from "react-icons/ci";

export default function Education() {
  return (
    <div className=" px-4 md:px-8 afterIpad:max-w-[78rem] mx-auto afterIpad:px-0 lg:py-16">
      {/* Title  */}
      <div className=" border- w-full text-center md:text-left ipadMini-To-ipadAir:w-[57%] lg:w-[90%] ">
        <div className=" text-[1.4rem] text-gray-300 font-semibold uppercase">
          Education
        </div>
        <div className=" text-[2.3rem] text-themeOrange font-[500]">
          The Road So Far
        </div>
      </div>

      {/* Timeline  */}
      <div className=" !text-themeOrange mt-14 ">
        <ConfigProvider
          theme={{
            components: {
              Steps: {
                navArrowColor: "gray",
              },
            },
          }}
        >
          <Steps
            progressDot
            current={1}
            items={[
              {
                title: "Finished",
                description: "This is a description.",
                status:'wait'
              },
              {
                title: "In Progress",
                description: "This is a description.",
              },
              {
                title: "Waiting",
                description: "This is a description.",
              },
            ]}
            direction="horizontal"
          />
        </ConfigProvider>
      </div>
    </div>
  );
}
