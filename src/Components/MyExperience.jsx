import React from "react";
import { BiLogoCPlusPlus } from "react-icons/bi";

import HTML from "../asset/svg/HTML";
import CSS from "../asset/svg/CSS";
import JavaScript from "../asset/svg/Javascript";
import ReactJS from "../asset/svg/ReactJ";
import ReactNative from "../asset/svg/ReactNative";
import TypeScriptIcon from "../asset/svg/Typescript";
import TailwinCssIcon from "../asset/svg/TailwinCssIcon";
import BootstrapIcon from "../asset/svg/BootstrapIcon";

const MyExperience = () => {
  const icons = [
    {
      id: 1,
      icon: <ReactJS />,
      title: "ReactJs",
    },
    {
      id: 2,
      icon: <ReactNative />,
      title: "React Native",
    },
    {
      id: 3,
      icon: <HTML />,
      title: "HTML",
    },
    {
      id: 4,
      icon: <CSS />,
      title: "CSS",
    },
    {
      id: 5,
      icon: <JavaScript />,
      title: "Javascript",
    },
    {
      id: 6,
      icon: <BiLogoCPlusPlus size={50} />,
      title: "C",
    },
    {
      id: 7,
      icon: <TypeScriptIcon size={32} />,
      title: "TypeScripts",
    },
    {
      id: 8,
      icon: <TailwinCssIcon size={32} />,
      title: "Tailwind",
    },
    {
      id: 9,
      icon: <BootstrapIcon size={32} />,
      title: "Bootstrap",
    },

  ];

  const experiences = [
    {
      id: 1,
      jobTitle: "React Native Developer",
      time: "11/2022-06/2023",
      company: "Tokyo Tech Lab",
      jd: "I worked with team of 5 developers to create a crypto trading application named Wallacy. I was responsible for developing and maintaining React Native components, screens and features.",
    },
    {
      id: 2,
      jobTitle: "IT Analyst",
      time: "02/2022-06/2022",
      company: "Australian Muscle Car Club of South Australia Corporation",
      jd: "I identified client pain points in their current IT manual system and business constraints. Moreover, I provided solutions and recommendations for client on transforming from paper-based system to an automation system.",
    },
    {
      id: 3,
      jobTitle: "Content Analyst",
      time: "12/2020-02/2021",
      company: "Gear Inc. - Game Development",
      jd: "I reviewed user-generated content including text, images, video to remove inappropriate, offensive, and harmful content before it reaches online users. In addition, I recorded data from photos and ingested into the databases. ",
    },
  ];

  return (
    <div id="experiences">
      <div className=" flex flex-row items-center pt-28">
        <div
          style={{
            flex: 1,
            height: "1px",
            backgroundColor: "grey",
            opacity: 0.3,
          }}
        />

        <div className="mx-6">
          <p className="text-4xl" style={{ textAlign: "center" }}>
            My Experiences
          </p>
        </div>

        <div
          style={{
            flex: 1,
            height: "1px",
            backgroundColor: "grey",
            opacity: 0.3,
          }}
        />
      </div>

      <div className="flex flex-col h-full md:flex-row mx-auto w-full justify-items-center divide-gray-300 divide-x py-20 lg:px-32">
        <div className="grid grid-cols-2 gap-4 justify-items-center  md:grid-cols-3 lg:grid-cols-4 w-full sm:w-full md:w-1/2 mb-10  ">
          {icons.map((item) => {
            return (
              <div key={item.id} className="items-center flex flex-col mb-10 hover:scale-110 duration-200">
                {item.icon}
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
        <div className="w-full md:w-1/2">
          {experiences.map((item) => {
            return (
              <div key={item.id} className="mx-12 pb-10">
                <div className="flex flex-row justify-between">
                  <p className="text-xl w-1/2 font-medium">{item.jobTitle}</p>
                  <p className="text-sm font-normal py-1 ">{item.time}</p>
                </div>
                <p className="text-base">{item.company}</p>
                <p className="text-gray-500">{item.jd}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
