import React from "react";
import styles from "../mystyle.module.css";
import { CiMail } from "react-icons/ci";
import GmailIcon from "../asset/svg/gmailIcon";
import FunnyIcon from "../asset/svg/funny";
const Contact = () => {
  return (
    <div name="contactme">
      <div className=" flex flex-row items-center">
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
            Contact Me
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

      <div className="justify-items-center content-center items-center w-full h-full justify-evenly flex flex-col pt-10 pb-10 md:flex-row mx-auto mb-10">
        <div className="w-96 mb-10 md:w-1/3 ">
          <div className="text-5xl">
            <h1 className={styles.about}>Let's chat.</h1>
            <h1 className={styles.about}>Tell me about your thought</h1>
          </div>
          <div className="py-10 text-xl font-light">
            <h1>Let's create something together</h1>
          </div>
          <div>
            <a
              className="flex flex-row border-gray-100 border-2 hover:bg-slate-100 cursor-pointer px-5 py-3 rounded-lg"
              href="mailto: quanganh.timmyng@gmail.com"
            >
              <GmailIcon />

              <div className="px-5">
                <p>Mail me at</p>
                <p>quanganh.timmyng@gmail.com</p>
              </div>
            </a>
          </div>
        </div>

        <div
          className=" px-5 py-5 flex w-96 flex-col md:w-1/3 border-gray-100 rounded-md"
          style={{ borderWidth: 3 }}
        >
          <div className="flex flex-col md:flex-row mb-7">
            <h1 className="font-medium text-2xl  pr-5">Send me your message</h1>
            <FunnyIcon />
          </div>
          <input
            className="placeholder-gray-500 placeholder-opacity-50 focus:placeholder-gray-500 bg-purple-50 py-2 mb-5 px-3 border rounded-md px"
            placeholder="Full Name*"
            required
          />

          <input
            className="placeholder-gray-500 placeholder-opacity-50 focus:placeholder-gray-500 bg-purple-50 py-2 mb-5 px-3 border rounded-md px"
            placeholder="Email*"
          />

          <input
            className="placeholder-gray-500 placeholder-opacity-50 focus:placeholder-gray-500 bg-purple-50 py-2 mb-5 px-3 border rounded-md px"
            placeholder="Subject"
          />

          <input
            className="placeholder-gray-500 placeholder-opacity-50 focus:placeholder-gray-500 bg-purple-50 py-14 mb-5 px-3 border rounded-md"
            placeholder="Type your message here"
            id="placeholder"
          />

          <button class=" flex-col self-center flex items-center justify-items-center  px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium rounded-md w-1/2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
