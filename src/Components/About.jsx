import React from "react";
import styles from "../mystyle.module.css";
import aboutimage from "../asset/image/aboutimage.jpg";
import Typed from "react-typed";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" style={{ paddingTop: 100 }} className="w-full">
      <div className="flex flex-col mx-auto items-center justify-center   h-full max-w-screen-lg px-3 md:flex-row">
        <div className="flex flex-col justify-center h-full pr-14 pb-12">
          <Typed
            strings={["About Me"]}
            typeSpeed={100}
            className={styles.about}
            style={{ fontSize: 70, paddingTop: 40 }}
            showCursor={false}
          />
          <p className={styles.title} style={{ marginBottom: 20 }}>
            I'm a Front End developer based in sunny Melbourne, Australia.
          </p>
          <p className="text-gray-500">
           I've enjoyed turning complex problems into simple,
            beautiful and intuitive designs. When I'm not pushing pixels, you'll
            find me cooking, gardening or working out in the park.
          </p>
        </div>
        <div>
          <motion.div
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={aboutimage}
              alt="myImage"
              className="rounded-2xl w-2/3 justify-center mx-auto md:w-full "
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
