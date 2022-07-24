import React from 'react'

// Components
import Top from '../components/sections/Top';
import Posts from '../components/sections/Posts';
import Sidebar from '../components/sections/Sidebar';
import Ad from '../components/cards/Ad';
import { dropIn } from '../components/framer-motion/variants';
import { childDrop } from '../components/framer-motion/variants';

// Packages
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <motion.div  className='' variants={dropIn} initial="initial" animate="animate" exit="exit" >
        
        <Top/>
        
      <div className="grid grid-cols-6  lg:border gap-5 grid-flow-col my-5 relative">

        <div className=" col-start-1 col-end-7  lg:col-start-1 lg:col-end-5 ">
          
              <Posts title={'Latest'}/>
              <Ad/>
              <Posts/>
        </div>

        <div className="col-start-5 col-end-7 h-max hidden lg:block  sticky top-0">
            <Sidebar/>
        </div>


      </div>




    </motion.div>
  )
}

export default Home;