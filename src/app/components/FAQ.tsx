"use client";

import React, { useEffect, useRef } from "react";
import { Collapse, ConfigProvider, theme } from "antd";
import useGeneralContext from "../hooks/UseGeneralContext";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const faqData = [
  {
    key: "1",
    question: "What is your primary tech stack?",
    answer:
      "I specialize in the Next.js ecosystem. My core stack includes TypeScript, React, Tailwind CSS, and Ant Design for the frontend, with Node.js and MongoDB for backend requirements.",
  },
  {
    key: "2",
    question: "Which languages can you communicate in?",
    answer:
      "I am multilingual and can comfortably collaborate in English, Kannada, Hindi, and Tamil. This helps me work effectively in diverse team environments.",
  },
  {
    key: "3",
    question: "Are you available for full-time opportunities?",
    answer:
      "Yes, I am currently working as a Software Development Engineer (Frontend) but am always open to discussing impactful full-time roles or innovative projects.",
  },
  {
    key: "4",
    question: "Do you have experience with performance optimization?",
    answer:
      "Absolutely. In my recent role at Tikanga, I improved tree-view search performance by ~70% using component isolation, useMemo, and lodash debounce.",
  },
  {
    key: "5",
    question: "Can you handle both UI design and Backend integration?",
    answer:
      "While my focus is Frontend, I have a strong grasp of the MERN stack. I've integrated Razorpay gateways, Firebase storage, and JWT-based authentication in several projects.",
  },
];

const FAQ = () => {
  //-------Related to observer------------
  const ref = useRef<HTMLDivElement | null>(null);
  const { ObserveElement } = useGeneralContext();
  useEffect(() => {
    if (!ref.current) return;
    ObserveElement(ref.current);
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#ff5400",
          colorBgContainer: "#141313",
        },
      }}
    >
      <section id="faq" ref={ref} className="bg-[#0a0909] max-md:mt-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 afterIpad:max-w-[78rem] afterIpad:px-0 lg:py-16">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Common <span className="text-[#ff5400]">Questions</span>
            </h2>
            <div className="h-1 w-20 bg-[#ff5400]"></div>
          </div>

          <Collapse
            accordion
            ghost
            expandIconPosition="end"
            expandIcon={({ isActive }) =>
              isActive ? (
                <MinusOutlined className="text-[#ff5400]" />
              ) : (
                <PlusOutlined />
              )
            }
            className="border-none"
          >
            {faqData.map((item) => (
              <Panel
                header={
                  <span className="text-lg font-medium text-[#e5e7eb] hover:text-[#ff5400] transition-colors">
                    {item.question}
                  </span>
                }
                key={item.key}
                className="mb-4 border-b border-zinc-800 pb-2"
              >
                <p className="text-zinc-400 leading-relaxed text-base pl-1">
                  {item.answer}
                </p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default FAQ;
