import React from "react";
import { GrLinkedin, GrGithub, GrFacebook } from "react-icons/gr";
import styles from "../mystyle.module.css";
const Footer = () => {
  const icons = [
    {
      id: 1,
      icon: <GrGithub size={25} />,
      href: "https://github.com/timmyng3800",
    },
    {
      id: 2,
      icon: <GrLinkedin size={25} />,
      href: "https://www.linkedin.com/in/timmynguyen38/",
    },
    {
      id: 3,
      icon: <GrFacebook size={25} />,
      href: "https://www.facebook.com/quanganhhh38/",
    },
  ];
  return (
    <div>
      <div
        style={{
          flex: 1,
          height: "1px",
          backgroundColor: "grey",
          opacity: 0.3,
          width: "100%",
        }}
      />
      <div className="mt-10">
        <div
          className={`flex flex-col items-center justify-items-center pb-16 content-center `}
        >
          <div className="mb-6 ">
            <a href="Timmy-Nguyen-Resume.pdf">
              <button class=" flex-col self-center flex items-center justify-items-center w-40 h-14 content-center px-4 py-3 border border-black hover:bg-gray-200 text-black text-base font-medium rounded-md w ">
                My Resume
              </button>
            </a>
          </div>
          <p className="w-96 self-center text-lg items-center justify-items-center md:w-131">
            I'm currently looking for new opportunities. Feel free to contact
            me!
          </p>
          <div className="py-10">
            <ul className="flex flex-row">
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
          <div className="text-sm text-gray-400">
            © Timmy Nguyen. All rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
