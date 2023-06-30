import React, {useState} from 'react'
import NavBar from '../components/BaseComponents/NavBar';
import Hero from '../components/HomeComponents/Hero'
import HomeContent from '../components/HomeComponents/HomeContent';


function Home() {


  return (
   <div className='h-[100vh] w-[100%]'>
    <NavBar></NavBar>
    <Hero/>
    <HomeContent/>
    </div>
  )
}

export default Home