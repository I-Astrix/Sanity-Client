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

        <Logo/>
       <Header/>
      <Top/>

      <div className="grid grid-cols-6 gap-5 grid-flow-col my-5">

        <div className="col-start-1 col-end-5 ">
              <Posts title={'Latest'}/>
              <Ad/>
              <Posts/>
        </div>

        <div className="col-start-5 col-end-7 h-max">
            <Sidebar/>
        </div>


      </div>




    </div>
  )
}

export default Home;