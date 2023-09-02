import React from "react";
import walacy from "../asset/image/walacy.png";
import CarClub from "../asset/image/CarClub.png";
import mywebsitepicture from "../asset/image/mywebsitepicture.png";
const Portfolio = () => {
  const project = [
    {
      id: 1,
      name: "Wallacy",
      image: walacy,
      description:
        "I worked with team of 5 people to create an crypto trading application using React Native. The app was released on App Store and CH play in June 2023",
      tool1: "React Native",
      tool2: "Websocket",
      tool3: "TypeScript",
      link:"https://wallacy.io/download/"
    },
    {
      id: 2,
      name: "Australia Muscle Car Club",
      image: CarClub,
      description:
        "I created a report to provide solutions and recommendations for client to help them transform their manual system to automatic system",
      tool1: "Business Analysis",
      link:"Car-System-Report.pdf"
    },
    {
      id: 3,
      name: "My Web Portfolio",
      image: mywebsitepicture,
      description: "This is my portfolio web site using ReactJS and Tailwind",
      tool1: "React JS",
      tool2: "Motion",
      tool3: "Tailwind",
      link:"/"
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
            Portfolio
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

      <div className=" flex-col items-center justify-items-center pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-32  ">
        {project.map((item) => {
          return (
            <div
              key={item.id}
              class="max-w-sm rounded overflow-hidden shadow-lg mb-10 hover11 h-129 column hover:scale-110 duration-200 cursor-pointer"
            >
                <a href={item.link}>
                <figure>
                <img
                  class="w-full h-56"
                  src={item.image}
                  alt="Sunset in the mountains"
                />
              </figure>

              <div class="px-6 py-4 h-40">
                <div class="font-semibold text-xl mb-2 text-center">{item.name}</div>
                <p class="text-gray-500 text-base">{item.description}</p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {item.tool1}
                </span>
                {item.tool2 ? (
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {item?.tool2}
                  </span>
                ) : null}
                {item.tool3 ? (
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {item?.tool3}
                  </span>
                ) : null}
              </div>
                </a>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
