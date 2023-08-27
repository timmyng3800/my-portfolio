import React, { useState } from "react";
import styles from "../mystyle.module.css";
import { SiGmail } from "react-icons/si";
import { GrFacebook, GrLinkedin, GrGithub } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-scroll";

const NavBar = () => {
  const link = [
    {
      id: 1,
      name: "About",
      to: "about",
    },
    {
      id: 2,
      name: "Skills",
      to: "skills",
    },
    {
      id: 3,
      name: "Experiences",
      to: "experiences",
    },
    {
      id: 4,
      name: "Contact Me",
      to: "contactme",
    },
  ];
  const icons = [
    {
      id: 1,
      icon: <GrGithub size={20} />,
      href: "https://github.com/timmyng3800",
    },
    {
      id: 2,
      icon: <GrLinkedin size={20} />,
      href: "https://www.linkedin.com/in/timmynguyen38/",
    },
    {
      id: 3,
      icon: <GrFacebook size={20} />,
      href: "https://www.facebook.com/quanganhhh38/",
    },
  ];

  const [navBar, setNavBar] = useState(false);


  return (
    <div className="flex justify-around items-center w-full h-20 text-white bg-black fixed">
      <div className="cursor-pointer">
        <a href="/">
          <h1 className={styles.icon}>Timmy's Portfolio</h1>
        </a>
      </div>
      <div>
        <ul className="hidden md:flex">
          {link.map((item) => {
            return (
              <li
                key={item.id}
                className="px-5 cursor-pointer  hover:scale-125 duration-200"
              >
                <Link to={item.to} spy={true} smooth={true} duration={500}>
                  {item.name}
                </Link>
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
                <a href={item.href}>{item.icon}</a>
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
                <Link   onClick={()=>setNavBar(!navBar)} to={item.to} spy={true} smooth={true} duration={500}>
                  {item.name}
                </Link>
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
                  <a href={item.href}>{item.icon}</a>
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
