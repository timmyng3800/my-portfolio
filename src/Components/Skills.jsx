import React from "react";
import { ImMobile } from "react-icons/im";
import { FaTools } from "react-icons/fa";
import {HiOutlineDesktopComputer} from "react-icons/hi"

const Skills = () => {
  const skills = [
    {
      id: 1,
      icon: <HiOutlineDesktopComputer size={40} />,
      title: "Web developement",
      content:
        "HTML/CSS, ReactJs, TypeScript, JavaScript Animation, Responsive Website.",
    },
    {
      id: 2,
      icon: <ImMobile size={40} />,
      title: "Mobile developement",
      content: "React Native, Expo, Redux, MobX, React Hook, Websocket, RESTapi",
    },
    {
      id: 3,
      icon: <FaTools size={35} />,
      title: "Tools",
      content: "Version control, Postman, ReactoTron, Agile",
    },
  ];
  return (
    <div id="skills">
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
            Skills
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
      <div className="grid justify-items-center content-center justify-center items-center pt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:px-32 ">
        {skills.map((item) => {
          return (
            <div
              key={item.id}
              className="grid justify-items-center items-center py-3"
            >
              {item.icon}
              <h2 className="text-lg my-1">{item.title}</h2>
              <p className="text-sm text-gray-500 px-10 text-center">
                {item.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
