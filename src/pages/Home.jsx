import React from 'react'
import Horizontal from '../components/cards/Horizontal';
import Header from '../components/Header/Header';
import Logo from '../components/Header/Logo';
import Top from '../components/sections/Top';
import Posts from '../components/sections/Posts';
import Sidebar from '../components/sections/Sidebar';
import Strip from '../components/strips/Strip';
import Ad from '../components/cards/Ad';

const Home = () => {
  return (
    <div className=''>
        
        <Top/>
      <div className="grid grid-cols-6  lg:border gap-5 grid-flow-col my-5">

        <div className=" col-start-1 col-end-7  lg:col-start-1 lg:col-end-5 ">
          
              <Posts title={'Latest'}/>
              <Ad/>
              <Posts/>
        </div>

        <div className="col-start-5 col-end-7 h-max hidden lg:block">
            <Sidebar/>
        </div>


      </div>




    </div>
  )
}

export default Home;