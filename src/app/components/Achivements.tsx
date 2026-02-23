import React from "react";
import { ConfigProvider, Steps, Timeline } from "antd";
import { CiClock1 } from "react-icons/ci";
import img1 from "../../../assets/images/rank9.jpeg";
import img2 from "../../../assets/images/webFirst.jpeg";
import { StaticImageData } from "next/image";

type AchievementsType = {
  title: string;
  subtitle: string;
  imageURL: StaticImageData;
};

export default function Achievements() {
  const AchievementsData: AchievementsType[] = [
    {
      title: "University Rank 9",
      subtitle: "BCA | CGPA 9.71 | Mangalore University",
      imageURL: img1,
    },
    {
      title: "1st Place – Web Designing",
      subtitle: "State-Level IT Fest 2023 | St. Philomena College, Puttur",
      imageURL: img1,
    },
  ];

  return (
    <div className=" px-4 md:px-8 afterIpad:max-w-[78rem] mx-auto afterIpad:px-0 lg:py-16">
      {/* Title  */}
      <div className=" border- w-full text-center md:text-left ipadMini-To-ipadAir:w-[57%] lg:w-[90%] ">
        <div className=" text-[1.4rem] text-gray-300 font-semibold uppercase">
          ACHIEVEMENTS
        </div>
        <div className=" text-[2.3rem] text-themeOrange font-[500]">
          Moments That Mattered
        </div>
      </div>

      {/* Cards  */}
      <div className=" flex justify-evenly items-center">
        {AchievementsData.map(({ title, imageURL, subtitle }) => (
          <AchieveCard
            key={title}
            title={title}
            imageURL={imageURL}
            subtitle={subtitle}
          />
        ))}
      </div>
    </div>
  );
}

const AchieveCard = ({ title, imageURL, subtitle }: AchievementsType) => {
  return <div className=" w-[10rem] h-[10rem] bg-white rounded-lg"></div>;
};
