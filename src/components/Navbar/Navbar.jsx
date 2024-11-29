import React, { useEffect, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion"; 

import { images } from "../../constants";
import "./Navbar.scss";
import { Link, Router, useLocation } from "wouter";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const [navArray, setNavArray] = useState([]);
  useEffect(() => {
    
  const navArray = (location[0] === '/') ? ["home", "about", "courses", "FAQ"] : [{name: "home", id: ""},{name: "terms of use", id:"terms-of-use"},{name: "privacy policy", id: "policy"}];
    setNavArray(navArray)
  },[])
  return (
  
    
  <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.logo} alt="logo" /> */}
        <a href="/" className="logo-font text-3xl font-extrabold lowercase bg-gradient-to-bl from-blue-500 to-blue-800 bg-clip-text text-transparent ">
          Neechal
        </a>
      </div>
      <ul className="app__navbar-links">
        {navArray.map((item, idx) => (
          <li className="app__flex p-text" key={`link-${idx}`}>
            <div /> {
            location[0] === '/' ?  <a href={`#${item}`}>{item}</a> : <Link href={`/${item.id}`} >{item.name}</Link>
              
            }
            

          </li>
        ))}
      </ul>
      {
        location[0] === '/' ? <a
        className=" items-center gap-2 hidden md:inline-flex rounded-lg border border-indigo-600 px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
        href="#register"
      >
        <span className="text-md font-medium"> Register </span>
        <svg
          className="size-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a> : ""
      }

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
          initial={{ x: 300 }}  // Start position
          animate={{ x: 0 }}    // End position (when open)
          exit={{ x: 300 }}     // Exit position (when closed)
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
        
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navArray.map((item,idx) => (
                <li key={idx}>
                  {
            location[0] === '/' ?  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a> : <Link href={`/${item.id}` } onClick={() => setToggle(false)}>{item.name}</Link>

                  }
                  {/* <a href={`/#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a> */}
                  {/* <Link href={`/`} onClick={() => setToggle(false)}>{item}</Link> */}
                </li>
              ))}
              
            </ul>
          </motion.div>
        )}
      </div>
    </nav>


   
    
  );
};

export default Navbar;
