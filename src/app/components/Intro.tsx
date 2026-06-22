"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import pic from "../../../assets/images/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import useGeneralContext from "../hooks/UseGeneralContext";

export default function Intro() {
  const [showBg, setShowBg] = useState<boolean>(false);

  const handleResume = () => {
    const a = document.createElement("a");
    a.href = "https://drive.google.com/file/d/1MY3QXdc8wpC_2YOTZ7pCagRliIQsJT1L/view?usp=sharing";
    a.download = "Resume.pdf";
    a.target = "_blank";
    a.click();
  };

  const ref = useRef<HTMLDivElement | null>(null);
  const { ObserveElement } = useGeneralContext();
  
  useEffect(() => {
    if (!ref.current) return;
    ObserveElement(ref.current);
  }, [ObserveElement]);

  return (
    <div
      ref={ref}
      id="home"
      className="h-[100vh] w-full bg-background overflow-hidden relative backdrop-blur-sm"
    >
      {/* 1. Content Wrapper: Kept your exact max-widths and positioning */}
      <div className="max-md:pt-20 border- w-full relative mx-auto flex justify-between items-center h-full max-w-[23rem] ipad-air-portrait:max-w-[42rem] lg:max-w-[78rem]">
        
        {/* Left side intro lines */}
        <div className="h-full w-fit px-[1rem] ipad-air-portrait:max-w-[57%] lg:px-[5rem] flex flex-col justify-center items-start z-[4] relative lg:backdrop-blur-0 border-">
          {/* Added 'drop-shadow-md' to mobile text for visibility without changing font sizes */}
          <div className="border- drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] md:drop-shadow-none">
            <div className="text-[2.1rem] text-gray-200">
              I' AM{" "}
              <span className="text-[3.2rem] text-themeOrange font-bold">SHREERAM</span>
            </div>
            <div className="text-[2.3rem] text-gray-300 max-md:text-gray-100">
              A creator of{" "}
              <span className="text-gray-100">Digital Magic!</span>{" "}
            </div>
          </div>

          <div
            className="w-[10rem] h-[2.6rem] border-2 overflow-hidden border-themeOrange rounded-[6px] flex justify-center items-center text-gray-100 mt-[4rem] text-[1.3rem] cursor-pointer relative"
            onMouseOver={() => setShowBg(true)}
            onMouseLeave={() => setShowBg(false)}
            onClick={handleResume}
          >
            <div className="z-[1]">View Resume</div>
            <div
              className={`w-[11rem] h-full absolute ${
                showBg ? "left-0" : "left-[-11rem]"
              } transition-all duration-500 rounded-r-[7px] bg-themeOrange z-[0]`}
            ></div>
          </div>
        </div>

        {/* Profile Image: Kept your exact absolute/relative logic */}
        <div className="h-full w-fit border- flex justify-center items-start scale-[0.8] md:scale-[1] md:items-center absolute right-5 top-2 md:relative z-[5]">
          <div className="w-[240px] h-[240px] rounded-full flex justify-center items-center">
            <div className="w-[200px] h-[200px] overflow-hidden rounded-full border-">
              <Image
                src={pic}
                alt="my Picture"
                className="w-full h-full object-cover scale-[1.4] relative left-[0rem] top-[24px]"
              />
            </div>
            <div className="w-[240px] h-[240px] border-b-2 border-t-2 border-themeOrange animate-[spin_2s_linear_infinite] rounded-full flex justify-center items-center absolute"></div>
          </div>
        </div>
      </div>

      {/* Video Background */}
      <div className="w-full h-full absolute inset-0 z-[1]">
        <video
          src="https://videos.pexels.com/video-files/11244983/11244983-hd_1920_1080_24fps.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          playsInline
          muted
        />
      </div>

      {/* Extra black layer: Added 'bg-black/50' for mobile visibility, 'lg:opacity-[0.3]' for laptop */}
      <div className="w-full h-full absolute inset-0 z-[3] bg-black/50 lg:bg-black lg:opacity-[0.3] backdrop-blur-[1px] lg:backdrop-blur-sm"></div>

      {/* Github and other links: Kept your exact positioning */}
      <div className="z-[4] h-fit w-full border- absolute bottom-[5rem] flex justify-start items-center px-[2rem] md:px-[20rem] gap-5 text-gray-300">
        <a target="_blank" href="https://github.com/ShreeramNew">
          <FaGithub size={30} className="drop-shadow-lg" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/shreeram-630102262/">
          <FaLinkedin size={30} className="drop-shadow-lg" />
        </a>
        <a target="_blank" href="mailto:shreerambca1@gmail.com">
          <MdOutlineEmail size={35} className="drop-shadow-lg" />
        </a>
      </div>

      {/* Extra inner shadow: Kept original */}
      <div className="z-[4] h-[5rem] w-full border- absolute bottom-[0rem] flex justify-start items-center px-[2rem] md:px-[20rem] gap-5 text-gray-300">
        <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
    </div>
  );
}