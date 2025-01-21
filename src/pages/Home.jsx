import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import About from '../components/Abouts'
import Timming from '../components/Timming'
import Footer from '../components/Footer'
import TempleHistory from '../components/TempleHistory'

function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Slider></Slider>
    <About></About>
    <Timming></Timming>
    <TempleHistory></TempleHistory>
    <Footer></Footer>
    </>
  )
}

export default Home