import React, { useRef, useState } from "react";
import styles from "../mystyle.module.css";
import PhoneCallIcon from "../asset/svg/phonecallIcon";
import emailjs from "@emailjs/browser";
import { Alert } from "@mui/material";
import GmailIcon from "../asset/svg/gmailIcon"
import whatsapp from "../asset/dynamic picture/whatsapp.json"
import Lottie from "lottie-react";
import gmail from "../asset/dynamic picture/gmail.json"
const Contact = () => {
  const [emailsent, setEmailsent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tiox6nd",
        "template_iwphvro",
        form.current,
        "558_EAEFKngO4Op3d"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailsent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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

      <div className="justify-items-center content-center items-center w-full h-full justify-evenly flex flex-col pt-10 pb-10 md:flex-row mb-10 md:px-12">
        <div className="w-96 mb-10 md:w-1/2  ">
          <div className="md:w-90 xl:ml-36 lg:ml-9 lg:w-128">
            <div className="text-4xl">
              <h1 className={styles.about}>Let's chat. Tell me about your thought</h1>
            </div>
            <div className="py-10 text-xl font-light">
              <h1>Let's create something together</h1>
            </div>
            <div>
              <a
                className="flex flex-row border-gray-100 border-2 hover:bg-slate-100 cursor-pointer px-5 py-3 rounded-lg mb-5 "
                href="mailto: quanganh.timmyng@gmail.com"
              >
              <GmailIcon/>

                <div className="px-5">
                  <p>Mail me at</p>
                  <p>quanganh.timmyng@gmail.com</p>
                </div>
              </a>
            </div>
            <div>
              <div
                className="flex flex-row border-gray-100 border-2 hover:bg-slate-100 cursor-pointer px-5 py-3 rounded-lg "
                href="tel:+61448128541"
              >
                <Lottie animationData={whatsapp}/>

                <div className="px-5">
                  <p>Call me via</p>
                  <p>(+61) 448 128 541</p>
                </div>
              </div>
            </div>
         
          </div>
        </div>
        <div className="md:w-1/2">
          <form ref={form} onSubmit={sendEmail}>
            <div
              className=" px-5 py-5 flex w-96 flex-col border-gray-100 rounded-md md:w-90 lg:w-96 xl:w-129 md:ml-11"
              style={{ borderWidth: 3 }}
            >
              <div className="flex flex-col md:flex-row mb-7">
                <h1 className="font-medium text-2xl  pr-5">
                  Send me your message
                </h1>
              </div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your name
              </label>
              <input
                className="placeholder-gray-500 placeholder-opacity-50 focus:placeholder-gray-500 bg-purple-50 focus:bg-white focus:outline-none py-2 mb-5 px-3 border rounded-md text-sm"
                placeholder="Full Name*"
                required
                name="user_name"
              />

              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                required
                className="placeholder-gray-500 placeholder-opacity-50 focus:placeholder-gray-500 focus:bg-white focus:outline-none bg-purple-50 py-2 mb-5 px-3 border rounded-md text-sm "
                placeholder="Email*"
                name="user_email"
              />

              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                placeholder="Subject name"
                className="placeholder-gray-500 placeholder-opacity-50 focus:placeholder-gray-500 focus:bg-white focus:outline-none bg-purple-50 py-2 mb-5 px-3 border rounded-md text-sm  "
              />

              <label
                for="messages"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your message
              </label>
              <div class="sm:col-span-2">
                <textarea
                  rows="6"
                  class="block p-2.5 w-full text-sm placeholder-opacity-50 placeholder-gray-500 focus:bg-white focus:outline-none focus:placeholder-gray-500 bg-purple-50 py-2 mb-5 px-3 border rounded-md"
                  placeholder="Leave a comment..."
                  name="message"
                ></textarea>
              </div>
              {emailsent ? (
                <div>
                  <Alert severity="success">Message sent</Alert>
                </div>
              ) : (
                <button
                  type="submit"
                  class=" flex-col self-center flex items-center justify-items-center  px-4 py-2 bg-black hover:bg-gray-700 text-white text-sm font-medium rounded-md w-1/2"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
