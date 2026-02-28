"use client";
import React, { useEffect, useRef, useState } from "react";
import { ConfigProvider, Steps, Timeline } from "antd";
import { CiClock1 } from "react-icons/ci";
import img1 from "../../../assets/images/rank9.jpeg";
import img2 from "../../../assets/images/webFirst.jpeg";
import Image, { StaticImageData } from "next/image";
import useGeneralContext from "../hooks/UseGeneralContext";

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
      imageURL: img2,
    },
  ];

  //-------Related to observer------------
  const ref = useRef<HTMLDivElement | null>(null);
  const { ObserveElement } = useGeneralContext();
  useEffect(() => {
    if (!ref.current) return;
    ObserveElement(ref.current);
  }, []);

  return (
    <div
      id="achievements"
      ref={ref}
      className=" px-4 md:px-8 afterIpad:max-w-[78rem] mx-auto afterIpad:px-0 lg:py-16"
    >
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
      <div className=" flex max-md:flex-col justify-center gap-10 mt-10 items-center">
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
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className=" w-[21rem] md:w-[30rem] h-[15rem] bg-white/10 rounded-lg relative overflow-hidden"
    >
      <div className=" absolute left-0 z-[5] bg-gradient-to-t w-full h-full from-gray-900  border-   "></div>
      <div className=" w-full h-full z-2 relative">
        <Image
          src={imageURL}
          alt={title}
          className={` ${isHover ? " scale-[1.1] " : " scale-[1] "} transition-all duration-500 w-full h-full object-cover`}
          fill
        />
      </div>
      {/* Title and Subtitle  */}
      <div className=" absolute z-[6] w-full bottom-0 left-0 text-center p-3 z-3">
        {/* Title  */}
        <div className=" relative z-1">
          <div className=" text-themeOrange text-xl font-semibold ">
            {title}
          </div>
          <div className=" text-gray-200"> {subtitle}</div>
        </div>
      </div>
    </div>
  );
};
