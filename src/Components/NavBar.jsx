import React, { useState } from "react";
import styles from "../mystyle.module.css";
import { SiGmail } from "react-icons/si";
import { GrFacebook, GrLinkedin } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";

const NavBar = () => {
  const link = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "My Experiences",
    },
    {
      id: 3,
      name: "Contact",
    },
  ];
  const icons = [
    {
      id: 1,
      icon: <GrLinkedin size={20} />,
    },
    {
      id: 2,
      icon: <GrFacebook size={20} />,
    },
    {
      id: 3,
      icon: <SiGmail size={20} />,
    },
  ];

  const [navBar, setNavBar] = useState(false);

  return (
    <div className="flex justify-around items-center w-full h-20 text-white bg-black fixed">
      <div>
        <h1 className={styles.icon}>Timmy's Portfolio</h1>
      </div>
      <div>
        <ul className=" hidden md:flex">
          {link.map((item) => {
            return (
              <li
                key={item.id}
                className="px-5 cursor-pointer  hover:scale-125 duration-200"
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul className=" hidden md:flex">
          {icons.map((item) => {
            return (
              <li
                className="px-5 cursor-pointer  hover:scale-125 duration-200"
                key={item.id}
              >
                {item.icon}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        onClick={() => setNavBar(!navBar)}
        className="flex cursor-pointer hover:scale-125 duration-200 z-10 text-gray-400 md:hidden"
      >
        {navBar ? (
          <IoIosCloseCircleOutline color="white" size={23} />
        ) : (
          <FiMenu color="white" size={23} />
        )}
      </div>
      {navBar && (
        <ul className="flex flex-col justify-center items-center absolute top-0 h-screen left-0 w-full mt-2 bg-gradient-to-b from-black to-gray-700 md:hidden">
          {link.map((item) => {
            return (
              <li
                key={item.id}
                className="cursor-pointer hover:scale-125 py-4 text-3xl duration-150"
              >
                {item.name}
              </li>
            );
          })}
          <div className="flex-row flex mt-7">
            {icons.map((item) => {
              return (
                <li
                  className="px-5 cursor-pointer hover:scale-125 duration-200"
                  key={item.id}
                >
                  {item.icon}
                </li>
              );
            })}
          </div>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
