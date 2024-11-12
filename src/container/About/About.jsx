import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../Wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

// const abouts = [
//   { title: 'Frontend', description: 'I am a Frontend developer', imgUrl: images.about01 },
//   { title: 'Backend', description: 'I am a Backend developer', imgUrl: images.about02 },
//   { title: 'Full Stack', description: 'I am a Fullstack developer', imgUrl: images.about03 },
//   { title: 'Tutor', description: 'I am a Tutor', imgUrl: images.about04 }
// ]

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
   const query = '*[_type == "abouts"]';

   client.fetch(query)
   .then((data) => setAbouts(data))
  }, []);
  
  return (
    <>
      <h2 className="head-text">
        {/* We know that <span>Good Education</span><br /> means <span>Great Opportunities</span> */}
        What Neechal Offers You
      </h2>
    {/* { console.log(abouts.map((x,y) => x._updatedAt))} */}
      <div className="app__profiles">
        {abouts.reverse().map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{scale: 1.1}}
            transition={{ duration: 0.5, type: 'tween'}}
            className="app__profile-item bg-gray-100 p-5"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
            <h2 className="text-md text-gray-700" style={{ marginTop: 10 }}>{about.description}</h2>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap( 
  MotionWrap(About, 'app__about'), 
  'about',
  'app__whitebg' 
  );