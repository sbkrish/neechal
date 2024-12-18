import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../Wrapper";

import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge ">
          <div className="badge-cmp app__flex mt-0 md:mt-8 text-lg mb-2 md:mb-10 ">
            <div>
              <p className="flex items-center justify-center font-semibold gap-2 rounded-full bg-purple-100 px-2.5 py-1 text-sm md:text-md text-purple-700">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 -32 576 576"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  transform="matrix(-1, 0, 0, 1, 0, 0)"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#7e22ce"
                      d="M353.702 166.933C336.861 149.156 319.311 133.689 301.052 120.533C282.793 107.378 265.687 97.5111 249.732 90.9333C233.778 84.3555 219.153 81.2 205.858 81.4666C192.562 81.7333 182.192 85.8666 174.746 93.8666C172.974 95.6444 171.467 97.6444 170.226 99.8666C168.985 102.089 168.099 103.822 167.567 105.067C167.035 106.311 166.326 108.533 165.44 111.733C164.553 114.933 163.933 116.978 163.578 117.867L64.661 444.267L70.7768 450.667C63.8633 455.467 57.7031 461.067 52.2963 467.467C46.8895 473.867 42.1475 479.111 38.0703 483.2C33.993 487.289 29.1181 490.133 23.4454 491.733C22.2045 492.089 20.6534 493.289 18.792 495.333C16.9307 497.378 16 499.2 16 500.8C16 504 17.5954 506.667 20.7863 508.8C23.9772 510.933 27.5226 512 31.4226 512C36.3862 512 41.1725 510 45.7816 506C50.3906 502 55.044 496.889 59.7417 490.667C64.4394 484.444 67.8519 480.356 69.9791 478.4C74.5882 474.311 79.729 470.4 85.4017 466.667L92.3153 473.333L406.617 366.4C413.531 364.267 418.849 361.067 422.572 356.8C430.017 348.8 433.873 337.733 434.139 323.6C434.405 309.467 431.435 293.911 425.231 276.933C419.026 259.956 409.764 241.822 397.443 222.533C385.123 203.244 370.543 184.711 353.702 166.933ZM324.984 196C352.106 223.733 372.714 250.267 386.807 275.6C400.9 300.933 404.313 317.6 397.045 325.6C389.776 333.6 373.911 330.667 349.447 316.8C324.984 302.933 299.28 282.222 272.334 254.667C245.035 226.933 224.338 200.444 210.245 175.2C196.152 149.956 192.739 133.244 200.008 125.067C207.276 117.067 223.186 120 247.738 133.867C272.29 147.733 298.039 168.444 324.984 196ZM310.093 0L323.388 40.2666L289.086 65.3333H331.366L344.395 105.6L357.424 65.3333H399.438L365.402 40.2666L378.697 0.266632L344.395 25.0667L310.093 0ZM235.639 0L228.46 36.5333L264.889 43.7333L272.068 7.19998L235.639 0ZM475.221 109.867L504.471 79.2L542.496 97.8666L522.819 60.5333L552.334 30.4L510.587 37.6L490.91 0L485.06 42.1333L443.312 49.3333L481.337 67.7333L475.221 109.867ZM465.383 175.467L500.748 198.933L489.58 240L522.553 213.333L557.652 236.8L543.028 196.8L576 170.667L533.721 172.533L518.83 132.8L507.928 173.6L465.383 175.467ZM450.226 76.5333L370.986 141.6L380.824 153.6L460.065 88.5333L450.226 76.5333ZM477.88 202.4L415.924 196.8L414.329 212.267L476.551 217.867L477.88 202.4ZM483.996 277.067L472.562 312.8L507.928 324.267L519.628 288.8L483.996 277.067Z"
                    ></path>
                  </g>
                </svg>
                New Batch Announcement
              </p>

              <p className="text-gray-800 mt-4 text-center text-2xl md:text-3xl font-extrabold">
                Join our 30-day live C programming session!
              </p>
              <p className="mt-2 text-gray-600 text-center text-sm md:text-base">
              Completely free for eligible students in India and Sri Lanka!
              </p>

              <div className="text-gray-800 mt-4 text-center p-3 rounded border">
                <p>First batch starts</p>
                <p className="font-semibold text-blue-800">15-DEC-2024</p>
              </div>

              <div className="flex mt-4 gap-x-3 text-xs md:text-sm justify-center text-gray-600">
                <p>Seats: 100</p>
                <p>Language: Tamil</p>
                <p>Mode: Online</p>
              </div>

              <div className="grid mt-6">
                <a
                  href="#register"
                  className="py-3 px-4 text-md sm:text-base font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none text-center"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile.png" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.c, images.javascript, images.react, images.redux].map(
          (circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" loading="lazy"/>
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
